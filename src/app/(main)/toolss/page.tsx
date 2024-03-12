import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ToolsPage = () => {
  return (
    <MaxWidthWrapper>
      <div className=" pl-64">
        <div className="p-4">
          <Link href="/toolss/tempo-tapper" passHref>
            <div className="card w-96 cursor-pointer bg-emerald-100 shadow-xl hover:bg-emerald-200">
              <div className="card-body">
                <h2 className="card-title">Tempo Tapper</h2>
                <p>Find the tempo by clicking on the button</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ToolsPage;
