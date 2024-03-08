import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        
        
        <div>
          <Button className=" bg-red-800">click me</Button>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
