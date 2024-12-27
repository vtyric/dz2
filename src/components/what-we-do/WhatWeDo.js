import React from 'react';
import './WhatWeDo.css';
import Card from "../card/Card";

const cardsData = [
    {
        icon: "/images/svg_icon/cart.svg",
        title: "Marketing & SEO Agency",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #007bff, #00d4ff)"
    },
    {
        icon: "/images/svg_icon/group.svg",
        title: "Startup Agency",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #28a745, #81c784)"
    },
    {
        icon: "/images/svg_icon/heart.svg",
        title: "Corporate Business",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #fd7e14, #ffb84d)"
    },
    {
        icon: "/images/svg_icon/quote.svg",
        title: "Finance Solution",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #6f42c1, #d291ff)"
    },
    {
        icon: "/images/svg_icon/respect.svg",
        title: "Food & Restaurant",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #17a2b8, #71d3f7)"
    },
    {
        icon: "/images/svg_icon/cart.svg",
        title: "Travel Agency",
        description: "Esteem spirit temper too say adieus who direct esteem.",
        link: "#",
        gradient: "linear-gradient(135deg, #e83e8c, #ff91c5)"
    },
];

function WhatWeDo() {
    return (
        <section className="what-we-do">
            <h2 className="section-title">What we Do?</h2>
            <div className="cards-container">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        iconPath={card.icon}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        gradient={card.gradient} // Передача градиента
                    />
                ))}
            </div>
        </section>
    );
}

export default WhatWeDo;
