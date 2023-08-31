import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const skillsData = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "Spring Boot",
    "Python",
    "TensoFlow",
    "Numpy",
    "ETL",
    "Java",
    "JavaFX",
    "Git",
    "Docker",
    "Apache Kafka",
    "Prisma",
    "MongoDB",
    "OracleDB",
    "MySQL",
    "Microsoft Power BI",
    "PENTAHO"
  ]
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            HI! My name is Boujrada yassine, I have a passion for creating websites and developing 
            Machine Learning models that enhance the lives of others.
          </p>
          <p className="about-grid-info-text">
            So After graduating with a bachelor&apos;s degree in Computer Science ,and another degree in Data Science and Business Intelligence 👨‍🎓🎓.
            I set out on a journey to pursue my programming passion. I ventured into the realms of full-stack web development and machine learning
             by challenging myself to create a large number of projects, while also competing in national coding competitions. Among all aspects 
             of programming, I find problem-solving to be the most exciting. The sense of unraveling a complex problem and revealing a solution 
             is really pleasant, and I believe that all programmers share this sentiment.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://github.com/yassineboujrada/Student-Workflow-Organizer1/tree/main"
            >
              Student-Workflow-Organizer
            </Link>
            &nbsp;.
          </p>
          <p className="about-grid-info-text">
            Beyond coding, my interests, playing video games, watching movies and sometimes reading books .
            I also enjoy learning new things. I am currently learning new language.
          </p>
          {/* <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            {skillsData.map((skill) => (
              <li className="about-grid-info-list-item" key={skill} >{skill}</li>
            ))}
          </ul> */}
        </div>
          <div className="about-grid-info">
            <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about-grid-info-list">
              {skillsData.map((skill) => (
                <li className="about-grid-info-list-item" key={skill} >{skill}</li>
              ))}
            </ul>
          </div>
      </div>
    </motion.div>
  );
}

export default About;
