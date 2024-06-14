import "./Section1.css";
import section1Logo1 from "../../images/logos/section1-logo1.png";
import section1Logo2 from "../../images/logos/section1-logo2.png";
import section1Logo3 from "../../images/logos/section1-logo3.png";
import section1Logo4 from "../../images/logos/section1-logo4.png";

function Section1() {
    return (
        <div className="section1">
            <h2>Why Hello Fresh?</h2>
            <div className="section1-cards">
                <div className="section1-card">
                    <img src={section1Logo1} alt="" />
                    <h4>No skimpin’ on the chicken!</h4>
                    <p>Or steak, or fish, or plant protein.</p>
                </div>
                <div className="section1-card">
                    <img src={section1Logo2} alt="" />
                    <h4>No commitment whatsoever</h4>
                    <p>Skipping weeks or cancelling is super easy.</p>
                </div>
                <div className="section1-card">
                    <img src={section1Logo3} alt="" />
                    <h4>The most 5-star reviews</h4>
                    <p>Our huge recipe selection wows week after week.</p>
                </div>
                <div className="section1-card">
                    <img src={section1Logo4} alt="" />
                    <h4>Fresh and affordable</h4>
                    <p>Chef-created deliciousness from $7.49 per meal.</p>
                </div>
            </div>
            <button>Get started</button>
        </div>
    );
}

export default Section1;
