import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-red-700 p-4 text-white">
      <div className="container mx-auto">
        <Link href="/">
          <Image
            src="/logo_header.svg"
            width={50}
            height={40}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
