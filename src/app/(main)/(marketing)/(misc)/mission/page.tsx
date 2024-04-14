import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Mission = () => {
  return (
    <div>
      <div className=" mt-32"></div>
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-4 text-4xl font-bold">Our Mission</h1>
          <div className="mb-8">
            <p className="mb-4 text-lg">
              At Harmony Exchange, our mission is to democratize music education
              by providing an inclusive online platform offering comprehensive
              lessons, interactive exercises, and collaborative learning
              opportunities. We envision a world where every individual,
              regardless of background or location, can access high-quality
              musical instruction, fostering creativity, self-expression, and
              personal growth.
            </p>
            <p className="mb-4 text-lg">
              Our goal is to empower students to develop their musical skills,
              build confidence, and cultivate a lifelong passion for music.
              Through innovation, accessibility, and community, we strive to
              create a harmonious environment where learners of all levels can
              thrive and connect with the transformative power of music.
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg">Join Our Mission</button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Mission;
