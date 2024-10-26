import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutMe.css';

// Import Font Awesome icons (if using Font Awesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animate the .about-left container from the left
    tl.fromTo(
      '.about-left',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Animate the .about-right container from the right with a delay
    tl.fromTo(
      '.about-right',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      '-=0.5'
    );

    // Animate the .about-text container from the top with a delay
    tl.fromTo(
      '.about-text',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="education">
            {/* Education Section with Graduation Icon */}
            <h2 className="education-title" style={{width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faGraduationCap} className="graduation-icon" /> 
              Education
            </h2>
            <h1 className="bit-bold" style={{ width: '100%' }}>Heritage Institute Of Technology</h1>
            <h1 className="bit-bold">Kolkata, India</h1>

            <div className="info-row">
              <h1>Degree:</h1>
              <h2>B.TECH EE</h2>
            </div>

            <div className="info-row">
              <h1>CGPA:</h1>
              <h2>8.5/10</h2>
            </div>

            <h1>Relevant Courseworks:</h1>
            <ul>
              <li><h2>Database Management Systems</h2></li>
              <li><h2>Cloud Computing</h2></li>
              <li><h2>Data Structures and Algorithms</h2></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-text">
        I am an Electrical Engineering UnderGrad Student at Heritage Institute Of Technology, Currently at final year. I love problem-solving and coding. I always love to do things which I am passionate about. I have worked on technologies like React, PostGreSql, MySQL, MongoDB, Prisma, NodeJs, Redis, Kafka, HTML5, CSS, Java, and C during my bachelor's. I have made some web apps using the mentioned technologies to solve real-world problems during my undergrad which has helped me in gaining experience in these technologies. I am passionate about developing complex applications that solve real-world problems impacting millions of users.
      </div>
    </>
  );
};

export default AboutMe;
