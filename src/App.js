import Profile from "./images/Profile.jpg";

import Logo from "./images/Logo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub, IoMenu , IoOpenOutline , IoGitBranch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'


function App() {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  }

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-[#0a192f] pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full  bg-navBar p-3 rounded-2xl flex items-centre">
          <a href="#home">
        <img src={Logo} alt='Logo Image' style={{ width: '60px' }} />
      </a>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1 text-right">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>

              <a
                href="#work"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Work
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
               <a
                href="https://drive.google.com/file/d/1NA15DXsbgM9qdb1CKjeu_37pz_HmAp6b/view?usp=sharing"  target="_blank" 
                 className="ml-auto text-base text-[#64ffda] font-medium  cursor-pointer border border-[#64ffda] px-2 py-1 rounded-xl hover:bg-[#64ffda] hover:bg-opacity-[0.1] ease-in"
                //className="text-[#64ffda] border-[#64ffda] group border-2 px-6 py-3 my-2  items-center hover:bg-[#64ffda] hover:bg-opacity-[0.1]"
              >
                Resume
              </a>
  
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                href="#work"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Work
              </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1NA15DXsbgM9qdb1CKjeu_37pz_HmAp6b/view?usp=sharing"  target="_blank"
                  //className="text-base text-[#64ffda] font-medium hover:text-[#e6f1ff] cursor-pointer border border-[#64ffda] px-2 py-1 rounded-xl hover:border-[#e6f1ff] duration-100 ease-in"
                  className="text-base text-[#64ffda] font-medium  cursor-pointer border border-[#64ffda] px-2 py-1 rounded-xl hover:bg-[#64ffda] hover:bg-opacity-[0.1] duration-100 ease-in"

                  //hover:bg-[#64ffda] hover:bg-opacity-[0.1] 
                  onClick={() => setIsActive(false)}
                >
                  Resume
                </a>
             
              </motion.div>
            )}
          </div>
        </nav>
{/* 
        <div className="relative" id="home">
            <div className="absolute bottom-10 w-full flex justify-center items-center">
                <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              </div>
          </div>
        </div> */}


        <main className="w-[80%] mt-4">
          <section id="home">
          <div  className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#64ffda]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Sayonee
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a software engineer specializing in building full stack applications.
          Currently, I am working on creating impactful, scalable applications to simplify payment experience at
          <a className='text-[#64ffda] hover:text-[]' href='https://www.optum.com/' target="_blank" > <strong> Optum</strong></a> (part of UnitedHealth Group).
        </p>  

 
      </div>

      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center text-[#a8b2d1] ml-[-100px] hover:ml-[-0.5px] duration-300 bg-[#0a192f]'>
            <a
              className='flex justify-between items-center w-full text-[#a8b2d1]'
              href='https://www.linkedin.com/in/sayonee-dassani-28b3b1185/' target="_blank"
            >
             LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0.5px] duration-300 bg-[#a8b2d1]'>
            <a
              className='flex justify-between items-center w-full text-[#0a192f]'
              href='https://github.com/SayoneeDassani' target="_blank"
            >
              Github<FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0.5px] duration-300 bg-[#a8b2d1]'>
            <a
              className='flex justify-between items-center w-full text-[#0a192f]' target="_blank"
              href="mailto:sayoneedassani@gmail.com" >
              Email<HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div> 
          </section>
          <br></br>
          <br></br>
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
        <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-center border-[#64ffda] items-center text-gray-300'>About</p>           
                </div>
                 <br></br>
            <br></br>
              <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-[rgba(100,255,219,0.5)] rounded-md">
                <img
                  src={Profile}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              {/* <p className="text-1xl text-textBase text-left">
              Currently a Software Engineer,I enjoy building things and have involved in a wide range of projects including Microservices, Deep Learning, Web Apps, Data analysis, etc.
              I graduated from <a className='text-[#64ffda]' href='https://www.srmist.edu.in/' target="_blank" >SRM Institue of Science and Technology</a> with a Bachelor in Technology (with a major in Computer Science ) with a CGPA of 9.1.
              Fast-forward to today, and I’ve had the privilege of working at various organisations.My main focus these days is building Java full stack applications
              at <a className='text-[#64ffda]' href='https://www.optum.com/' target="_blank" > <strong> Optum</strong></a>
              </p>
              <br></br>
              <p className="text-1xl text-textBase text-left">In my free time, I like to study languages , mainly, German & Korean. 
              It is my go-to way of experiencing nuances of linguistics and cultural exchange.</p> */}
             <p className="text-1xl text-textBase text-left">
              Currently a Software Engineer with 2 years in the industry, I enjoy building things and have been involved in a wide range of projects.
              I graduated from <a className='text-[#64ffda]' href='https://www.srmist.edu.in/' target="_blank" >SRM Institue of Science and Technology</a> in Computer Science Engineering with a CGPA of 9. Fast-forward to today, and I’ve had the privilege of working at various organisations.</p>
              <br></br>
            <p className="text-1xl text-textBase text-left">My main focus these days is building Java full stack applications and SpringBoot Microservices
              at <a className='text-[#64ffda]' href='https://www.optum.com/' target="_blank" > <strong> Optum</strong></a> . I also contributed to the migration of the application from on-premise to Azure Cloud.
              </p>
                 <br></br>
              <p className="text-1xl text-textBase text-left">In my free time, I like to study languages , mainly, German & Korean. 
              It is my go-to way of experiencing nuances of linguistics and cultural exchange.</p>
            </div>
          </section>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
          <div className='pb-8'>
          <h3 className='text-4xl font-bold inline border-b-4 text-center border-[#64ffda] items-center text-gray-300'>Where I’ve Worked</h3>
          </div>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <section className="w-full flex items-center justify-center " id='work'>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                       
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement 
                    key={n.id}
                    className="vertical-timeline-element--work "
                    contentStyle={{
                      background: "#0a192f",
                      color: "#ccd6f6",
                    }}
                    contentArrowStyle={{
                      borderRight: "5px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "#0a192f", color: "#64ffda" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title text-[#64ffda]">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-[#64ffda]">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>


          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

         < div>
          <h3 className='text-4xl font-bold inline border-b-4 text-center border-[#64ffda] items-center text-gray-300'>Some Things I’ve Built</h3>
          </div>
          <br></br>
            <br></br>
            <br></br>
            
          <section
            className="  items-center justify-evenly my-24 gap-4"
            id="projects"
          >
          
   {/* work projects */}

         <div className="flex flex-wrap items-center">
         <IoGitBranch className=" flex flex-wrap items-center text-[#64ffda] text-3xl" />
         
         <h3 className='text-3xl font-italics inline  text-center items-center text-[#64ffda]'>Work Projects</h3>
         </div>
          <div  className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {Projects &&
              Projects.slice(0,5).map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border flex flex-wrap d-flex align-self-stretch border-[#8892b0] rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-[#64ffda] duration-100 ease-in-out"
                >
                  <p className="text-lg text-[#64ffda] font-medium uppercase">
                  {n.name}
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  {/* <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  /> */}
                  <p className="text-sm text-textBase font">{n.description}</p>
                  <div className="flex flex-1 items-center justify-between">
                   
                    <p className="text-lg text-gray-300">
                    {/* Technologies */}
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    
                    {/* <a href={n.github}  target="_blank">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-[#e6f1ff] hover:text-[#64ffda] text-3xl cursor-pointer" />
                      </motion.div>
                    </a> */}

                    {/* function myFunction() { 
                    if(key===5)
                    {
                    <a href={n.link} className="n.link.value==='#'? hidden: visible">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoOpenOutline className="text-textBase text-3xl cursor-pointer " />
                      </motion.div>
                    </a> 
                  }  }
                     */}
                     {n.link!='#' ? <a href={n.link} target="_blank">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoOpenOutline className="text-[#e6f1ff] hover:text-[#64ffda] text-3xl cursor-pointer " />
                      </motion.div>
                    </a>  : ''}
                    
   
                  </div>
               
                </motion.div>
              ))}
              </div>
        {/* Personal Projects */}
        <div className="flex flex-wrap items-center">
         <IoGitBranch className=" flex flex-wrap items-center text-[#64ffda] text-3xl" />
         
         <h3 className='text-3xl font-italics inline  text-center items-center text-[#64ffda]'>Personal Projects</h3>
         </div>
          <div  className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {Projects &&
              Projects.slice(5,visible).map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border flex flex-wrap d-flex align-self-stretch border-[#8892b0] rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-[#64ffda] duration-100 ease-in-out"
                >
                  <p className="text-lg text-[#64ffda] font-medium uppercase">
                  {n.name}
                    {/* {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name} */}
                  </p>

                  {/* <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  /> */}
                  <p className="text-sm text-textBase font">{n.description}</p>
                  <div className="flex flex-1 items-center justify-between">
                   
                    <p className="text-lg text-gray-300">
                    {/* Technologies */}
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    
                    {n.github!='#' ? <a href={n.github}  target="_blank">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-[#e6f1ff] hover:text-[#64ffda] text-3xl cursor-pointer" />
                      </motion.div>
                    </a> : ''}

                    {/* function myFunction() { 
                    if(key===5)
                    {
                    <a href={n.link} className="n.link.value==='#'? hidden: visible">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoOpenOutline className="text-textBase text-3xl cursor-pointer " />
                      </motion.div>
                    </a> 
                  }  }
                     */}
                     {n.link!='#' ? <a href={n.link} target="_blank">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoOpenOutline className="text-[#e6f1ff] hover:text-[#64ffda] text-3xl cursor-pointer " />
                      </motion.div>
                    </a>  : ''}
                    
   
                  </div>
               
                </motion.div>
              ))}
              </div>

<br></br>    
{visible<11 ?  <div className='flex items-center justify-center'><button  className='text-[#64ffda] border-[#64ffda] group border-2 px-6 py-3 my-2  
items-center hover:bg-[#64ffda] hover:bg-opacity-[0.1]'
                 onClick={showMoreItems}>
            View More          
          </button></div>: ''}
                 {/* <button  className='text-[#64ffda] border-[#64ffda] group border-2 px-6 py-3 my-2  items-center hover:bg-[#64ffda] hover:bg-opacity-[0.1]'
                 onClick={showMoreItems}>
            View More          
          </button> */}
          </section>

         

          <br>
            </br>
            <br>
            </br>

            <br>
            </br>
            <br>
            </br>
          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24">
            
            {/* <p className="text-2xl text-gray-400 capitalize">Follow me on</p> */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-center border-[#64ffda] items-center text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-1xl'>I am always looking for new interesting opportunities across roles and functions in Full Stack Development.</p>
                <p className='text-gray-300 py-4 text-1xl'>If you’re interested to get in touch with me, just drop me an email at:</p>
                {/* <a className='text-[#64ffda] py-4 text-1xl text-center ' href='mailto:sayoneedassani@gmail.com' target="_blank" >sayoneedassani@gmail.com</a> */}
                <p className='text-[#64ffda] py-4 text-1xl text-center ' >sayoneedassani@gmail.com</p>
                
            </div>

             <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.5 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-2 md:px-8 py-5  rounded-2xl  duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-2"
                    target="_blank">
                    {n.iconSrc}
                    {/* <p className="text-lg text-textBase">{n.name}</p> */}
                  </motion.a>
                ))}
            </div> 
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
