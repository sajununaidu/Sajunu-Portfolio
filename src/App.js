import React from "react";
import { Button } from "@mui/material";
import { Fade, Slide, Zoom, Grow } from "@mui/material";
import { keyframes } from "@emotion/react";
import sajunu from "./images/my1.jpg";
import "./styles/custom.css";

const rotateIn = keyframes`
  0% { transform: rotate(-360deg); opacity: 0; }
  100% { transform: rotate(0); opacity: 1; }
`;

const slideInRight = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const animations = [Fade, Slide, Zoom, Grow];

const Section = ({ children, transition }) => {
  const Wrapper = transition || Fade;
  return <Wrapper in={true} timeout={1000}>{children}</Wrapper>;
};

const getRandomAnimation = () => {
  return animations[Math.floor(Math.random() * animations.length)];
};

const iotProjects = [
  {
    title: 'Smart Lock System',
    description:
      'A secure remote access system for smart locks used in doors, cabinets, and parcel boxes. Features include real-time status, remote lock/unlock, and session-based audit tracking.',
    technologies: [
      'ReactJS', 'AngularJS', 'Java (Play Framework)', 'MongoDB',
      'MQTT', 'HTTPS', 'DigitalOcean', 'NGINX'
    ],
  },
  {
    title: 'Smart Refrigerator System',
    description:
      'Enables remote door control, real-time status, condition-based alerts (e.g., high temperature, power failure), and data preservation with detailed audit trails.',
    technologies: [
      'ReactJS', 'AngularJS', 'Java (Play Framework)', 'MongoDB',
      'MQTT', 'HTTPS', 'DigitalOcean', 'NGINX'
    ],
  },
  {
    title: 'Sensor Dashboard (Company Showcase)',
    description:
      'Displays real-time environmental data (e.g., CO₂, CO, NH₃) with live graphs, threshold alerts via email/SMS, data downloads, and an audit trail.',
    technologies: [
      'ReactJS', 'Java (Play Framework)', 'MongoDB', 'TimescaleDB',
      'MQTT', 'HTTPS', 'DigitalOcean', 'NGINX'
    ],
  },
  {
    title: 'DIY Smart Switches',
    description:
      'Personal home automation project using ESP32 and touch sensors for remote device control over Wi-Fi using the Blynk platform.',
    technologies: [
      'ESP32', 'Arduino IDE', 'Blynk', 'Relay Module', 'Touch Sensors',
      'Wi-Fi Communication'
    ],
  },
];

const nonIotProjects = [
  {
    title: 'Company Certification Rating System',
    description:
      'Web platform where users upload documents for analysis using AWS Textract. The system rates the company based on data and user-selected options, with WebSocket-based UI updates and audit tracking.',
    technologies: [
      'ReactJS', 'Node.js', 'TimescaleDB', 'AWS S3', 'AWS Textract',
      'WebSockets', 'PgAdmin'
    ],
  },
];



const App = () => {
  
  const renderProjectCard = (project) => (
    <div className="project-card" key={project.title}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
  
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#0d1117", color: "#c9d1d9" }}>
      <Section transition={Fade}>
        <section className="heading">
        <img
          src={sajunu}
          className="fade-in"
          alt="Profile"
          style={{ width: "250px", height: "250px", borderRadius: "50%", marginBottom: "20px", objectFit:"cover" }}
        />
          <h1>Hi, I'm Sajunu Naidu</h1>
          <h2>Full Stack Developer specializing in IoT & Web Solutions</h2>
          <p>
            I’m a dedicated Full Stack Developer with a strong background in both frontend and backend technologies.
            I’m a hard worker who thrives under pressure and handles multiple tasks effectively.
          </p>
          {/* <div className="buttons">
            <a href="#resume" className="primary">View Resume</a>
            <a href="#projects" className="secondary">View Projects</a>
            <a href="#contact" className="primary">Contact Me</a>
            <a href="https://github.com/sajunu" target="_blank" className="secondary" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="secondary" rel="noreferrer">LinkedIn</a>
          </div> */}
        </section>
      </Section>

      <Section transition={Zoom}>
        <section className="about" id="about">
          <div className="about-container">
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I'm a Full Stack Developer with 5+ years of hands-on experience, working professionally since 2020. My core skills include ReactJS, AngularJS, NodeJS, Java, Play Framework, and MQTT. I specialize in IoT systems and microservice-based architectures.
              </p>
              <p>
                I've led and developed multiple smart IoT solutions including smart locks, smart refrigerators, and connected switches. These projects involved real-time status monitoring, remote access, alert systems, and detailed audit trail mechanisms for session-based tracking and admin verification. Additionally, I’ve worked on a non-IoT document rating system using AWS Textract for smart file analysis and S3 integration.
              </p>
              <p>
                I value clean, scalable code and believe in delivering reliable systems that solve real-world problems. I’m a proactive team player, a quick learner, and thrive in fast-paced environments where multiple tasks need careful balancing.
              </p>
            </div>
          </div>
        </section>
      </Section>

      <Section transition={Slide}>
        <section className="projects" id="projects">
        <div className="projects-container">
          <h2>Projects</h2>

          <h3 className="project-category">📡 IoT Projects</h3>
          <div className="project-grid">
            {iotProjects.map(renderProjectCard)}
          </div>

          <h3 className="project-category">💼 Non-IoT Projects</h3>
          <div className="project-grid">
            {nonIotProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>
      </Section>

      <Section transition={Grow}>
        <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-container">

          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>ReactJS</li>
              <li>AngularJS</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Java</li>
              <li>Play Framework</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>IoT & Communication</h3>
            <ul>
              <li>MQTT</li>
              <li>WebSockets</li>
              <li>ESP32</li>
              <li>Blynk Platform</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>TimescaleDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Postman</li>
              <li>MQTTX / MQTT Explorer</li>
              <li>pgAdmin 4</li>
              <li>DigitalOcean</li>
              <li>AWS S3 / Textract</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Architecture & DevOps</h3>
            <ul>
              <li>Microservice Architecture</li>
              <li>NGINX (Load Balancer / Reverse Proxy)</li>
              <li>CI/CD basics</li>
            </ul>
          </div>

        </div>
      </section>
      </Section>

      <Section transition={Fade}>
        <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <p>If you'd like to connect or have any project in mind, feel free to reach out!</p>

          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:sajununaidu1@gmail.com">sajununaidu1@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sajununaidu" target="_blank" rel="noopener noreferrer">linkedin.com/in/sajununaidu</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/sajununaidu" target="_blank" rel="noopener noreferrer">github.com/sajununaidu</a></p>
          </div>
        </div>
      </section>
      </Section>

      <footer style={{ textAlign: "center", padding: "30px", backgroundColor: "#0d1117", color: "#8b949e" }}>
        &copy; {new Date().getFullYear()} Sajunu Naidu. All rights reserved.
      </footer>
    </div>
  );
};

export default App;