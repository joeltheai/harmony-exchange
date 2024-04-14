import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const About = () => {
  return (
    <div>
      <div className=" mt-32"></div>
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <div className="mb-8">
            <p className="mb-4 text-lg">
              At Harmony Exchange, we believe that music is a universal
              language, and everyone should have the opportunity to learn and
              appreciate its beauty. Our mission is to provide a dynamic online
              platform where aspiring musicians of all levels can access
              high-quality lessons, engaging exercises, and interactive learning
              experiences.
            </p>
            <p className="mb-4 text-lg">
              We envision a world where music education is accessible to anyone,
              anywhere, fostering creativity, self-expression, and a deeper
              connection to the art form. Our goal is to empower students to
              develop their musical skills, build confidence, and cultivate a
              lifelong passion for music.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold">Our Approach</h2>
            <p className="mb-4 text-lg">
              Through our innovative approach to online learning, we aim to
              create a vibrant community where students can connect with expert
              instructors, collaborate with fellow musicians, and explore the
              rich diversity of musical genres. Whether youre a beginner picking
              up an instrument for the first time or an experienced musician
              looking to expand your repertoire, Harmony Exchange is your
              gateway to musical excellence.
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg">Join Us</button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default About;
