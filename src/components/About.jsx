import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h1 className="text-white my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="About me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="text-white flex justify-end">
              Greetings, I am Aditya Badve. I am currently pursuing my bachelor's at JSPM's Rajarshi Shahu College of Engineering. Beyond the realm of academics, I am passionate about exploring innovative solutions and have a knack for problem-solving. Whether it's something that I have worked with or something completely new to me, I thrive on the challenges that technology presents. My commitment to continuous learning is reflected in my active participation in extracurricular activities, showcasing not just technical skills but also effective collaboration and communication. As I navigate through the dynamic landscape of computer science, my aim is to contribute meaningfully to the ever-evolving world of technology. Switching gears, here's a glimpse into some of my hobbies:
            </p>
          </div>
          <div className="text-white mt-4">
            <ul className="list-disc ml-5">
              <li>Football</li>
              <li>Playing Guitar</li>
              <li>MMA</li>
              <li>Cooking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
