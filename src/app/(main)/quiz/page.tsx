import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const QuizPage = () => {
  return (
    <MaxWidthWrapper>
      <div className=" pl-64">
        <div className="p-4">
          <Link href="/quiz/pitchquiz" passHref>
            <div className=" card w-96 transform cursor-pointer bg-base-100 shadow-xl transition duration-75 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-base-200">
              <div className="card-body">
                <h2 className="card-title">The Pitch Quiz</h2>
                <p>Test your knowledge on Pitch concepts</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default QuizPage;
