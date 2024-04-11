"use client";
import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

// Define the structure for a question
type Question = {
  question: string;
  options: string[];
  answer: string;
  image?: string;
  width?: number;
};

// Your quiz questions
const quizQuestions: Question[] = [
  {
    question: "Which note needs to be added to make a tonic triad in G major?",
    options: ["D", "F sharp", "G"],
    answer: "D",
    image: "/b1.png",
  },
  {
    question: "Name this interval:",
    options: ["3rd", "4th", "5th"],
    answer: "3rd",
    image: "/b2.png",
  },
  {
    question: "Name this interval:",
    options: ["Unison", "5th", "Octave"],
    answer: "Unison",
    image: "/b3.png",
  },
  {
    question: "The following is:",
    options: [
      "an arpeggio going down",
      "a scale going down",
      "an arpeggio going up",
    ],
    answer: "an arpeggio going down",
    image: "/b4.png",
    width : 400
  },
  {
    question: "Which notes would you find in the tonic triad of F major?",
    options: ["FGA", "FAC", "FAD"],
    answer: "FGA",
  },
  {
    question: "Dynamic markings tell the player:",
    options: [
      "how loudly or softly to play",
      "what speed to play the music",
      "to play the notes detached",
    ],
    answer: "how loudly or softly to play",
  },
  {
    question: "What does legato mean?",
    options: ["play smoothly", "play softly", "play with an accent"],
    answer: "play smoothly",
  },
  {
    question: "For how many crotchet beats does this rest last?",
    options: ["2", "3", "4"],
    answer: "2",
    image: "/b8.png",
  },
  {
    question:
      "To return the last note to the pitch of the first note, which accidental would you put just before it?",
    options: ["♮", "♭", "♯"],
    answer: "♮",
    image: "/b9.png",
    width : 400
  },
  {
    question: "Which note is doh in the key of F major?",
    options: ["F", "G", "C"],
    answer: "F",
  },
];

const QuizForm = () => {
  const [answers, setAnswers] = useState<string[]>(
    new Array(quizQuestions.length).fill(""),
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <MaxWidthWrapper>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 px-4"
      >
        {quizQuestions.map((question, index) => (
          <div
            key={index}
            className={`w-full p-5 ${
              submitted && answers[index] !== question.answer
                ? "bg-red-800 text-white"
                : "bg-base-100"
            }`}
          >
            <div className="divider divider-start divider-neutral font-bold text-slate-400">
              Question {index + 1}
            </div>
            <p className="text-lg font-semibold">{question.question}</p>
            {question.image && (
              <div className="my-4">
                <Image
                  src={`/quiz_images${question.image}`}
                  alt={`Question ${index + 1} Image`}
                  width={question.width || 300}
                  height={100}
                />
              </div>
            )}
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="label cursor-pointer">
                <span
                  className={`label-text ${
                    submitted &&
                    answers[index] === option &&
                    option !== question.answer
                      ? "text-red-500"
                      : submitted && option === question.answer
                        ? "font-bold text-green-500"
                        : ""
                  }`}
                >
                  {option}
                </span>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleOptionChange(index, option)}
                  className="radio checked:bg-blue-500"
                  checked={answers[index] === option}
                  disabled={submitted}
                />
              </label>
            ))}
          </div>
        ))}
        {!submitted && (
          <button type="submit" className="btn btn-primary mb-10 mt-12">
            Submit
          </button>
        )}
        {submitted && (
          <div className="card mb-10 mt-6 flex w-96 items-center justify-center  bg-slate-100 p-4 text-center shadow-xl">
            <p className="mb-4">
              Your score is {score}/{quizQuestions.length}.
            </p>
            <progress
              className="progress progress-info w-56"
              value={score}
              max={quizQuestions.length}
            ></progress>
          </div>
        )}
      </form>
    </MaxWidthWrapper>
  );
};

export default QuizForm;
