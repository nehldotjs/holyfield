import React from "react";
import "../styles/hero.css";
import DiscoverButton from "../PropAssetss/DiscoverBtn";
function Hero() {
    return (
        <div className="hero-wrapper">
            <h1>
                Unlock New Opportunities with <br /> Holy Field — Your Gateway to Global
                Possibilities
            </h1>

            <div className="hero-paragraph-container">
                <p>Holy Field, we make your dreams of studying, working, traveling, or expanding your business abroad a reality.    Start your journey today with confidence, knowing you have a dedicated partner that puts your goals first. </p>
            </div>

            <DiscoverButton />

            
        </div>
    );
}

export default Hero;
