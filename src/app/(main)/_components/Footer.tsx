import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Footer = () => {
  return (
    <>
      <footer className=" bg-red-700 p-4 text-white">
        <MaxWidthWrapper>
          <div className="flex justify-between">
            <div>
              <Link href="/about" className="mr-4">
                About
              </Link>
              <Link href="/mission">Mission</Link>
            </div>
            <div className="flex flex-row">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <Facebook color="white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <Twitter color="white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram color="white" />
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
};

export default Footer;
