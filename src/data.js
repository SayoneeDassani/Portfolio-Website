import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoMailOpen,
    IoOpenOutline,
    } from "react-icons/io5";

  
  export const Experience = [
    {
      id: 1,
      date: "July 2020 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Software Engineer",
      location: "Optum",
      description:
        "Working as a part of the OptumPay, a platform to manage claims payment and remittance data.It is based on the intersection of  Fintech and Heathcare domains.",    },
    {
      id: 2,
      date: "June 2016 -May 2020",
      iconsSrc: <IoCodeWorking />,
      title: "Student",
      location: "SRM Institute of Science and Technology",
      description:
        "Graduated B.Tech in Computer Science Engineering with a CGPA of 9.1",
    },
    {
      id: 3,
      date: "June 2018-July 2018",
      iconsSrc: <IoCodeWorking />,
      title: "Software Engineer Intern",
      location: "RS Software Limited",
      description:
        "As a summer intern, I created the project “Anagram Solver”, which was a prototype Adaptive Learning System. The tool was built on Core Java using the Spring Framework. A JDBC connection was used to connect with Oracle Database",
    },
    
    {
      id: 4,
      date: "December 2018-January 2019, May 2019-June 2019",
      iconsSrc: <IoCodeWorking />,
      title: "Software Engineer Intern",
      location: "Wizard Consultancy",
      description:
        "Contributed to a client project by working on a full-stack Java application. Covered the concepts of Web Applications, Basic Java programming, and Relational Database management in Oracle.",
    },
    {
      id: 5,
      date: "July 2017-December 2018",
      iconsSrc: <IoCodeWorking />,
      title: "Student Trainee",
      location: "Intellect Design Arena Ltd",
      description:
        "Was selected as on the Top 30 students in our university to attend this training on the tools and practical applications of ‘Design Thinking’.Conceptualized and created a prototype of an Adaptive Learning Platform to enhance the education experience for University students and teachers. The prototype was built on C++.",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Optum Pay Premium",
      description: "Developed full stack architecture using Java and JSP, Microservices in Spring Boot and Shell Scripting for Batches.",
      techs: "Java, JSP, PostGresSQL, Shell, Springboot Microservices",
      github: "#",
      link: "#",
      
      
    },
    {
      id: 2,
      name: "Cloud Migration",
      techs: "Microsoft Azure",
      github: "#",
      link: "#",
      description: "Key Contributor in the migration of Internal Jobs, Online Portal & Microservices from On Premise to Microsoft Azure Cloud. It was a lift and shift of DB2 to PostgreSQL, Unix to Linux server.",
    },
    
    {
      id: 3,
      name: "Cloud Migration POC",
       techs: "Angular, Azure",
      github: "#",
      link: "#",
      description:"Design and developed a solution in Angular and Azure to create an application to execute scripts in production without direct access.",
    },
    {
      id: 4,
      name: "Optum Pay Modernization",
       techs: "Springboot, Java",
      github: "#",
      link: "#",
      description:"Redesigning of existing 60+ batches from legacy technology to springboot microservices. Completed various Proof of Concepts for demonstartion.",
    },
    {
      id: 5,
      name: "Automation Framework",
       techs: "Selenium, Java",
      github: "#",
      link: "#",
      description:"Developed an Automation Framework to reduce manual testing efforts. This framework also sends regular updates to the stakeholders on the success percentage.",
    },
    {
    id: 6,
    name: "Analysis of Deep Learning Architectures for Object Detection ",
   description: "Performed a comparative study on the deep learning architectures in context with object detection.This paper was presented in IEEE Hydcon Conference and later published.",
    techs: "Deep Learning , CNN Architecture",
    github: "#",
    link: "https://ieeexplore.ieee.org/abstract/document/9242776",
    
    
  },
  {
    id: 7,
    name: "Identification of Optimal Network Structure for CNN",
      techs: "CNN, Artifical Bees Algorithm",
    github: "https://github.com/mohit6199/abc-CNN",
    link: "#",
    description: "Using the help of Swarm based algorithms (Artificial Bee Colony algorithm), we find the most optimal CNN architecture from a solution space.",
  },
  {
    id: 8,
    name: "Market Research using Clustering",
    techs: "K-Means Clustering",
    github: "#",
    link: "#",
    description:"Performed clustering of some cities based on their economical parameters and suggested marketing strategies pertaining to each of the cluster.",
  },
    {
      id: 9,
      name: "Apriori Algorithm in Hadoop",
      techs: "Java, Apropri Algorithm",
      github: "https://github.com/mohit6199/ARM",
      link: "#",
      description:"Performed the Apriori algorithm(using Map Reduce) to perform Market Basket Analysis.",
    },
    {
      id: 10,
      name: "Adaptive Learning",
     description: "Done as a part of the course 'Design Thinking' to create prototype of a Adaptive Learning Test software.",
      techs: "C++",
      github: "https://github.com/SayoneeDassani/Adaptive_Learning",
      link: "#",
    },
    
  ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-[#ccd6f6] hover:text-[#64ffda] text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/SayoneeDassani",
    },
  
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-[#ccd6f6] hover:text-[#64ffda] text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sayonee-dassani-28b3b1185/",
    },
    {
        id: 1,
        iconSrc: (
          <IoLogoTwitter className="text-[#ccd6f6] hover:text-[#64ffda] text-3xl cursor-pointer" />
        ),
        name: "Twitter",
        link: "https://twitter.com/SayoneeDassani",
      },
     {
        id: 1,
        iconSrc: (
          <IoMailOpen className="text-[#ccd6f6] hover:text-[#64ffda] text-3xl cursor-pointer" />
        ),
        name: "Mail",
        link: "mailto:sayoneedassani@gmail.com",
      }
  ];
  