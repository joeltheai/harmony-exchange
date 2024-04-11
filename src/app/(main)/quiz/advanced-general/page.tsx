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
    question: "Name this note",
    options: ["B flat", "D flat", "E flat"],
    answer: "B flat",
    image: "/c1.png",
  },
  {
    question: "What does the 2 mean in this time signature?",
    options: [
      "Count in crotchet beats",
      "Count in minim beats",
      "Count 2 beats in a bar",
    ],
    answer: "Count in minim beats",
    image: "/c2.png",
  },
  {
    question: "For how many quaver beats does this note last?",
    options: ["2", "1", "½"],
    answer: "2",
    image: "/c3.png",
  },
  {
    question:
      "Add the total number of crotchet beats of silence in these rests.",
    options: ["6", "7", "9"],
    answer: "6",
    image: "/c4.png",
    width: 700,
  },
  {
    question: "The relative minor of G major is what?",
    options: ["E minor", "G minor", "A minor"],
    answer: "E minor",
  },
  {
    question: "The correct label for the following scale is:",
    options: [
      "A natural minor scale going down",
      "F major scale going up",
      "A natural minor scale going up",
    ],
    answer: "A natural minor scale going down",
    image: "/c6.png",

    width: 700,
  },
  {
    question: "Which chord symbol fits above this tonic triad?",
    options: ["Em", "D", "G"],
    answer: "Em",
    image: "/c7.png",
  },
  {
    question: "Name this interval",
    options: ["Minor 3rd", "Major 2nd", "Minor 2nd"],
    answer: "Minor 3rd",
    image: "/c8.png",
  },
  {
    question: "What is the following?",
    options: [
      "D minor tonic triad in first inversion",
      "F major tonic triad in first inversion",
      "F major tonic triad in root position",
    ],
    answer: "D minor tonic triad in first inversion",
    image: "/c9.png",
  },
  {
    question: "Which chord symbol fits above this tonic triad?",
    options: ["Dm", "F", "Em"],
    answer: "Dm",
    image: "/c10.png",
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
