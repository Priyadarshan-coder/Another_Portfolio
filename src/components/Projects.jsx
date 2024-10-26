import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import Assessment from '../assets/assessment.jpg';
import Form from '../assets/form.jpg';
import Job from '../assets/job.jpg';
import Portfolio from '../assets/portfolio.jpg';
import Estate from '../assets/real-estate.jpg';
import Stream from '../assets/stream.jpg';
import Card from './Card.jsx';

const Projects = () => {
    const arr = [
        {
            img: Estate,
            title: 'Home-Haven',
            git: 'https://github.com/Priyadarshan-coder/Home-Haven',
            live: 'https://mern-estate-cft3.onrender.com/'
        },
        {
            img: Stream,
            title: 'Stream-Connect',
            git: 'https://github.com/Priyadarshan-coder/Stream_Connect_App',
            live: 'https://github.com/Priyadarshan-coder/Stream_Connect_App',
        },
        {
            img: Job,
            title: 'Job-Posting App',
            git: 'https://github.com/Priyadarshan-coder/Cuvette_Assignment',
            live: 'https://cuvette-assignment-50gs.onrender.com/',
        },
        {
            img: Form,
            title: 'Unique Form',
            git: 'https://github.com/Priyadarshan-coder/Traxsmart',
            live: 'https://traxsmart-mocha.vercel.app/',
        },
        {
            img: Portfolio,
            title: 'Another Portfolio',
            git: 'https://github.com/Priyadarshan-coder/Priyadarshanportfolio',
            live: 'https://priyadarshan-coder.github.io/Priyadarshanportfolio/',
        },
        {
            img: Assessment,
            title: 'Personalised Assessment Dashboard',
            git: 'https://github.com/Priyadarshan-coder/PersonalisedAssessmentDashboard',
            live: 'https://github.com/Priyadarshan-coder/PersonalisedAssessmentDashboard',
        },
    ];

    return (
        <>
        <div className="project-header" style={{width:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h4 style={{ fontSize:'2.5rem'}}>View My recent</h4>
            <h1 style={{ color: 'rgba(0, 0, 0, 0.493)' , fontSize:'2.8rem'}}>Projects</h1>
        </div>
        <Swiper
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Default to 3 cards
            breakpoints={{
                // When the screen is >= 640px
                640: {
                    slidesPerView: 2,
                },
                // When the screen is >= 1024px
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {arr.map((elem, index) => (
                <SwiperSlide key={index}>
                    <Card img={elem.img} title={elem.title} git={elem.git} live={elem.live} />
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
};

export default Projects;

