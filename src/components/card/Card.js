import React from 'react';
import './Card.css';

function Card({ iconPath, title, description, link, gradient }) {
    return (
        <div className="card">
            <div
                className="card-icon"
                style={{ background: gradient }} // Установка градиента фона
            >
                <img src={iconPath} alt="icon" className="icon-img" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a href={link} className="card-link">Learn More</a>
        </div>
    );
}

export default Card;
