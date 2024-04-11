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
    options: ["B", "F", "G"],
    answer: "G",
    image: "a1.png",
  },
  {
    question: "Name this note",
    options: ["E flat", "C flat", "E natural"],
    answer: "E flat",
    image: "a2.png",
  },
  {
    question: "Name the notes to find the hidden word:",
    options: ["DEAF", "DEED", "FEED"],
    answer: "DEED",
    image: "a3.png",
  },
  {
    question: "How many crotchet beats are there in a semibreve?",
    options: ["4", "3", "2"],
    answer: "4",
    
  },
  {
    question:
      "Add the total number of crotchet beats in these note values and rests:",
    options: ["5", "6", "7"],
    answer: "6",
    image: "a5.png",
    width : 400
  },
  {
    question:
      "To lower the pitch of this note by a semitone, which accidental would you put just before it?",
    options: ["♭", "♯", "♮"],
    answer: "♭",
    image: "a6.png",
  },
  {
    question: "Which pair of notes has a distance of a semitone between them?",
    options: ["A and B♭", "F and G", "G and A"],
    answer: "A and B♭",
    image: "a7.png",
    width : 800
  },
  {
    question: "Which note is the tonic in the key of F major?",
    options: ["F", "C", "G"],
    answer: "F",
    image: "",
  },
  {
    question: "Which major key has the following key signature?",
    options: ["G major", "F major", "C major"],
    answer: "F major",
    image: "a9.png",
  },
  {
    question: "Which chord symbol fits above this tonic triad?",
    options: ["C", "F", "G"],
    answer: "C",
    image: "a10.png",
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
                  src={`/quiz_images/${question.image}`}
                  alt={`Question ${index + 1} Image`}
                  width={question.width || 200}
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
          <div className="card mb-10 mt-6 flex justify-center text-center items-center  w-96 bg-slate-100 p-4 shadow-xl">
            <p className="mb-4">
              Your score is {score}/{quizQuestions.length}.
            </p>
            <progress className="progress progress-info w-56" value={score} max={quizQuestions.length}></progress>
          </div>
          
        )}
      </form>
    </MaxWidthWrapper>
  );
};

export default QuizForm;