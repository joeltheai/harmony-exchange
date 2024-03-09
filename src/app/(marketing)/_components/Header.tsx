import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LoginButton from "../_components/LoginButton";

const Header = () => {
  return (
    <div className="fixed z-50 w-full bg-red-700 p-4 ">
      <MaxWidthWrapper>
        <div className=" flex flex-row justify-between">
          <header className="flex items-center justify-center text-center text-white">
            <div className="container">
              <Link href="/">
                <Image
                  src="/logo_header.svg"
                  width={60}
                  height={40}
                  alt="logo_header"
                />
              </Link>
            </div>
          </header>
          <LoginButton />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
