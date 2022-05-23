import devIllustration from './undraw_programming_re_kg9v.svg';
import profile from './linkedin.jpeg';
import linkedinLogo from './linkedinLogo.png';
import cv from './icons8-currículo-80.png';
import github from './2048px-Octicons-mark-github.svg.png';
import ProjectsCarousel from '../components/ProjectsCarousel';
import javascript from './../icons8-javascript-96.svg';
import docker from './../icons8-docker.svg';
import mysql from './../icons8-logo-mysql.svg';
import node from './../icons8-nodejs.svg'
import react from './../icons8-reagir.svg'
import typescript from './../icons8-typescript.svg'

function Home () {
  return (
      <div className="min-h-screen bg-charcoal">
        <div class="overflow-hidden fixed top-0  w-full bg-gray-light flex justify-around z-10">
          <a href="#resume" className="text-gray-light text-3xl hover:text-charcoal no-underline">Resume</a>
          <a href="#tech" className="text-gray-light text-3xl hover:text-charcoal no-underline">Technologies</a>
          <a href="#contact" className="text-gray-light text-3xl hover:text-charcoal no-underline hover:text-">Contact</a>
        </div>
        <section className="text-4xl text-charcoal font-bold bg-gray-light h-1/2 pl-40 pt-16 pb-10 flex justify-between">
          <section className="pt-28">
          <h3>Hi there!</h3>
          <h1>My name is Andre Werk</h1>
          <h1>I develop solutions for the Web!</h1>
          </section>
          <img src={ devIllustration } alt="Programming Illustration" className="pr-56 h-96" />
        </section>
        <section className="text-gray-light font-bold bg-charcoal h-1/2 pr-40 pb-20 flex justify-between" id="resume">
        <img src={ profile } alt="Profile" className="ml-48 mt-20 mr-20 h-1/6 rounded-full" />
        <div>
          <h3 className="mt-28 text-4xl" >Would you like to get to know me?</h3>
          <p className="text-2xl mt-20">My goal is to improve peoples lives through technology. Problem solving is my passion and I'll be happy to work with you to build incredibles solutions!</p>
          <p className="text-2xl mt-20">I am Brazilian, graduated in mechanical engineering and I've worked as a Data Analyst in the largest startup acceleration program in the country before deciding to be a Web Developer. During my career, I had the opportunity to live in Israel and Germany, to live and work with people from different countries and backgrounds.</p>
        </div>
        </section>
        <section id="tech" className="text-4xl text-charcoal text-center font-bold bg-gray-light h-1/2 pt-16 pb-20 flex-col justify-between">
        <h1 >What do I work with?</h1>
        <section className="flex justify-around pt-16">
            <img src={ javascript } alt="JavaScript Logo" className="h-32" />
            <img src={ typescript } alt="typescript Logo" className="h-32" />
            <img src={ node } alt="Node Logo" className="h-32" />
            <img src={ docker } alt="Docker Logo" className="h-32" />
            <img src={ mysql } alt="Mysql Logo" className="h-32" />
            <img src={ react } alt="React Logo" className="h-32" />
            
          </section>        
          </section>
        <section className="bg-charcoal text-4xl text-gray-light text-center pt-16 pb-20">
          <h1>What have I done so far?</h1>
        <ProjectsCarousel />
        </section>
        <section id="contact" className="text-4xl text-charcoal text-center font-bold bg-gray-light h-1/2 pt-16 pb-20 flex-col content-center">
        <h1>Want to know more? I invite you to check my CV, my Linkedin and GitHub profile</h1>
        <section className="flex justify-around pt-16">
            <a href="https://github.com/andrewerk">
            <img src={ linkedinLogo } alt="Linkedin link" className="h-40" />
            </a>
            <a href="https://github.com/andrewerk">
            <img src={ github } alt="GitHub link" className="h-40" />
            </a>
            <a href="https://github.com/andrewerk">
            <img src={ cv } alt="CV download link" className="h-40" />  
            </a> 
          </section>        
          </section>
      </div>
  )
}

export default Home;
