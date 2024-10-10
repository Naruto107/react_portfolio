const Experience = () => {
    return (
      <div id="projects">
        <div className="border-b border-neutral-700 pb-4 lg:mb-35 "></div>
        <h1 className="my-20 text-center text-4xl text-white">Projects</h1>
        <div className="flex flex-wrap justify-center items-center ml-32 mb-8">
          
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="font-bold text-neutral-400 mb-5">Smart Supermarket Solution (Python, Pandas, FPDF)
            </h1>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>● Developed a python program to produce discount offer sticker automatically with store’s database for more than
              5000 different products.</li>
              <li>● Implemented python libraries like Pandas, FPDF, PIL to import the sticker template, fill in the required
information into it and produce a new pdf file with the information filled in output folder.
</li>
              
            </ul>
          </div>
  
         
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="font-bold text-neutral-400 mb-5"> Full stack To-do List App (HTML, CSS, JavaScript, Node js, Express js, PostgreSQL)</h1>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>● Developed a full stack to-do list app.
              </li>
              <li>●Created a functionality to add new tasks, update tasks, edit tasks and delete the tasks.</li>
              <li>●Made a database using PostgreSQL to store the tasks.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:px-4 mt-5">
            <h1 className="font-bold text-neutral-400 mb-5"> Self-balancing vehicle</h1>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>●  Created a self-balancing bike</li>
              <li>● • Employed principles of physics and mechanics to create a design that maintains stability through a carefully
              calculated center of gravity and gyroscopic effects.</li>
              <li>Utilized appropriate materials and structural designs to enhance the bike's durability and performance.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="font-bold text-neutral-400 mb-5"> Magnetic suspension</h1>
            <ul className="text-white text-sm mt-2 list-disc list-inside">
              <li>● Developed a magnetic suspension system that utilizes magnetic levitation principles..</li>
              <li>● Engineered a design that effectively utilizes magnetic forces to achieve levitation, providing smooth and
              frictionless movement.</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-neutral-700 pb-4 lg:mb-35 "></div>
      </div>
      
    );
  };
  
  export default Experience;
  