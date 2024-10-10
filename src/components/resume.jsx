import resume from '../assets/resume.pdf';

const ResumeButton = () => {
  return (
    <div id='resume' className="flex flex-col items-center my-4">
        
      <h1 className="my-20 text-center text-4xl text-white">Resume</h1>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-4 me-2 mb-2'>
  <a 
    role="button" 
    tabIndex="0" 
    href={resume} 
    download 
    className="flex items-center justify-center h-full w-full" 
  >
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 1024 1024" 
      height="1.5em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
    </svg>
    &nbsp;Download CV
  </a>
</button>
    </div>
    
  );
};

export default ResumeButton;

