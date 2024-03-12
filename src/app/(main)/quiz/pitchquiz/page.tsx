"use client";
import { useState } from "react";

// Define the structure for a question
type Question = {
  question: string;
  options: string[];
  answer: string;
};

// Your quiz questions
const quizQuestions: Question[] = [
  {
    question:
      "How many natural notes are there in music from the Western world?",
    options: ["Five", "Seven", "Nine", "Twelve"],
    answer: "Seven",
  },
  {
    question: "Where is Middle C located on a standard piano with 88 keys?",
    options: [
      "First C from the left",
      "Second C from the left",
      "Third C from the left",
      "Fourth C from the left",
    ],
    answer: "Fourth C from the left",
  },
  {
    question:
      "What is the purpose of using middle C as a reference point in music?",
    options: [
      "To make the note sound louder",
      "To make it easier to play the right version of the note",
      "To add complexity to the music",
      "To change the pitch of the note",
    ],
    answer: "To make it easier to play the right version of the note",
  },
  {
    question: "What is an octave in music?",
    options: [
      "A scale with twelve notes",
      "A distance between two notes",
      "A type of musical instrument",
      "A series of chords",
    ],
    answer: "A distance between two notes",
  },
  {
    question: "Which octave includes Middle C on the piano?",
    options: ["Octave 1", "Octave 2", "Octave 3", "Octave 4"],
    answer: "Octave 4",
  },
  {
    question:
      "What is the distance between natural notes E and F, and between natural notes B and C?",
    options: ["Whole step", "Half step", "Two whole steps", "Three half steps"],
    answer: "Half step",
  },
  {
    question: "How many spaces are there in the staff?",
    options: ["Three", "Four", "Five", "Six"],
    answer: "Four",
  },
  {
    question: "What do notes written on the lines of the staff represent?",
    options: ["Flat notes", "Sharp notes", "Natural notes", "Rests"],
    answer: "Natural notes",
  },
  {
    question: "What are ledger lines primarily used for in music notation?",
    options: [
      "To indicate changes in key signature",
      "To extend the staff for high or low notes",
      "To denote musical articulation",
      "To signify time signature changes",
    ],
    answer: "To extend the staff for high or low notes",
  },
  {
    question: "How are ledger lines positioned in relation to the staff?",
    options: [
      "Above the staff",
      "Below the staff",
      "Both above and below the staff",
      "Parallel to the staff",
    ],
    answer: "Both above and below the staff",
  },
  {
    question: "What is the primary function of a clef in music notation?",
    options: [
      "To denote the time signature",
      "To specify the pitch of the notes on the staff",
      "To indicate changes in dynamics",
      "To represent the tempo of the music",
    ],
    answer: "To specify the pitch of the notes on the staff",
  },
  {
    question:
      "Which note does the treble clef indicate falls on the second line of the staff?",
    options: ["C", "D", "E", "G"],
    answer: "G",
  },
  {
    question: "What is the alternative name for the bass clef?",
    options: ["A clef", "C clef", "G clef", "F clef"],
    answer: "F clef",
  },
  {
    question: "What does an accidental do in music notation?",
    options: [
      "It specifies the time signature",
      "It indicates changes in tempo",
      "It raises or lowers a natural note by one or two half steps",
      "It makes it easier to play the right version of the note",
    ],
    answer: "It raises or lowers a natural note by one or two half steps",
  },
  {
    question: "How many different accidentals are there?",
    options: ["Two", "Three", "Four", "Five"],
    answer: "Five",
  },
  {
    question: "What does a double sharp accidental(♯) do to a note?",
    options: [
      "Raises it by one half step",
      "Lowers it by one half step",
      "Raises it by two half steps",
      "Lowers it by two half steps",
    ],
    answer: "Raises it by two half steps",
  },
  {
    question: "Which accidental cancels the effect of another accidental?",
    options: ["Sharp (♯)", "Flat (♭)", "Double sharp (♯♯)", "Natural (♮)"],
    answer: "Natural (♮)",
  },
  {
    question: "What does a flat accidental (♭) do to a note?",
    options: [
      "Raises it by one half step",
      "Lowers it by one half step",
      "Raises it by two half steps",
      "Lowers it by two half steps",
    ],
    answer: "Lowers it by one half step",
  },
  {
    question: "What are enharmonic notes?",
    options: [
      "Notes with different pitches but the same name",
      "Notes with the same pitch but different names",
      "Notes with the same pitch and the same name",
      "Notes with different pitches and different names",
    ],
    answer: "Notes with the same pitch but different names",
  },
  {
    question: "When does an accidental in a key signature apply to notes?",
    options: [
      "Only to notes played by the right hand",
      "Only to notes in the upper staff",
      "Only to notes with the same note name regardless of their location",
      "Only to notes in the first measure",
    ],
    answer:
      "Only to notes with the same note name regardless of their location",
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {quizQuestions.map((question, index) => (
        <div key={index} className="card w-96 bg-base-100 p-4 shadow-xl">
          <p className="text-lg font-semibold text-white">
            {question.question}
          </p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="label cursor-pointer">
              <span className="label-text">{option}</span>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleOptionChange(index, option)}
                className="radio checked:bg-blue-500"
                checked={answers[index] === option}
              />
            </label>
          ))}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {submitted && (
        <div className="card w-96 bg-slate-100 p-4 shadow-xl">
          <p>
            Your score is {score}/{quizQuestions.length}.
          </p>
          <p>Correct answers:</p>
          <ul>
            {quizQuestions.map((question, index) => (
              <li key={index}>
                {index + 1}. {question.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default QuizForm;
