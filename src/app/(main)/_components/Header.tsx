import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Header = () => {
  return (
    <div className=" bg-red-700 p-4">
      <MaxWidthWrapper>
        <div className=" flex">
          <header className=" text-white">
            <div className="container">
              <Link href="/">
                <Image
                  src="/logo_header.svg"
                  width={50}
                  height={40}
                  alt="logo_header"
                />
              </Link>
            </div>
          </header>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
