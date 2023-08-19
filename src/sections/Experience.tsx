import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "3D SMART FACTORY",
      role: "Machine Learning Engineer",
      start: "February 2023",
      end: "July 2023",
      shortDescription: [
        "Developing and Analyzing Machine Learning Models Exactly in Reinforcement Learning.",
        "Developing Full Stack websites using as Back-End language: Django, Flask, ReactJS and ThreeJs"
      ],
    },
    {
      name: "DataStory",
      role: "Consultant BI",
      start: "April 2022",
      end: "August 2022",
      shortDescription: [
        "Creation of BI dashboards with ETL or Data Engineer, we use Microsoft Power BI.",
        "Develop Full Stack websites use as language of Back-End: Django.",
        "Work in databases use Sql Server and OracleDB.",
        "Machine learning-oriented projects exactly in Learning reinforcement."
      ],
    },
    {
      name: "Awelk Maroc",
      role: "Full Stack Developer",
      start: "July 2021",
      end: "September 2021",
      shortDescription: [
        "Developed a full stack e-commerce website by Django.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>My Last experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <p className="link">
                  {expereinces[selected].name}
                </p>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
