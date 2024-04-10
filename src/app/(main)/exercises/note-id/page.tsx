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
    answer: "F",
    image: "https://utfs.io/f/4a80ee45-aada-440d-a840-a2bcd0d5fbf4-2u.png",
  },
  {
    answer: "B",
    image: "https://utfs.io/f/c99ffdc9-7aae-47ee-812e-0c92dcd7ce3f-2q.png",
  },
  {
    answer: "B#",
    image: "https://utfs.io/f/487a3d66-ff9a-4058-b76e-c159e0ecce0f-6g2ek3.png",
  },
  {
    answer: "D♭",
    image: "https://utfs.io/f/02e18117-3e80-44ee-9093-c2d5a0e1b058-m6hz0s.png",
  },
  {
    answer: "E♭",
    image: "https://utfs.io/f/0d20cfa3-02b3-47b4-a29a-c59533c3850a-lpgcml.png",
  },
  {
    answer: "A",
    image: "https://utfs.io/f/ae0514dc-ba6b-4da9-8144-66cb8c006e37-2p.png",
  },
  {
    answer: "G",
    image: "https://utfs.io/f/090db8cf-4879-4634-a5ff-230202c9ef3e-2v.png",
  },
  {
    answer: "D",
    image: "https://utfs.io/f/1b4b18d1-b35b-4204-88df-0318c7caf5f7-2s.png",
  },
  {
    answer: "A♭",
    image: "https://utfs.io/f/c81e4958-4b74-4664-84fc-25b1244c582a-nlmu7d.png",
  },
  {
    answer: "E",
    image: "https://utfs.io/f/62a66229-5804-468b-923c-d4eba0021e42-2t.png",
  },
];

const NotesIdentification = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const symbolss = [
    "C#",
    "D#",
    "E#",
    "F#",
    "G#",
    "A#",
    "B#",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C♭",
    "D♭",
    "E♭",
    "F♭",
    "G♭",
    "A♭",
    "B♭",
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
            <Image
              src={shuffledQuestions[currentQuestionIndex].image}
              alt="Note Identification"
              width={640}
              height={182}
              key={shuffledQuestions[currentQuestionIndex].image}
            />
            <div className="mt-4 grid grid-cols-7 gap-2">
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
          </>
        )}
        {showNext && currentQuestionIndex + 1 < n && (
          <button className="btn btn-primary mt-4" onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
        {currentQuestionIndex + 1 === n && (
          <>
            <div>
              Your score is {score}/{n - 1}.
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

export default NotesIdentification;
