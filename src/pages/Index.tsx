import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Lanyard from '../components/Lanyard';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/animations.css';

const Index = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800, // Match Portfolio's smooth transition duration
            easing: 'ease-in-out', // Smooth easing for consistency
            once: true, // Animation only happens once
        });

        // Apply dark mode class to document
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* Home Section */}
            <section id="home" className={`pt-24 pb-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                        {/* Lanyard Component */}
                        <div className="flex-shrink-0" data-aos="fade-right" data-aos-delay="100">
                            <Lanyard isDarkMode={isDarkMode} />
                        </div>

                        {/* Personal Description */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1
                                className={`text-5xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}
                                data-aos="fade-down"
                                data-aos-delay="200"
                            >
                                Hello, I'm{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                    Samuel Albi Pulo S
                                </span>
                            </h1>
                            <p
                                className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                A passionate full-stack developer with 3+ years of experience creating
                                beautiful, functional, and user-centered digital experiences. I love
                                turning complex problems into simple, elegant solutions.
                            </p>
                            <div
                                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <a
                                    href="/resume/CV-SamuelAlbiPuloS.pdf"
                                    download="CV-SamuelAlbiPuloS.pdf"
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-transform transform hover:scale-105 shadow-lg duration-300"
                                >
                                    Download CV (PDF)
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Experience isDarkMode={isDarkMode} />
            <Portfolio isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </div>
    );
};

export default Index;