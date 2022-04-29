import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myntra from "../../Assets/Projects/myntra.png";
import puma from "../../Assets/Projects/puma.png";
import gear from "../../Assets/Projects/gearbest.png";
import max from "../../Assets/Projects/max.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={max}
              isBlog={false}
              title="MaxFashion Clone"
              description="MaxFashion is a ecommerce website,its frontend is build with html, CSS,Javascript. Have all  essential features of ecommerce website like Sign in/up ,Products page,Product Category ,Add to Favorites,Add to Cart,Sortings."
              link="https://github.com/manjeetsingh100001/MaxFashion-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={max}
              isBlog={false}
              title="MaxFashion Backend"
              description="MaxFashion is a ecommerce website,its backend is build with Express.js and MongoDb ."
              link="https://github.com/manjeetsingh100001/MaxFashion-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gear}
              isBlog={false}
              title="Gearbest"
              description="Gearbest is a ecommerce website, with a simple and advanced UI with a lot of advanced functionality. We have tried to clone some of functionality of it. With HTML, CSS and JS Only "
              link="https://github.com/manjeetsingh100001/gearbest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra clone"
              description="Myntra clone is a ecommerce website. we build the the clone of myntra using html ,css, javascript"
              link="https://github.com/manjeetsingh100001/myntra-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puma}
              isBlog={false}
              title="Puma clone"
              description="Puma clone is a ecommerce website. we build the the clone of puma using html ,css, javascript and fetch data using api "
              link="https://github.com/mahesh-jangid/Puma-Website-Clone"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
