import React from "react";
import "./WhyConsulting.css";
import Button from "../button/Button";

function WhyConsulting() {
    return (
        <section className="why-consulting">
            <div className="section-container">
                <div className="consulting-content">
                    <h2>Why our Consulting?</h2>
                    <p>
                        Esteem spirit temper too say adieus who direct esteem. It esteems
                        luckily or picture placing drawing. Apartments frequently or
                        motionless on reasonable.
                    </p>
                    <Button className="consulting-button" text={"About Us"}></Button>
                </div>
                <div className="consulting-image">
                    <img src="/images/service/about.png" alt="Consulting"/>
                </div>
            </div>
        </section>
    );
}


export default WhyConsulting;
