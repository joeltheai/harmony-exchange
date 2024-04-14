"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link for navigation

// Define the type for a question
type Question = {
  image: string;
  answer: string;
};

// Assuming your questions array is defined as before
const questions: Question[] = [
  {
    answer: "Augmented Triad",
    image: "Augmented Triad.png",
  },
  {
    answer: "Augmented Triad",
    image: "Augmented Triad 2.png",
  },
  {
    answer: "Augmented Triad",
    image: "Augmented Triad 3.png",
  },
  {
    answer: "Diminished 7th",
    image: "Diminished 7th.png",
  },
  {
    answer: "Diminished 7th",
    image: "Diminished 7th 2.png",
  },
  {
    answer: "Diminished Triad",
    image: "Diminished Triad.png",
  },
  {
    answer: "Diminished Triad",
    image: "Diminished Triad 2.png",
  },
  {
    answer: "Diminished Triad",
    image: "Diminished Triad 3.png",
  },
  {
    answer: "Dominant 7th",
    image: "Dominant 7th.png",
  },
  {
    answer: "Dominant 7th",
    image: "Dominant 7th 2.png",
  },
  {
    answer: "Half-diminished 7th",
    image: "Half-diminished 7th.png",
  },
  {
    answer: "Half-diminished 7th",
    image: "Half-diminished 7th 2.png",
  },
  {
    answer: "Major 7th",
    image: "Major 7th.png",
  },
  {
    answer: "Major 7th",
    image: "Major 7th 2.png",
  },
  {
    answer: "Major Triad",
    image: "Major Triad.png",
  },
  {
    answer: "Major Triad",
    image: "Major Triad 2.png",
  },
  {
    answer: "Minor 7th",
    image: "Minor 7th.png",
  },
  {
    answer: "Minor 7th",
    image: "Minor 7th 2.png",
  },
  {
    answer: "Minor Triad",
    image: "Minor Triad.png",
  },
  {
    answer: "Minor Triad",
    image: "Minor Triad 2.png",
  },
];

const ChordIdentification = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const symbolss = [
    "Augmented Triad",
    "Diminished 7th",
    "Diminished Triad",
    "Dominant 7th",
    "Half-diminished 7th",
    "Major 7th",
    "Major Triad",
    "Minor 7th",
    "Minor Triad",
  ];
  const n = 11; // Limit the number of questions

  // Shuffle questions array and store it in state
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle the questions array
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    if (
      shuffledQuestions[currentQuestionIndex] &&
      answer === shuffledQuestions[currentQuestionIndex].answer
    ) {
      setShowNext(true);
      if (selected === null) {
        // First try
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < n) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
      setShowNext(false);
    } else {
      alert(`Game over! Your score is ${score}/${n}.`);
    }
  };

  const retakeTest = () => {
    // Shuffle the questions array again
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelected(null);
    setShowNext(false);
    setScore(0);
  };

  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        {shuffledQuestions.length > 0 && currentQuestionIndex < n && (
          <>
            <div className="relative h-48 w-full max-w-xl">
              <Image
                src={`/chord/${shuffledQuestions[currentQuestionIndex].image}`}
                alt="Chord Identification"
                width={800}
                height={182}
                key={shuffledQuestions[currentQuestionIndex].image}
              />
            </div>
            <div className=" mt-28 grid grid-cols-3 gap-2">
              {symbolss.map((number) => (
                <button
                  key={number}
                  className={`btn m-2 ${selected === number ? (number === shuffledQuestions[currentQuestionIndex].answer ? "btn-success" : "btn-error") : ""}`}
                  onClick={() => handleAnswer(number)}
                  disabled={showNext}
                >
                  {number}
                </button>
              ))}
            </div>
            <div>
            <progress className="progress progress-warning w-96" value={currentQuestionIndex} max={n-1}></progress>
            </div>
            
          </>
        )}
        {showNext && currentQuestionIndex + 1 < n && (
          <div>
            <button className="btn btn-primary mt-4" onClick={handleNextQuestion}>
              Next Question
            </button>
          </div>
        )}
        {currentQuestionIndex + 1 === n && (
          <>
            <div className="card mb-10 mt-6 flex justify-center text-center items-center  w-96 bg-slate-100 p-4 shadow-xl">
              <p className="mb-4">
                  Your score is {score}/{n-1}.
              </p>
              <progress className="progress accent-red-700 w-56" value={score} max={n-1}></progress>
            </div>
            <button className="btn btn-primary mt-4" onClick={retakeTest}>
              Retake Test
            </button>
            <Link href="/exercises">
              <div className="btn mt-4  bg-slate-600">Return to Exercises</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};


export default ChordIdentification;