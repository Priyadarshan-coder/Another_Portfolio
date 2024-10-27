import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievments.css';

gsap.registerPlugin(ScrollTrigger);

const Achievments = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.container-elems');

    elems.forEach((elem, index) => {
      gsap.fromTo(
        elem,
        {
          x: index % 2 === 0 ? -200 : 200, // Move from left or right based on index
          opacity: 0, // Start hidden
        },
        {
          x: 0, // Final position
          opacity: 1, // Fade in
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%', // Trigger when the top of the element hits 80% of the viewport height
            toggleActions: 'play none none reverse', // Play on enter, reverse on leave
            markers: false, // Set to true to see markers during development
          },
        }
      );
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="achievment-header" style={{ marginTop:'15vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h4 style={{ color: 'rgba(0, 0, 0, 0.493)', fontSize: '2.5rem' }}>Some of my</h4>
        <h1 style={{ fontSize: '2.8rem' }}>Achievments</h1>
      </div>
      <div className="achievment-container">
        <div className="container-elems">
          <div className="achiev-top">
            <h2><a href="https://leetcode.com/Priyadarshancodr/">Leetcode</a></h2>
            <h2 className="extra">Problem Solving</h2>
          </div>
          <h3>Solved over 800 problems at LeetCode on topics such as Dynamic Programming, Graphs, Trees, Heaps, Arrays, Greedy algorithms, Stacks, Queues, Bit Manipulations, and constructive algorithms.</h3>
          <h2>Aug 2022 - Oct 2024</h2>
        </div>
        <div className="container-elems">
          <div className="achiev-top">
            <h2><a href="https://www.geeksforgeeks.org/user/priyadarshanghcmf/">GeeksForGeeks</a></h2>
            <h2 className="extra">Problem Solving</h2>
          </div>
          <h3>Solved over 200 problems at GeeksForGeeks on topics such as Dynamic Programming, Graphs, Trees, Heaps, Arrays, Greedy algorithms, Stacks, Queues, Bit Manipulations, and constructive algorithms.</h3>
          <h2>Aug 2022 - Oct 2024</h2>
        </div>
        <div className="container-elems">
          <div className="achiev-top">
            <h2><a href="#">Smart India Hackathon</a></h2>
            <h2 className="extra">Problem Statement Solution</h2>
          </div>
          <h3>Competed against 130 other teams to secure rank under top 30 positions from intra-school hackathon working on our project CareerCompass.</h3>
          <h2>Oct 2023</h2>
        </div>
      </div>
    </>
  );
}

export default Achievments;
