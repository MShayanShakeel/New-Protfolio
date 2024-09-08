import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SSimg3.PNG";
import projImg2 from "../assets/img/SSimg1.PNG";
import projImg3 from "../assets/img/SSimg2.PNG";
import projImg4 from "../assets/img/Kingcoin.PNG";
import projImg5 from "../assets/img/SSimg4.PNG";
import projImg6 from "../assets/img/SSimg5.PNG";
import projImg7 from "../assets/img/SSimg6.PNG";
import projImg8 from "../assets/img/SSimg7.PNG";
import projImg9 from "../assets/img/SSimg8.PNG";
import projImg10 from "../assets/img/SSimg9.PNG";
import projImg11 from "../assets/img/SSimg11.PNG";
import projImg12 from "../assets/img/SSimg12.PNG";
import projImg13 from "../assets/img/TwitterClonePicture.jpg";
import projImg14 from "../assets/img/FoodDelevire.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { RiGraduationCapFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";


export const Projects = () => {

  const projects = [
    {
      title: "Insta Pay",
      description: "Insta Pay prototype boasts an impressive user interface (UI), featuring Tailwind CSS for styling and possibly including chart graphs. While the UI looks polished and user-friendly, it seems this is only a frontend prototype without backend functionality",
      imgUrl: projImg1,
      link: "https://instapayclone-2.vercel.app/",
    },
    {
      title: "Investment.trade.com",
      description: "A mobile-responsive frontend UI built with React.js and Bootstrap for an investment platform, showcasing modern design and user-friendly navigation.",
      imgUrl: projImg2,
      link: "https://fb-task-web.vercel.app/",
    },
    {
      title: "LinkedIn Clone",
      description: " A comprehensive MERN stack project utilizing Redux, Context API, Thunk, tokenization authentication, and various additional features to replicate the functionality of LinkedIn.backend not working because not deploy",
      imgUrl: projImg12,
      link: "https://linkdin-clone-frontend.vercel.app/",
    },
    {
      title: "Tourist.com",
      description: "A mobile-responsive application developed using React.js, Bootstrap, Firebase, and forms, showcasing modern UI, real-time data, and user-friendly interactions.",
      imgUrl: projImg3,
      link: "https://job-finder-web-lac.vercel.app/",
    },
    {
      title: "Trading App",
      description: "I designed a trading app UI prototype, focusing solely on user interface practices to ensure an intuitive and visually appealing experience",
      imgUrl: projImg4,
      link: "https://test-project-omega-seven.vercel.app/",
    },
    {

      title: "WatsPI-White-Theme",
      description: "WatsPI: A MERN stack project featuring a white theme, demonstrating seamless integration of MongoDB, Express.js, React.js, and Node.js for robust web solutions.",
      imgUrl: projImg5,
      link: "https://production-witspi.vercel.app/dashboard2",
    },
    {
      title: "WatsPI",
      description: "WatsPI: A MERN stack project showcasing seamless integration of MongoDB, Express.js, React.js, and Node.js for robust, efficient web solutions.",
      imgUrl: projImg6,
      link: "https://watspi-user-plum.vercel.app/dashboard2",
    },
    {
      title: "E-Commerce Project",
      description: "E-Commerce website prototype has an impressive user interface (UI) , but the backend isn't deployed. Despite the lack of a visible UI, the backend includes user authentication, tokenization",
      imgUrl: projImg7,
      link: "https://mern-front-end-only.vercel.app/",
    },
    {
      title: "Twitter-Clone Project",
      description: "A Twitter clone project developed using React.js, featuring functionality for uploading pictures, with backend integration using Firebase for storing and managing user uploads",
      imgUrl: projImg13,
      link: "https://twitter-clone-olive-seven.vercel.app/",
    },
    {
      title: "RMI surfaces",
      description: "A mobile-responsive website developed using plain HTML and CSS, showcasing a clean design and smooth user experience.",
      imgUrl: projImg8,
      link: "https://66854ad6756ef1078c21a4ea--incredible-cannoli-77c5df.netlify.app/",
    },
    {
      title: "BAZAR.COM",
      description: "AZAR.COM: A university project showcasing my expertise in React.js, Redux, and Firebase. This eCommerce website prototype embodies seamless user interaction and dynamic functionalities.",
      imgUrl: projImg9,
      link: "https://dulcet-klepon-261381.netlify.app/",
    },
    {
      title: "Code Snippet",
      description: "A project developed using Angular 17, Firebase, and Angular authentication, offering secure and efficient code management and sharing features.",
      imgUrl: projImg10,
      link: "https://bin-application-6c92e.web.app/singup",
    },
    {
      title: "Food Reminder",
      description: "A project developed using React, LocalStorage, Select food and also selecct food then they remind u.",
      imgUrl: projImg14,
      link: "https://weekly-scadule-food-app.vercel.app/",
    },
    {
      title: "Authentication Form",
      description: "A project developed using React.js and React Auth, providing a secure and user-friendly authentication system for web applications.",
      imgUrl: projImg11,
      link: "https://form-validation-ten-iota.vercel.app/",
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <p>In recent projects, I've showcased my web development proficiency and tech-savvy approach. "bazar.com" stands out, an E-commerce site powered by React.js, Firebase, and Redux. It underscores my mastery of front-end tech and cloud integration. Then, my personal portfolio, built with React.js and Bootstrap, reflects my design flair and responsive web skills. Lastly, "watspi," a private project, demanded a robust tech stack: React.js, Redux, Node.js, and MongoDB. It's a testament to my backend and database expertise. These projects collectively highlight my adaptability, technical prowess, and commitment to top-notch web solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project's</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="section">Working Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <div className="Education">
                          <FaReact /> <h1>Loudly Dev Global Solutions</h1></div>
                        <p>Front-End-Developer [ 2024 - Present ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaReact /> <h1>TechOn Vendture</h1></div>
                        <p>Junior MERN Stack Developer [ 2023 - 2024 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaReact /> <h1>Techno Mide</h1></div>
                        <p>As Front-End-Developer Intern [ 4/2023 - 6/2023 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaReact /> <h1>Smash Code</h1></div>
                        <p>As Front-End-Developer Intern [ 1/2023 - 3/2023 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaWordpress /> <h1>UnityTeck</h1></div>
                        <p>WordPress Developer [ 2020 - 2021 ]</p>
                        <hr className="horizontal-line" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="Education">
                          <RiGraduationCapFill /> <h1>Bachelors in  Computer Science</h1></div>
                        <p>PAF-KIET University Karachi [ 2019 - 2023 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <RiGraduationCapFill /> <h1>Intermediate in Pre Engineering</h1></div>
                        <p>SSAT College Karachi [ 2017 - 2019 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <RiGraduationCapFill /> <h1>Matriculation</h1></div>
                        <p>IQtarad P/S High School Karachi [ 2015 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <PiCertificateBold /> <h1>Extra Certificates</h1></div>
                        <p>MERN Stack in Jawan Pakistan [ 2023 - 2024 ]</p>
                        <hr className="horizontal-line" />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
