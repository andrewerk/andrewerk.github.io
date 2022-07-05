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
        <div class="overflow-hidden fixed top-0  w-full bg-charcoal flex justify-around z-10 border-b-4 border-main">
          <a href="#resume" className="text-main text-xl md:text-3xl hover:text-yellow no-underline">Resume</a>
          <a href="#tech" className="text-main text-xl md:text-3xl hover:text-yellow no-underline">Technologies</a>
          <a href="#contact" className="text-main text-xl md:text-3xl hover:text-yellow no-underline hover:text-">Contact</a>
        </div>
        <section className="flex flex-col text-4xl text-charcoal font-bold bg-main h-1/2 md:pl-10 items-center lg:pl-20 xl:pl-40 pt-16 pb-10 lg:flex lg:flex-row lg:justify-between">
          <section className="pt-14">
          <h3>Hi there!</h3>
          <h1>My name is Andre Werk</h1>
          <h1>I'am a Software Developer!</h1>
          </section>
          <img src={ devIllustration } alt="Programming Illustration" className="lg:pr-56 h-48 md:h-72 lg:h-84" />
        </section>
        <section className="text-main text-center flex flex-col items-center font-bold bg-charcoal h-1/2  pb-20 lg:pr-40 lg:flex lg:flex-row lg:justify-between" id="resume">
        <img src={ profile } alt="Profile" className="md:ml-48 mt-20 md:mr-20 h-60 w-60 rounded-full" />
        <div>
          <h3 className="mt-28 text-4xl" >Would you like to get to know me?</h3>
          <p className="text-xl mt-10">After three years of working with innovation at a technology-based institute, I’ve chosen to change my career path and start a Bootcamp in web development, intending to impact people's lives through innovation and technology. Problem-solving is my passion and I'll be happy to work with you to build incredible solutions!</p>
          <p className="text-xl mt-10">I'm currently ending a one-year full-time Bootcamp in software development, in which I have already developed more than 25 projects with javascript, Typescript, React, Node.js, Docker, relational databases, algorithms, RESTful APIs, software architecture, and unit tests.</p>
        </div>
        </section>
        <section id="tech" className="text-4xl text-charcoal text-center font-bold bg-main h-1/2 pt-16 pb-20 flex-col justify-between">
        <h1 >What do I work with?</h1>
        <section className="flex flex-col md:flex md:flex-row justify-around pt-16">
            <img src={ javascript } alt="JavaScript Logo" className="h-32" />
            <img src={ typescript } alt="typescript Logo" className="h-32" />
            <img src={ node } alt="Node Logo" className="h-32" />
            <img src={ docker } alt="Docker Logo" className="h-32" />
            <img src={ mysql } alt="Mysql Logo" className="h-32" />
            <img src={ react } alt="React Logo" className="h-32" />
            
          </section>        
          </section>
        <section className="bg-charcoal text-4xl text-main text-center pt-16 pb-20">
          <h1>What have I done so far?</h1>
        <ProjectsCarousel />
        </section>
        <section id="contact" className="text-4xl text-charcoal text-center font-bold bg-main h-1/2 pt-16 pb-20 flex-col content-center">
        <h1>Want to know more? Check my Linkedin, GitHub profile and CV!</h1>
        <section className="flex justify-around pt-16">
            <a href="https://www.linkedin.com/in/andre-werk/">
            <img src={ linkedinLogo } alt="Linkedin link" className="h-20" />
            </a>
            <a href="https://github.com/andrewerk">
            <img src={ github } alt="GitHub link" className="h-20" />
            </a>
            <a href="https://drive.google.com/file/d/1ME4hb2tYr80XgB6kiVQUYNla4JwqDZxz/view?usp=sharing">
            <img src={ cv } alt="CV download link" className="h-20" />  
            </a> 
          </section>
          <h1 className="mt-10">Or write me on andrewerk1804@gmail.com</h1>       
          </section>
      </div>
  )
}

export default Home;
