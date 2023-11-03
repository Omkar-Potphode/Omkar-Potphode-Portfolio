import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css'

export const Projects = () => {

  const projects = [
    {
      title: "Educational Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      webUrl: 'https://www.edureka.co/'
    },
    {
      title: "Tourism Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      webUrl: 'https://vvipt.live/'
    },
    {
      title: "College Students Project",
      description: "Design & Development",
      imgUrl: projImg3,
      webUrl: 'https://crypto-hunter.netlify.app/'
    },
    {
      title: "Real Estate Website",
      description: "Design & Development",
      imgUrl: projImg4,
      webUrl: 'https://real-estate-web.pages.dev/'
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      webUrl: 'https://stylecraftcloset.netlify.app/'
    },
    {
      title: "Mobile Application",
      description: "UI Design",
      imgUrl: projImg6,
      webUrl: 'https://www.figma.com/file/RyVLhDKrymZhThABrSgzIK/Coffee-Shop-App-UI?type=design&node-id=0-1&mode=design&t=d8bCploJxspmEBBd-0'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A small gallery of recent projects chosen by me. I've done them all while learning Full Stack Web Development. It's only a drop in the ocean compared to the entire list. For more <span><a href="https://github.com/Omkar-Potphode">GitHub Link</a></span></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
