import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const ExercisesPage = () => {
  return (
    <MaxWidthWrapper>
      <div className=" pl-64">
        <div className="p-4">
          <Link href="/exercises/note-id" passHref>
            <div className="card w-96 cursor-pointer bg-emerald-100 shadow-xl hover:bg-emerald-200">
              <div className="card-body">
                <h2 className="card-title">Note reading</h2>
                <p>Train your note Identification skills</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ExercisesPage;
