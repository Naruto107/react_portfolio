const Experience = () => {
    return (
      <div>
        <h1 className="my-20 text-center text-4xl text-white">Experience</h1>
        <div className="flex flex-wrap justify-center items-center ml-32 mb-8">
          
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="font-bold text-neutral-400 mb-5">Aug 2024 - Aug 2024</h1>
            <h3 className="font-semibold text-sm text-white">Frontend Developer - Oasis Infobyte</h3>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>● Developed a dynamic landing page for Get Me a Job website using HTML and CSS.</li>
              <li>● Created a personal portfolio website using HTML and CSS.</li>
              <li>● Built a Temperature Converter using HTML, CSS, and JavaScript which seamlessly switches between Celsius, Fahrenheit, and Kelvin.</li>
            </ul>
          </div>
  
         
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="font-bold text-neutral-400 mb-5">Aug 2024 - Sep 2024</h1>
            <h3 className="font-semibold text-sm text-white">Full Stack Developer - Codsoft</h3>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>● Created a full stack blogging website from scratch.</li>
              <li>● Implemented CRUD operations to create, post, edit, and delete the blogs.</li>
              <li>● Developed a full stack Project Management website.</li>
              <li>● Created functionality to create, update, delete, search, and sort the tasks.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  