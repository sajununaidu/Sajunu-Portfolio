import React from "react";
import { Button } from "@mui/material";
import { Fade, Slide, Zoom, Grow } from "@mui/material";
import { keyframes } from "@emotion/react";

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

const App = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#0d1117", color: "#c9d1d9" }}>
      <Section transition={Fade}>
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", backgroundColor: "#161b22" }}>
          <img
            src="https://www.svgrepo.com/show/508699/avatar-thinking-7.svg"
            alt="Profile"
            style={{ width: "140px", height: "140px", borderRadius: "50%", marginBottom: "20px" }}
          />
          <h1 style={{ fontSize: "2.5rem", margin: "10px 0", animation: `${rotateIn} 1s ease` }}>Sajunu Naidu</h1>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "normal", color: "#58a6ff", animation: `${slideInRight} 1s ease` }}>Senior Engineer - Full Stack & DevOps</h2>
          <p style={{ maxWidth: "800px", textAlign: "center", fontSize: "1.1rem", marginTop: "20px" }}>
            Passionate and results-driven Full Stack and DevOps Engineer with strong experience in building, deploying, and maintaining scalable web applications. Adept at leading development across frontend, backend, and infrastructure.
          </p>
        </section>
      </Section>

      <Section transition={Zoom}>
        <section style={{ padding: "60px 20px", backgroundColor: "#0d1117" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px", animation: `${rotateIn} 1s ease` }}>About Me</h2>
          <p style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem", animation: `${slideInRight} 1s ease` }}>
            I have worked on 4 IoT projects and 1 non-IoT project, handling end-to-end portal development. This includes full-stack development and deployment in microservice architecture. I’ve delivered robust solutions with a focus on scalability and user experience.
          </p>
        </section>
      </Section>

      <Section transition={Slide}>
        <section style={{ padding: "60px 20px", backgroundColor: "#161b22" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px", animation: `${rotateIn} 1s ease` }}>Projects</h2>
          <ul style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem", listStyle: "disc", paddingLeft: "20px" }}>
            <li style={{ animation: `${slideInRight} 1s ease` }}><strong>Smart Locks:</strong> Developed remote-access cabinet smart locks. Implemented device log monitoring, battery status, and real-time status tracking using CanvasJS graphs. Migrated frontend from AngularJS to ReactJS.</li>
            <li style={{ animation: `${slideInRight} 1.2s ease` }}><strong>Smart Refrigerators:</strong> Built IoT-enabled dashboards for cold storage temperature monitoring. Integrated alerting system and remote access, with backend powered by Java and frontend in ReactJS.</li>
            <li style={{ animation: `${slideInRight} 1.4s ease` }}><strong>IoT Sensor Demo:</strong> Showcased various environmental sensors for temperature, CO2, and gas. Alerts, real-time data, and control UI for demonstration purposes were key components.</li>
            <li style={{ animation: `${slideInRight} 1.6s ease` }}><strong>Telecom Automation:</strong> Built web platform to detect fuel levels, faults, and categorize alerts (minor, major, critical). Designed for quick response by field engineers.</li>
            <li style={{ animation: `${slideInRight} 1.8s ease` }}><strong>Certification Portal:</strong> Enabled users to manage and verify certifications across companies. Delivered scoring system based on policy compliance. Used React, Node, PostgreSQL stack.</li>
            <li style={{ animation: `${slideInRight} 2s ease` }}><strong>Smart Switches:</strong> Engineered touch-based switches using Arduino and capacitive sensors. Enabled manual-free remote operation and power control through web interface.</li>
          </ul>
        </section>
      </Section>

      <Section transition={Grow}>
        <section style={{ padding: "60px 20px", backgroundColor: "#0d1117" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px", animation: `${rotateIn} 1s ease` }}>Tech Stack</h2>
          <ul style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem", listStyle: "disc", paddingLeft: "20px" }}>
            <li>ReactJS, AngularJS (initially for smart locks)</li>
            <li>NodeJS, Java (Play Framework)</li>
            <li>PostgreSQL, MongoDB</li>
            <li>AWS EC2, DigitalOcean Cloud</li>
            <li>PM2 for NodeJS process management</li>
            <li>Microservices architecture for deployments</li>
          </ul>
        </section>
      </Section>

      <Section transition={Fade}>
        <section style={{ padding: "60px 20px", backgroundColor: "#161b22" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px", animation: `${rotateIn} 1s ease` }}>Contact</h2>
          <div style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", textAlign: "center" }}>
            <p><strong>Email:</strong> <a href="mailto:sajununaidu1@gmail.com" style={{ color: "#58a6ff" }}>sajununaidu1@gmail.com</a></p>
            <p><strong>Phone:</strong> 9059963730</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sajunu-n-5859a0196" target="_blank" rel="noreferrer" style={{ color: "#58a6ff" }}>linkedin.com/in/sajunu-n-5859a0196</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/sajununaidu?tab=repositories" target="_blank" rel="noreferrer" style={{ color: "#58a6ff" }}>github.com/sajununaidu</a></p>
            <Button variant="contained" color="primary" href="mailto:sajununaidu1@gmail.com" style={{ marginTop: "20px" }}>
              Contact Me
            </Button>
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