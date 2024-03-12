"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SidebarNav = () => {
  let pathname = usePathname();
  console.log(pathname);

  const cardTitles = [
    "Notes",
    "Staff",
    "Clefs",
    "Accidentals",
    "Intervals",
    "Chords",
    "Scales",
    "Keys",
  ];

  return (
    <div className="  flex flex-col ">
      {cardTitles.map((title) => {
        const linkPath = `/lessons/${title.toLowerCase()}`;
        return (
          <Link
            key={title}
            href={linkPath}
            passHref
            className={clsx(
              "block justify-center rounded-md p-3  text-center text-sm transition-colors",
              pathname === linkPath
                ? "bg-yellow-200 font-bold  text-yellow-900"
                : "bg-gray-50 font-medium hover:bg-gray-100",
            )}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarNav;
