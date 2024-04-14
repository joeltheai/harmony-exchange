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
    answer: "Major",
    image: "Major.png",
  },
  {
    answer: "Major",
    image: "Major 2.png",
  },
  {
    answer: "Natural Minor",
    image: "Natural Minor.png",
  },
  {
    answer: "Natural Minor",
    image: "Natural Minor 2.png",
  },
  {
    answer: "Natural Minor",
    image: "Natural Minor 3.png",
  },
  {
    answer: "Harmonic Minor",
    image: "Harmonic Minor.png",
  },
  {
    answer: "Harmonic Minor",
    image: "Harmonic Minor 2.png",
  },
  {
    answer: "Melodic Minor",
    image: "Melodic Minor.png",
  },
  {
    answer: "Melodic Minor",
    image: "Melodic Minor 2.png",
  },
  {
    answer: "Melodic Minor",
    image: "Melodic Minor 3.png",
  }
];

const ScaleIdentification = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const symbolss = [
    "Major",
    "Natural Minor",
    "Harmonic Minor",
    "Melodic Minor"
  ];
  const n = 6; // Limit the number of questions

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
                  src={`/scale/${shuffledQuestions[currentQuestionIndex].image}`}
                  alt="Scale Identification"
                  width={640}
                  height={182}
                  key={shuffledQuestions[currentQuestionIndex].image}
                />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
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


export default ScaleIdentification;