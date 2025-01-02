import React from 'react';

const MainSection = () => {
    return (
        <>
            <section className='bg-BG1 h-screen bg-no-repeat bg-cover bg-center relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-gray-200/30' />
                <div className='max-w-[1400px] mx-auto px-2 relative z-10'>
                    <h3 className='text-5xl uppercase'>We make <br />what you want</h3>
                </div>
            </section>
        </>
    );
}

export default MainSection;
