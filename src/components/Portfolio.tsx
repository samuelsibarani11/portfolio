import React, { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface PortfolioProps {
    isDarkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Match Experience and HomeSection
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const projects = [
        {
            title: "SmileIn",
            image: "images/image-project/smilein.png",
            github: "https://github.com/samuelsibarani11/smilein-app",
            demo: "#"
        },
        {
            title: "Village App",
            image: "images/image-project/lumbanbinanga.png",
            github: "https://github.com/rickyananada1/PA1-Kel11",
            demo: "#"
        },
        {
            title: "Clinic Management System App",
            image: "images/image-project/del-clinic-app.png",
            github: "https://github.com/khensin166/PA2-Group09-Clinic-Del",
            demo: "#"
        },
        {
            title: "Dynamic Eform",
            image: "images/image-project/dynamic-form.png",
            github: "https://github.com/samuelsibarani11/eform",
            demo: "#"
        },
        {
            title: "Birthday Letter Card",
            image: "images/image-project/mobile-card-mockup.png",
            github: "https://github.com/samuelsibarani11/birthday-card",
            demo: "#"
        }
    ];

    return (
        <section id="portfolio" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Portfolio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <Github className="w-5 h-5 text-gray-800" />
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
                                    {project.title}
                                </h3>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;