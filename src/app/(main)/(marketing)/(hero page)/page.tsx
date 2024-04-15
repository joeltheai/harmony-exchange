import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Heading from "../../_components/Heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CascadingStuff from "../../_components/Cascading";
import ChatBubblesComp from "../../_components/ChatBubbles";
import { currentUser } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" ">
      {/* here is a comment */}
      <div className=" mt-28 flex flex-col ">
        <div className=" flex flex-col items-center justify-center  text-center">
          <Heading />
          <div className="mt-14 flex flex-row gap-8">
            <Button className="  flex flex-col bg-red-600 hover:bg-yellow-500">
              <Link href="/lessons">Get started</Link>
            </Button>

            <Link href="/about">
              <Button
                variant="ghost"
                className=" bg-slate-100 hover:bg-slate-200"
              >
                More info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className=""></div>
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="https://utfs.io/f/53bc8a8d-9d23-47dd-afe6-a27334556c3a-1d.png"
                alt="an image 1"
                width={400}
                height={400}
              />
              <div>EXPLORE OUR LESSONS</div>
            </div>
            <div>
              <Image
                src="https://utfs.io/f/f2d9b2aa-a563-428e-84a2-2eafe6489e12-1e.png"
                alt="an image 2"
                width={400}
                height={400}
              />
              <div>LEARNING THROUGH EXERCISES</div>
            </div>
            <div>
              <Image
                src="https://utfs.io/f/dff4b677-c7e5-442c-b838-cea689f68b12-1f.png"
                alt="an image 3"
                width={400}
                height={400}
              />
              <div>CONNECT WITH TEACHERS</div>
            </div>
          </div>

          {/* <MaxWidthWrapper>
            <div className=" mt-40 items-center justify-center gap-11 text-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row lg:px-20">
              <div className=" justify-start  text-xl md:text-xl lg:pl-10 lg:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Quibusdam in esse quidem maxime debitis et <br />
                itaque cupiditate sunt eaque. Eaque in tenetur <br />
                distinctio inventore? Dolores eveniet molestiae <br />
                dolor officia ea maiores? Officiis, omnis repudiandae <br />
                vitae corrupti ipsam consequuntur totam. Soluta quo <br />
                sit doloremque facilis aliquid, eveniet aspernatur <br />
                harum laborum cupiditate !<br />
              </div>
              <Image
                className=" items-center justify-center"
                src="/hero/38-Teacher.png"
                width={200}
                height={200}
                alt="logo_header"
              />
            </div>
          </MaxWidthWrapper> */}
          <div className="mt-24"></div>

          {/* <ChatBubblesComp /> */}

          {/* <Image
            className="mt-24"
            src="/hero/image 2.png"
            width={350}
            height={350}
            alt="logo_header"
          /> */}

          <span className="flex-shrink mx-4 text-gray-700"> . </span> 
          <span className="flex-shrink mx-4 text-gray-700"> -------------------------------------------------------------------- ♭ -------------------------------------------------------------------- </span>
          <span className="flex-shrink mx-4 text-gray-700"> . </span> 

          <div className= "justify-between gap-28 flex flex-row">
          <p className = "text-justify ">
          At Harmony Exchange, we believe that music is a universal <br></br>
          online platform where aspiring musicians of all levels can <br></br>
          access high-quality lessons, engaging exercises, and interactive <br></br>
          learning experiences. We envision a world where music education is <br></br>
          accessible to anyone, anywhere, fostering creativity, self-expression,<br></br>
           and a deeper connection to the art form. Our goal is to empower <br></br>
           students to develop their musical skills, build confidence, and  <br></br>
           cultivate a lifelong passion for music. 
          
          </p>
          <Image
                src="/musicnotes.png"
                alt="an image 3"
                width={380}
                height={380}
                
              />
          
          </div>
          <span className="flex-shrink mx-4 text-gray-700"> . </span> 
          <span className="flex-shrink mx-4 text-gray-700"> -------------------------------------------------------------------- ♭ -------------------------------------------------------------------- </span>
          <span className="flex-shrink mx-4 text-gray-700"> . </span> 


          <div className= "justify-between gap-56 flex flex-row">
          <Image
                src="/treble.png"
                alt="an image 3"
                width={150}
                height={100}
              />
            <CascadingStuff />
            <Image
                src="/treble.png"
                alt="an image 3"
                width={150}
                height={100}
              />
          </div>

          <span className="flex-shrink mx-4 text-gray-700"> . </span> 
          <span className="flex-shrink mx-4 text-gray-700"> -------------------------------------------------------------------- ♭ -------------------------------------------------------------------- </span>
          <span className="flex-shrink mx-4 text-gray-700"> . </span> 


          <div className= "justify-between gap-48 flex flex-row">
          <Image
                src="/palette.png"
                alt="an image 4"
                width={300}
                height={100}
              />
          <p className = "text-right ">
          At Harmony Exchange, we believe in the power of music to <br></br>
          transcend boundaries and connect people from all walks of life. <br></br>
          Whether you are a complete novice or a seasoned musician, our <br></br>
          comprehensive resources cater to diverse interests and skill levels. <br></br>
          From interactive lessons and tutorials to insightful articles and <br></br>
          forums, we provide a wealth of educational materials designed to foster <br></br>
          creativity and inspire growth. What sets Harmony Exchange apart is our <br></br>
          emphasis on community engagement and collaboration. Through our <br></br>
          innovative features, users can connect with like-minded individuals, <br></br>
          share their musical creations, and receive constructive feedback from <br></br>
          peers and experts alike.
          
          </p>
          </div>

          {/* <a className="card title link link-accent">Im a simple link</a> */}
        </div>
      </div>
    </div>
  );
}