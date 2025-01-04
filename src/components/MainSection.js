"use client";

import React, { useState, useEffect } from "react";

const MainSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { 
            bgClass: "bg-BG1", 
            heading: <>We make <br />what you want</>, 
            desc: "Our expert team transforms your unique ideas into reality with precision and creativity, ensuring every project exceeds your expectations." 
        },
        { 
            bgClass: "bg-BG2", 
            heading: <>Innovate <br />Your Dreams</>, 
            desc: "Innovation is at the core of what we do, turning your dreams into impactful solutions that redefine boundaries and inspire change." 
        },
        { 
            bgClass: "bg-BG3", 
            heading: <>Crafting <br />Digital Experiences</>, 
            desc: "We specialize in creating engaging and immersive digital experiences that captivate audiences and elevate brands to new heights." 
        },
        { 
            bgClass: "bg-BG4", 
            heading: <>Empowering <br />Your Vision</>, 
            desc: "Empowering your vision with the tools, strategies, and expertise needed to bring your concepts to life in the most effective way possible." 
        },
        { 
            bgClass: "bg-BG5", 
            heading: <>Designing <br />for Tomorrow</>, 
            desc: "Our forward-thinking designs are crafted to not only meet today's needs but also adapt and thrive in the future's dynamic landscape." 
        },
        { 
            bgClass: "bg-BG6", 
            heading: <>Shaping Ideas <br />into Reality</>, 
            desc: "From abstract concepts to concrete results, we take pride in shaping ideas into tangible outcomes that make a lasting impact." 
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <section
                className={`h-screen bg-no-repeat bg-cover bg-top relative transition-all duration-700 ${slides[currentIndex].bgClass}`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-gray-200/30" />
                <div className="max-w-[1400px] mx-auto px-2 relative z-10 flex flex-col justify-center h-full">
                    <div className="ml-10 space-y-3">
                        <h3 className="text-6xl uppercase text-white font-bold">
                            {slides[currentIndex].heading}
                        </h3>
                        <p className="text-lg text-white mt-4 max-w-[700px] leading-relaxed">
                            {slides[currentIndex].desc}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
