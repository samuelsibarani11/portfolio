import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ExperienceProps {
    isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const experiences = [
        {
            title: "Software Engineer",
            company: "dotsCore by Dimensi Kreasi Nusantara",
            location: "Depok, Indonesia",
            period: "Aug 2024 - Dec 2024",
            description: [
                "Developed a dynamic e-form website for BPR members, utilizing React.js, Tailwind CSS, and Supabase for efficient data handling and storage.",
                "Created a mobile interface for inter-member transactions at BPR, using React Native and integrated API consumption for seamless functionality across devices.",
                "Developed a Human Capital Management for BPR,using Django Framework"
            ]
        },
        {
            title: "Student Leadership Program",
            company: "Del Institute of Technology",
            location: "Laguboti, Indonesia",
            period: "Aug 2023 - Jun 2024",
            description: [
                "Guided and provided assistance to new students throughout their first year on campus.",
                "Helped new students adjust to the campus environment by offering advice.",
                "Cared for 14 new student siblings within a single foster family."
            ]
        },
        {
            title: "Database Teaching Assistant",
            company: "Del Institute of Technology",
            location: "Laguboti, Indonesia",
            period: "Feb 2024 - May 2024",
            description: [
                "Managed a MySQL Database Management System.",
                "Assisted in teaching the Introduction to Database course.",
                "Instructed over 50 students.",
                "Developed guideline documentation for students.",
                "Collaborated with Teaching Assistants and Lecturers.",
                "Generated assignments, exams, and instructional videos.",
                "Reviewed assignment and exam results, provided video feedback."
            ]
        }
    ];

    return (
        <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
                                        {exp.title}
                                    </h3>
                                    <p className={`text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} list-disc list-inside space-y-1`}>
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
