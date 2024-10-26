import React, { useEffect } from 'react';
import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { MdSettingsApplications } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animate the frontend section from the left
    tl.fromTo(
      '.frontend',
      { x: -100, opacity: 0 }, // Start from left and invisible
      { x: 0, opacity: 1, duration: 1 } // Slide to original position and become visible
    );

    // Stagger the text animations in the frontend section
    tl.fromTo(
      '.frontend h3',
      { y: 20, opacity: 0 }, // Start below and invisible
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, // Slide to original position and become visible
      '-=0.5'
    );

    // Animate the backend section from the right
    tl.fromTo(
      '.backend',
      { x: 100, opacity: 0 }, // Start from right and invisible
      { x: 0, opacity: 1, duration: 1 } // Slide to original position and become visible
    );

    // Stagger the text animations in the backend section
    tl.fromTo(
      '.backend h3',
      { y: 20, opacity: 0 }, // Start below and invisible
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, // Slide to original position and become visible
      '-=0.5'
    );
  }, []);

  return (
    <>
      <div className="skills-header" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4>Learn about my</h4>
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="frontend">
          <h3 style={{ color: 'rgba(0, 0, 0, 0.493)' }}>Frontend Development</h3>
          <div className="front-skills">
            <div className="skill">
              <IoLogoHtml5 />
              <h3>Html</h3>
            </div>
            <div className="skill">
              <IoLogoCss3 />
              <h3>Css</h3>
            </div>
            <div className="skill">
              <IoLogoJavascript />
              <h3>Javascript</h3>
            </div>
            <div className="skill">
              <FaReact />
              <h3>ReactJs</h3>
            </div>
            <div className="skill">
              <RiTailwindCssFill />
              <h3>TailWindCss</h3>
            </div>
            <div className="skill">
              <MdSettingsApplications />
              <h3>GSAP</h3>
            </div>
          </div>
        </div>
        <div className="backend">
          <h3 style={{ color: 'rgba(0, 0, 0, 0.493)' }}>Backend Development</h3>
          <div className="back-skills">
            <div className="skill">
              <FaNodeJs />
              <h3>NodeJs</h3>
            </div>
            <div className="skill">
              <DiMongodb />
              <h3>MongoDB</h3>
            </div>
            <div className="skill">
              <BiLogoPostgresql />
              <h3>PostGreSql</h3>
            </div>
            <div className="skill">
              <SiPrisma />
              <h3>Prisma</h3>
            </div>
            <div className="skill">
              <DiRedis />
              <h3>Redis</h3>
            </div>
            <div className="skill">
              <SiApachekafka />
              <h3>Kafka</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
