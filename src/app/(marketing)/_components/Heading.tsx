import { lobster } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-5xl md:text-4xl">Live. Love. Learn.</h1>
      <h1
        className={cn(
          " inline-block  bg-gradient-to-r from-red-600 via-yellow-500 to-cyan-400 bg-clip-text pe-1.5 text-9xl text-transparent",
          lobster.className,
        )}
      >
        MUSIC
      </h1>
      <h3 className=" ">
        Enhance your ability to read, write, and play music through effective
        exercises and interactive tools. For free, forever.
      </h3>
    </div>
  );
};

export default Heading;
