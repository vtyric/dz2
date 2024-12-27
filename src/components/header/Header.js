import React, {useState} from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Button from "../button/Button";


function Header() {
    const images = [
        "/images/banner/banner.png",
        "/images/blog/learn_about_bg.png",
        "/images/blog/single_blog_1.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <header className="header" style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
            <div className="header-underline">
                <Navbar className="menu"/>
            </div>
            <div className="header-container">
                <button className="arrow-left" onClick={handlePrev} aria-label="Previous">
                    <i className="bi bi-chevron-left"></i>
                </button>
                <div className={"header-wrapper"}>
                    <div className="header-content">
                        <h1>Big Opportunity<br/>For Your Business</h1>
                        <Button text="Our Services"/>
                    </div>
                </div>
                <button className="arrow-right" onClick={handleNext} aria-label="Next">
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;
