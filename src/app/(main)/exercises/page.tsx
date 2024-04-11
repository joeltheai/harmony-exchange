import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const ExercisesPage = () => {
  return (
    <div className="mt-12">
      <MaxWidthWrapper>
        <div className="items-center justify-center">
          <div className="divider divider-start divider-neutral px-16 text-lg">
            Sheet music exercises
          </div>
          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/exercises/note-id" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-red-800 hover:bg-red-900">
                  <div className="card-body text-yellow-400">
                    <h2 className="card-title ">Note reading</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/exercises/note-id" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-red-800 hover:bg-red-900">
                  <div className="card-body text-yellow-400">
                    <h2 className="card-title ">Note reading</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="divider divider-start divider-neutral px-16 text-lg">
            Sheet music exercises
          </div>

          <div className="flex flex-col pl-64">
            <div className="p-4 ">
              <Link href="/exercises/note-id" passHref>
                <div className="card w-4/5 cursor-pointer rounded-btn bg-red-800 hover:bg-red-900">
                  <div className="card-body text-yellow-400">
                    <h2 className="card-title ">Note reading</h2>
                    <p>Train your note Identification skills</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ExercisesPage;
