import React from "react";
import "./Footer.css";

function Footer() {
    const stats = [
        { id: 1, value: "200+", label: "Team Members", icon: "/images/svg_icon/group.svg" },
        { id: 2, value: "97%", label: "Business Success", icon: "/images/svg_icon/cart.svg" },
        { id: 3, value: "5628", label: "Happy Client", icon: "/images/svg_icon/heart.svg" },
        { id: 4, value: "5637", label: "Business Done", icon: "/images/svg_icon/respect.svg" },
    ];

    return (
        <footer className="footer">
            <div className="footer-background">
                <div className="footer-container">
                    {stats.map((stat) => (
                        <div className="footer-item" key={stat.id}>
                            <img src={stat.icon} alt={stat.label} className="footer-icon" />
                            <h3 className="footer-value">{stat.value}</h3>
                            <p className="footer-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
