import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Heading from "../_components/Heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" mt-28 flex flex-col ">
        <div className=" flex flex-col items-center justify-center  text-center">
          <Heading />
          <div className="mt-14 flex flex-row gap-8">
            <Button className="  flex flex-col bg-red-600 hover:bg-yellow-500">
              <Link href="/signup">Get started</Link>
            </Button>

            <Link href="/">
              <Button
                variant="ghost"
                className=" bg-slate-100 hover:bg-slate-200"
              >
                More info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
