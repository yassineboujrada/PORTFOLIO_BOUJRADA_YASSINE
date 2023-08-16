"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Get To Knew Me Better</SectionHeading>

      <p className="mb-3">
        After graduating with a bachelor's degree in{" "}
        <span className="font-medium">Computer Science</span> ,and another degree in 
        <span className="font-medium">Data Science and Business Intelligence 👨‍🎓🎓</span>.
        I embarked on a journey to follow my programming passion. 
        By challenging myself to create a lot of projects, I delved into the realm of 
        <span className="font-medium">full-stack web development</span> and{" "}<span className="font-medium">machine learning field</span>,{" "}
        in the other hand, I participated in <span className="underline">national coding competitions</span>. 
        Among all the facets of programming,{" "}
        <span className="italic">I find the problem-solving element</span> to be the most exhilarating. The sensation of unraveling a complex challenge 
        and unveiling a solution is truly gratifying this sentiment 
        <span className="italic">if I can say that all programmers love it</span>.{" "} 
        
        In terms of my core tech stack, I'm well-versed in {" "}
        <span className="underline">ReactJs, Next.js, Flask, Django, and OracleDB</span>.{" "}
        My proficiency extends to TypeScript, MongoDB, and diverse languages and frameworks, 
        and I perpetually seek avenues to learn fresh technologies. Presently, {" "}
        <span className="font-medium underline">I am actively seeking a full-time role as a Software Developer or Data Scientist</span>.
      </p>

      <p>
        <span className="italic">
          Beyond coding, my interests, playing video games, 
          watching movies and 
          sometimes reading books . 
          I also enjoy learning new things. I am currently learning new language.{" "}
        </span>
      </p>
    </motion.section>
  );
}
