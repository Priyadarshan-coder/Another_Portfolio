import React, { useEffect, useRef } from 'react';
import './Achievments.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievments = () => {
  const containerElemsRef = useRef([]);

  useEffect(() => {
    containerElemsRef.current.forEach((elem, index) => {
      gsap.fromTo(
        elem,
        {
          x: index % 2 === 0 ? -100 : 100, // Alternate directions
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => gsap.to(elem, { opacity: 1 }),
            onLeaveBack: () => gsap.to(elem, { opacity: 0 }), // Hide when scrolling back
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div
        className="achievment-header"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4 style={{ color: 'rgba(0, 0, 0, 0.493)', fontSize: '2.5rem' }}>
          Some of my
        </h4>
        <h1 style={{ fontSize: '2.8rem' }}>Achievements</h1>
      </div>
      <div className="achievment-container">
        {[
          {
            title: 'Leetcode',
            description:
              'Solved over 800 problems on topics like Dynamic Programming, Graphs, Trees, etc.',
            date: 'Aug 2022 - Oct 2024',
            link: 'https://leetcode.com/Priyadarshancodr/',
          },
          {
            title: 'GeeksForGeeks',
            description: 'Solved over 200 problems on similar DSA topics.',
            date: 'Aug 2022 - Oct 2024',
            link: 'https://www.geeksforgeeks.org/user/priyadarshanghcmf/',
          },
          {
            title: 'Smart India Hackathon',
            description:
              'Secured top 30 position in intra-school hackathon competing against 130 teams.',
            date: 'Oct 2023',
            link: '#',
          },
        ].map((achievement, index) => (
          <div
            className="container-elems"
            key={index}
            ref={(el) => (containerElemsRef.current[index] = el)}
          >
            <div className="achiev-top">
              <h2>
                <a href={achievement.link}>{achievement.title}</a>
              </h2>
              <h2>{achievement.description}</h2>
            </div>
            <h3>{achievement.description}</h3>
            <h2>{achievement.date}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievments;
