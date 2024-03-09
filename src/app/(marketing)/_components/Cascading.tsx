import Image from "next/image";

const CascadingStuff = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        className="mt-24"
        src="/HarmonyExchange.png"
        width={450}
        height={350}
        alt="logo_header"
      />

      <Image
        className=""
        src="/HarmonyExchange.png"
        width={400}
        height={350}
        alt="logo_header"
      />

      <Image
        className=""
        src="/HarmonyExchange.png"
        width={350}
        height={350}
        alt="logo_header"
      />
      <Image
        className=""
        src="/HarmonyExchange.png"
        width={300}
        height={350}
        alt="logo_header"
      />
      <Image
        className=""
        src="/HarmonyExchange.png"
        width={250}
        height={350}
        alt="logo_header"
      />
    </div>
  );
};

export default CascadingStuff;
