import React from 'react';
import './Card.css';

const Card = ({ img, title, git, live }) => {
    console.log(live);
    
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <div className="links">
                <h3><a href={git}>Git</a></h3>
               <h3> <a href={live}>Live</a></h3>
            </div>
        </div>
    );
};

export default Card;
