"use client";

import React, { useState, useEffect } from "react";

const MainSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { 
            bgClass: "bg-BG1", 
            heading: <>We make <br />what you want</>, 
            desc: "Our team brings your vision to life with precision and creativity." 
        },
        { 
            bgClass: "bg-BG2", 
            heading: <>Innovate <br />Your Dreams</>, 
            desc: "We transform your dreams into groundbreaking solutions." 
        },
        { 
            bgClass: "bg-BG3", 
            heading: <>Crafting <br />Digital Experiences</>, 
            desc: "Experience cutting-edge design and seamless functionality." 
        },
        { 
            bgClass: "bg-BG4", 
            heading: <>Empowering <br />Your Vision</>, 
            desc: "We empower your ideas with innovative strategies and tools." 
        },
        { 
            bgClass: "bg-BG5", 
            heading: <>Designing <br />for Tomorrow</>, 
            desc: "Creating timeless designs tailored for future possibilities." 
        },
        { 
            bgClass: "bg-BG6", 
            heading: <>Shaping Ideas <br />into Reality</>, 
            desc: "Turning abstract concepts into concrete, impactful outcomes." 
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
                    <div className="ml-10">
                        <h3 className="text-6xl uppercase text-white font-bold">
                            {slides[currentIndex].heading}
                        </h3>
                        <p className="text-lg text-white mt-4 max-w-[600px]">
                            {slides[currentIndex].desc}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
