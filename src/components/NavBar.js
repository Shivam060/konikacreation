"use client";

import { useRouter } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { About, Kids, Men, Women } from '@/Json/MenuItem';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [BigMenuToggle, setBigMenuToggle] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const LinksList = ({ title, links, titleClassName, ulClassName }) => (
        <div className="pr-6 max-md:w-full">
            {title && <h3 className={`font-bold ${titleClassName}`}>{title}</h3>}
            <ul className={`mt-2 ${ulClassName}`}>
                {links?.map((link, index) => (
                    <li key={index} className="">
                        <button className="py-0.5 hover:underline cursor-pointer text-left font-novaLight text-sm" onClick={() => router.push(link.url)}>{link.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <header
            className={`z-[100] w-full fixed top-0 left-0 max-md:bg-blue-700 bg-white transition-all duration-200 shadow-lg ${isScrolled ? 'shadow-md' : ''
                }`}
        >
            <div className='grid grid-cols-8 max-xl:grid-cols-12 max-lg:grid-cols-12 max-md:grid-cols-4 gap-x-10'>
                <div className='col-span-2 flex max-xl:col-span-2 max-lg:col-span-8 max-md:col-span-2 max-md:pt-2 max-sm:col-span-2 max-sm:mb-4'>
                    <div
                        className={`text-white flex max-sm:py-0 ${isScrolled ? 'pl-0' : ''
                            }`}
                    >
                        <div className={`flex justify-start items-center gap-1 pl-5`}>
                            <div className='flex justify-center xl:w-full'>
                                <img
                                    onClick={() => router.push("/")}
                                    src='/image/konika-creation-logo.jpeg'
                                    alt='logo'
                                    className='w-24 h-24 cursor-pointer'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:hidden max-md:order-2 max-lg:col-span-2 max-md:col-span-1 max-sm:col-span-1 max-md:pt-0 max-md:justify-end max-md:mr-5 justify-center max-sm:mb-4'>
                    <button
                        type='button'
                        onClick={() => setBigMenuToggle(!BigMenuToggle)}
                        className='-m-2 flex flex-col items-center justify-center rounded-md p-2 text-white'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Menu className='w-6 h-6' aria-hidden='true' />
                        <p className='text-xs uppercase -mt-1'>Menu</p>
                    </button>
                </div>
                <div className='col-span-6 max-md:order-3 max-xl:col-span-10 max-lg:col-span-2 max-md:col-span-1 max-xl:flex max-xl:items-center max-xl:justify-end max-md:justify-start'>
                    <nav className='px-5 max-md:px-1'>
                        <div className={`bg-gray-700 max-md:hidden lg:flex max-md:pt-0 lg:gap-x-8 justify-end pl-7 max-xl:pl-0 items-center  max-md:px-1 ${isScrolled ? "max-md:hidden" : ""
                            }`}>
                            <div className="hidden lg:flex gap-10  justify-start max-xl:gap-8  text-[13px] font-novaLight">
                                <a href="#" className="leading-6 text-sm font-bold uppercase text-white hover:underline hover:text-gray-400 transition duration-500">Library</a>
                                <a href="#" className="leading-6 text-sm font-bold uppercase text-white hover:underline hover:text-gray-400 transition duration-500">Contact us</a>
                            </div>
                            <div className="flex justify-end max-2xl:flex-col gap-4">
                                <a href="tel:9810207400" className="bg-cyan-500 max-xl:w-36 flex justify-start items-end gap-2 py-3 px-4">
                                    <Phone className={`h-4 w-4 text-white`} aria-hidden="true" />
                                    <span className="text-white text-sm uppercase font-bold">Call now</span>
                                </a>
                            </div>
                        </div>
                        <ul className={`${BigMenuToggle
                            ? "fixed w-full h-full left-0 top-0 pt-10"
                            : `hidden relative`}  lg:flex items-center justify-center gap-0 xl:gap-4
                text-black font-semibold text-sm bg-white max-xl:pl-2`}>
                            {BigMenuToggle ? (
                                <>
                                    <button
                                        onClick={() => setBigMenuToggle(!BigMenuToggle)}
                                        className="mb-4 text-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </>
                            ) : null}
                            <li className="relative group">
                                <button className={`relative px-3 max-xl:px-1 ${isScrolled ? "py-3" : "py-3"}  focus:outline-none text-gray-700 font-novaBold text-sm max-[1600px]:text-sm flex items-center gap-1`}>
                                    About{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                                </button>
                                <div
                                    className={`${BigMenuToggle ? "relative w-full" : "absolute w-[800px]"
                                        } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                                >
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                                            <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                                                <LinksList title="WHO WE ARE" links={About.sublinks["Who We Are"]} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 max-md:hidden">
                                            <div className="bg-About bg-cover bg-center bg-black bg-blend-darken bg-opacity-80">
                                                <div className="flex flex-col items-center p-5">
                                                    <p className="flex flex-col">
                                                        <span className="text-center font-normal text-xl font-novaLight text-white">
                                                            AKG University
                                                        </span>
                                                        <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                                                            of Excellence
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 bg-indigo-950 mt-5">
                                                    <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Human Dignity
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 15 6 6" /><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" /></svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Empathy
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Humility
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" /></svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Giving
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="group">
                                <button className={`relative px-3 max-xl:px-1 ${isScrolled ? "py-3" : "py-3"} focus:outline-none text-gray-700 font-novaBold text-sm max-[1600px]:text-sm flex items-center gap-1`}>
                                    Men
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                                </button>
                                <div className={`${BigMenuToggle ? "relative w-full" : "absolute w-[800px]"} left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white text-black rounded-lg shadow-lg`}>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                                            <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                                                <LinksList title="Shirts" links={Men.sublinks["Shirts"]} />
                                                <LinksList title="Trousers" links={Men.sublinks["Trousers"]} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 max-md:hidden">
                                            <div className="bg-Men bg-cover bg-center bg-black bg-blend-darken bg-opacity-80">
                                                <div className="flex flex-col items-center p-5">
                                                    <p className="flex flex-col">
                                                        <span className="text-center font-normal text-xl font-novaLight text-white">
                                                            Men’s Collection
                                                        </span>
                                                        <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                                                            Fresh Styles
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 bg-indigo-950 mt-5">
                                                    <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">Strong & Bold</span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart">
                                                            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                                            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                                            <path d="m2 15 6 6" />
                                                            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">For the Modern Man</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="group">
                                <button className={`relative px-3 max-xl:px-1 ${isScrolled ? "py-3" : "py-3"} focus:outline-none text-gray-700 font-novaBold text-sm max-[1600px]:text-sm flex items-center gap-1`}>
                                    Women
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                                </button>
                                <div className={`${BigMenuToggle ? "relative w-full" : "absolute w-[800px]"} left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white text-black rounded-lg shadow-lg`}>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                                            <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                                                <LinksList title="Suits" links={Women.sublinks["Suits"]} />
                                                <LinksList title="Sarees" links={Women.sublinks["Sarees"]} />
                                                <LinksList title="Lehngas" links={Women.sublinks["Lehngas"]} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 max-md:hidden">
                                            <div className="bg-Women bg-cover bg-center bg-black bg-blend-darken bg-opacity-80">
                                                <div className="flex flex-col items-center p-5">
                                                    <p className="flex flex-col">
                                                        <span className="text-center font-normal text-xl font-novaLight text-white">
                                                            Women’s Collection
                                                        </span>
                                                        <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                                                            Elegant Styles
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 bg-indigo-950 mt-5">
                                                    <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">Grace & Elegance</span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart">
                                                            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                                            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                                            <path d="m2 15 6 6" />
                                                            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">Timeless Trends</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="group">
                                <button className={`relative px-3 max-xl:px-1 ${isScrolled ? "py-3" : "py-3"} focus:outline-none text-gray-700 font-novaBold text-sm max-[1600px]:text-sm flex items-center gap-1`}>
                                    Kids
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                                </button>
                                <div className={`${BigMenuToggle ? "relative w-full" : "absolute w-[800px]"} left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white text-black rounded-lg shadow-lg`}>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                                            <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                                                <LinksList title="Boys" links={Kids.sublinks["Boys"]} />
                                                <LinksList title="Girls" links={Kids.sublinks["Girls"]} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 max-md:hidden">
                                            <div className="bg-Kids bg-cover bg-center bg-black bg-blend-darken bg-opacity-80">
                                                <div className="flex flex-col items-center p-5">
                                                    <p className="flex flex-col">
                                                        <span className="text-center font-normal text-xl font-novaLight text-white">
                                                            Kids Collection
                                                        </span>
                                                        <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                                                            Fresh Styles
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 bg-indigo-950 mt-5">
                                                    <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Playful & Fun
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart">
                                                            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                                            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                                            <path d="m2 15 6 6" />
                                                            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                                        </svg>
                                                        <span className="mt-2 text-xs text-white font-novaLight">
                                                            Kids' Dreams
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
