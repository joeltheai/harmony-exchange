import { lobster } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="text-2xl sm:text-5xl md:text-4xl">Live. Love. Learn.</div>
      <div
        className={cn(
          " inline-block  bg-gradient-to-r from-red-600 via-yellow-500 to-cyan-400 bg-clip-text pe-1.5 text-9xl text-transparent",
          lobster.className,
        )}
      >
        MUSIC
      </div>
      <div className=" ">
        Enhance your ability to read, write, and play music through<br></br> effective
        exercises and interactive tools. For free, forever.
      </div>

    </div>
  );
};

export default Heading;
