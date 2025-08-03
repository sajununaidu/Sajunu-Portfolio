import React from "react";
import { motion } from "framer-motion";
import sajunu from "./images/my1.jpg";
import "./styles/custom.css";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const scaleHover = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
};

const iotProjects = [
  {
    title: "Smart Lock System",
    description:
      "A secure remote access system for smart locks used in doors, cabinets, and parcel boxes. Features include real-time status, remote lock/unlock, and session-based audit tracking.",
    technologies: [
      "ReactJS",
      "AngularJS",
      "Java (Play Framework)",
      "MongoDB",
      "MQTT",
      "HTTPS",
      "DigitalOcean",
      "NGINX",
    ],
  },
  {
    title: "Smart Refrigerator System",
    description:
      "Enables remote door control, real-time status, condition-based alerts, and data preservation with detailed audit trails.",
    technologies: [
      "ReactJS",
      "AngularJS",
      "Java (Play Framework)",
      "MongoDB",
      "MQTT",
      "HTTPS",
      "DigitalOcean",
      "NGINX",
    ],
  },
  {
    title: "Sensor Dashboard (Company Showcase)",
    description:
      "Displays real-time environmental data with live graphs, threshold alerts via email/SMS, data downloads, and an audit trail.",
    technologies: [
      "ReactJS",
      "Java (Play Framework)",
      "MongoDB",
      "TimescaleDB",
      "MQTT",
      "HTTPS",
      "DigitalOcean",
      "NGINX",
    ],
  },
  {
    title: "DIY Smart Switches",
    description:
      "Home automation project with ESP32 and touch sensors, remotely controlled over Wi-Fi using Blynk.",
    technologies: [
      "ESP32",
      "Arduino IDE",
      "Blynk",
      "Relay Module",
      "Touch Sensors",
      "Wi-Fi Communication",
    ],
  },
];

const nonIotProjects = [
  {
    title: "Company Certification Rating System",
    description:
      "Web platform analyzing documents with AWS Textract, rating companies, WebSocket updates, and audit tracking.",
    technologies: [
      "ReactJS",
      "Node.js",
      "TimescaleDB",
      "AWS S3",
      "AWS Textract",
      "WebSockets",
      "PgAdmin",
    ],
  },
];

const App = () => {
  const renderProjectCard = (project) => (
    <motion.div
      className="project-card"
      key={project.title}
      {...scaleHover}
      variants={fadeInUp}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="container">
      {/* Header */}
      <motion.section {...fadeInUp} className="section header">
        <div className="profile-image-wrapper">
          <img src={sajunu} className="profile-image" alt="Profile" />
        </div>
        <h1 className="name">Hi, I'm Sajunu Naidu</h1>
        <h2 className="subtitle">
          Full Stack Developer | DevOps | IoT Solutions Architect
        </h2>
        <p className="intro">
          I'm a tech-savvy engineer blending full-stack, DevOps, and IoT expertise to build scalable, cloud-powered platforms. From backend architecture to edge-device deployments, I craft solutions that are robust and elegant.
        </p>
      </motion.section>

      {/* About Me */}
      <motion.section {...fadeInUp} className="section about" id="about">
        <h2>About Me</h2>
        <p>
          With 5+ years of industry experience, I specialize in building robust web platforms and integrating them with smart IoT hardware. My core strengths lie in crafting microservices, managing DevOps pipelines, and deploying secure cloud infrastructures.
        </p>
        <p>
          From smart appliances to real-time dashboards, my focus is on performance, security, and intuitive user experiences.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section {...slideInRight} className="section projects" id="projects">
        <h2>Projects</h2>
        <h3 className="category-title">📡 IoT Projects</h3>
        <div className="grid">{iotProjects.map(renderProjectCard)}</div>
        <h3 className="category-title">💼 Non-IoT Projects</h3>
        <div className="grid">{nonIotProjects.map(renderProjectCard)}</div>
      </motion.section>

      {/* Skills */}
      <motion.section {...fadeInUp} className="section skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>ReactJS</li>
              <li>AngularJS</li>
              <li>VueJS</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>Grafana Integration and Grafana Integration via iframes</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Java</li>
              <li>Python</li>
              <li>Play Framework</li>
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>Prometheus</li>
            </ul>
          </div>
          {/* IoT & Communication */}
          <div className="skill-card">
            <h3>IoT & Communication</h3>
            <ul>
              <li>MQTT</li>
              <li>WebSockets</li>
              <li>Kafka</li>
              <li>ESP32</li>
              <li>Arduino IDE</li>
              <li>Blynk Platform</li>
            </ul>
          </div>
          {/* DevOps & Cloud */}
          <div className="skill-card">
            <h3>DevOps & Cloud</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes (Basic)</li>
              <li>NGINX</li>
              <li>Rate Limiting</li>
              <li>GitHub Actions</li>
              <li>AWS EC2 / S3</li>
              <li>Terraform (Basic)</li>
              <li>DigitalOcean</li>
            </ul>
          </div>
          {/* Databases */}
          <div className="skill-card">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>TimescaleDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section {...fadeInUp} className="section contact" id="contact">
        <h2>Contact Me</h2>
        <p>Open to freelance, collaborations, or just a tech chat!</p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> <a href="mailto:sajununaidu1@gmail.com">sajununaidu1@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sajununaidu" target="_blank" rel="noopener noreferrer">linkedin.com/in/sajununaidu</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/sajununaidu" target="_blank" rel="noopener noreferrer">github.com/sajununaidu</a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Sajunu Naidu. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
