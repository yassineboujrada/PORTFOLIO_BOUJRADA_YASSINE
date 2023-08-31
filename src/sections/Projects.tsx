import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "@/components/Button";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "3D VISION MESHWALKER",
      projectLink: "https://github.com/yassineboujrada/3D_VISION_MESHWALKER",
      projectDescription:
        "The 3D_VISION with MESHWALKER Model is an advanced computer vision system that combines 3D object recognition and understanding with the power of the MESHWALKER model. It enables accurate identification and classification of 3D objects in a given scene, while also providing detailed insights into the spatial relationships between objects",
        projectTech1: [
          "React",
          "Flask",
          "Three.js",
        ],
        projectTech2: [
          "Tensorflow",
          "Deep Learning",
          "MongoDB",
        ],
      projectExternalLinks: {
        github: "https://github.com/yassineboujrada/3D_VISION_MESHWALKER",
        externalLink: "",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectLink: "https://github.com/yassineboujrada/Chat_App",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
        projectTech1: [
          "React",
          "Node.js",
          "MongoDB",
        ],
        projectTech2: [
          "Socket.io",
        ],
      projectExternalLinks: {
        github: "https://github.com/yassineboujrada/Chat_App",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "3D CHAIR App",
      projectLink: "https://github.com/yassineboujrada/3D_CHAIR",
      projectDescription:
        "The 3D Chair Animation project is an interactive web application developed using React.js and Three.js. It allows users to explore a 3D model of a chair and dynamically change its color in real-time.",
      projectTech1: [
        "React",
        "Three.js",
        "Vite.js",
      ],
      projectTech2: [
        
      ],
      projectExternalLinks: {
        github: "https://github.com/yassineboujrada/3D_CHAIR",
        externalLink: "",
      },
    },
    {
      image: "/project4.png",
      projectName: "Stock Management Admin Dashboard App",
      projectLink: "https://github.com/yassineboujrada/STOCK_MANAGEMENT_Admin_Dashboard",
      projectDescription:
        "Stock Management Admin Dashboard. The dashboard provides an intuitive interface for managing stock inventory, tracking product sales, and generating reports for Orders.",
      projectTech1: [
        "React",
        "Spring Boot",
        "Oracle DB",
      ],
      projectTech2: [
        "Oracle Cloud",
        "Design Patterns"
      ],
      projectExternalLinks: {
        github: "https://github.com/yassineboujrada/STOCK_MANAGEMENT_Admin_Dashboard",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>My Last Projects</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech1,
            projectTech2,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech1.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-tech-list">
                    {projectTech2.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
