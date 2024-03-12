import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { lobster } from "@/components/ui/fonts";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LessonsPage = () => {
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

  const cardSubTitles = [
    "learn about notes ",
    "learn about staff ",
    "learn about clefs ",
    "learn accidentals ",
    "learn about intervals ",
    "learn about chords ",
    "learn about scales ",
    "learn about keys ",
  ];

  const cardImages = [
    "/lessonsImg/notes.png",
    "/lessonsImg/staff.png",
    "/lessonsImg/clefs.png",
    "/lessonsImg/accidentals.png",
    "/lessonsImg/intervals.png",
    "/lessonsImg/chords.png",
    "/lessonsImg/scales.png",
    "/lessonsImg/keys.png",
  ];

  return (
    <MaxWidthWrapper>
      <div className="mb-4 text-center"></div>
      <div className="flex flex-wrap justify-center gap-20">
        {cardTitles.map((title, index) => (
          <div
            key={title}
            className="hover: card mb-4 flex w-full flex-row items-center rounded-box transition hover:scale-105  hover:bg-yellow-100 md:w-1/3"
          >
            <Link href={`/lessons/${title.toLowerCase()}`} key={title}>
              <div className="">
                <Image
                  src={cardImages[index]}
                  alt={title}
                  width={459} // Adjust the width as needed
                  height={218} // Adjust the height to maintain the aspect ratio
                  className="rounded-box"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default LessonsPage;
