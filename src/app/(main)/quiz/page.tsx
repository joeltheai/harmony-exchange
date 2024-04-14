import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const QuizPage = () => {
  return (
    <div className="mt-12">
      <MaxWidthWrapper>
        <div className="items-center justify-center">
          <div className="divider divider-start divider-neutral px-16 text-lg">
            General quizzes
          </div>

          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/quiz/beginner-general" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-[#ffba00] hover:bg-yellow-400 transition-all">
                  <div className="card-body text-white">
                    <h2 className="card-title ">Beginner quiz</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>


          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/quiz/intermediate-general" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-violet-800 hover:bg-violet-900 transition-all">
                  <div className="card-body text-white">
                    <h2 className="card-title ">Intermediate quiz</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/quiz/advanced-general" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-red-800 hover:bg-red-900 transition-all">
                  <div className="card-body text-white">
                    <h2 className="card-title ">Advanced Quiz</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="divider divider-start divider-neutral px-16 text-lg">
            Topic based quiz
          </div>

          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/quiz/pitchquiz" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-emerald-800 hover:bg-emerald-900 transition-all">
                  <div className="card-body text-white">
                    <h2 className="card-title ">Pitch quiz</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

{/*  */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default QuizPage;
