import React from 'react';
import logo from '../assets/My Sparkle Heart.png';

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <h1>
                    Life is a gift.<br />
                    <span className="sparkle-text">Make it Sparkle.</span>
                </h1>
                <p>
                    Hello!!! I'm so glad you stopped by to check out my site and see how I can help serve your family!
                </p>
            </div>

            <div className="hero-image">
                <img src={logo} alt="My Sparkle Heart Logo" className="hero-logo" />
            </div>
        </section>
    );
}