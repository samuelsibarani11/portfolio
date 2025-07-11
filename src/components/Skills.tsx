import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SkillsProps {
    isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
    const [selectedContent, setSelectedContent] = useState('programmingLanguages');

    const handleContentChange = (content: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setSelectedContent(content);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className={`pt-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} text-${isDarkMode ? 'white' : 'gray-800'}`} id="skills">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="text-center md:text-left">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse" data-aos="fade-up">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        onClick={(e) => handleContentChange('programmingLanguages', e)}
                                        className={`inline-flex items-center text-3xl font-bold ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className={`rtl:rotate-180 w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} mx-1`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                        <a
                                            href="#"
                                            onClick={(e) => handleContentChange('tools', e)}
                                            className={`ms-1 text-3xl font-bold ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}
                                        >
                                            Tools
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                        {selectedContent === 'programmingLanguages' && (
                            <>
                                <h1 className="text-3xl font-semibold mb-4 mt-5" data-aos="fade-up">Programming Languages</h1>
                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5" data-aos="fade-up">
                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/sql.png"
                                                alt="SQL Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <svg
                                                enableBackground="new 0 0 32 32"
                                                height="100%"
                                                viewBox="0 0 32 32"
                                                width="100%"
                                                xmlSpace="preserve"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <g>
                                                    <polygon
                                                        fill="#1F62AE"
                                                        points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0"
                                                    />
                                                    <polygon fill="#347DC6" points="16,2 16,29.75 25.232,27.008 27.688,2" />
                                                    <polygon
                                                        fill="#FFFFFF"
                                                        points="24.363,6 7.607,6 8,10 16,10 8.25,12.99 8.619,17 19.502,17 19.158,21 16,21.99 12.861,20.984 12.533,19 8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.719,12.99 16.026,12.99 24,10"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/c.png"
                                                alt="C Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/golang.png"
                                                alt="Go Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/c-sharp.png"
                                                alt="C# Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <svg
                                                height="100%"
                                                style={{ enableBackground: "new 0 0 512 512" }}
                                                version="1.1"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <g id="_x31_81-java">
                                                    <g>
                                                        <path
                                                            d="M333.283,307.117c8.807-6.02,21.023-11.23,21.023-11.23s-34.768,6.29-69.357,9.165    c-42.315,3.503-87.775,4.221-110.595,1.167c-53.996-7.187,29.647-27.044,29.647-27.044s-32.433-2.154-72.413,17.07    C84.422,319.066,248.383,329.487,333.283,307.117z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                        <path
                                                            d="M256.56,278.277c-17.07-38.362-74.659-72.054,0-130.99C349.727,73.797,301.93,26,301.93,26    c19.316,75.917-67.92,98.917-99.456,146.084C181.001 C181.001,204.337,212.986,238.927,256.56,278.277z"
                                                            style={{ fill: "#F8981D" }}
                                                        />
                                                        <path
                                                            d="M359.518,119.975c0.09,0-157.403,39.351-82.205,125.958c22.191,25.516-5.84,48.516-5.84,48.516    s56.332-29.108,30.457-65.495C277.762,194.993,259.254,178.103,359.518,119.975z"
                                                            style={{ fill: "#F8981D" }}
                                                        />
                                                        <path
                                                            d="M354.039,362.999c-0.449,1.078-1.797,2.247-1.797,2.336    c115.266-30.277,72.861-106.824,17.787-87.416c-4.852,1.707-7.365,5.66-7.365,5.66s3.053-1.259,9.883-2.696    C400.396,275.044 400.396,275.044,440.377,318.168,354.039,362.999L354.039,362.999z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                        <path
                                                            d="M396.443,418.971c0,0,13.027,10.692-14.285,19.047c-52.018,15.722-216.339,20.483-261.979,0.63    c-16.441-7.099,14.374-17.072,24.078-19.137c10.061-2.157,15.901-1.799,15.901-1.799c-18.238-12.847-117.963,25.247-50.671,36.119    C292.945,483.657,444.061,440.443,396.443,418.971L396.443,418.971z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                        <path
                                                            d="M195.557,381.776c-70.706,19.766,43.035,60.555,133.055,22.011    c-14.732-5.748-25.334-12.397-25.334-12.397c-40.16,7.757-58.756,8.175-95.233,4.043    C177.948,392.019,195.557,381.776,195.557,381.776L195.557,381.776z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                        <path
                                                            d="M357.092,469.103c-70.705,13.296-157.941,11.771-209.602,3.233c0-0.088,10.602,8.716,65.046,12.22    c82.834,5.302,210.051-2.966,213.016-42.136C425.553,442.42,419.803,457.245,357.092,469.103L357.092,469.103z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                        <path
                                                            d="M317.922,343.144c-53.188,10.243-84.003,9.973-122.904,5.93    c-30.098-3.145-10.422-17.698-10.702-17.698c-77.982,25.874,43.304,55.164,152.281,23.269    C325.289,350.601,317.922,343.144,317.922,343.144z"
                                                            style={{ fill: "#5382A1" }}
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/javascript.png"
                                                alt="JavaScript Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/php.png"
                                                alt="PHP Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/dart.png"
                                                alt="Dart“Dart Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/programming-language/kotlin.png"
                                                alt="Kotlin Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-3xl font-semibold mt-12" data-aos="fade-up">Framework</h1>
                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5" data-aos="fade-up">
                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/react.png"
                                                alt="React Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/fiber.png"
                                                alt="Fiber Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/asp.net.png"
                                                alt="ASP.NET Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/gorm.png"
                                                alt="GORM Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/laravel.png"
                                                alt="Laravel Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/bootstrap.png"
                                                alt="Bootstrap Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/framework/tailwind.png"
                                                alt="Tailwind Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedContent === 'tools' && (
                            <>
                                <h1 className="text-3xl font-semibold mb-4 mt-5" data-aos="fade-up">Design</h1>
                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5" data-aos="fade-up">
                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-design/canva.png"
                                                alt="Canva Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-design/figma.png"
                                                alt="Figma Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-design/photoshop.png"
                                                alt="Photoshop Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-3xl font-semibold mb-4 mt-12" data-aos="fade-up">Editor & Modeling</h1>
                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5" data-aos="fade-up">
                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/bizagi.png"
                                                alt="Bizagi Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/postman.png"
                                                alt="Postman Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/power-designer.png"
                                                alt="Power Designer Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/star-uml.png"
                                                alt="StarUML Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/visual-paradigm.png"
                                                alt="Visual Paradigm Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Beginner</span>
                                        </div>
                                    </div>

                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/tools-editor-modeling/vscode.png"
                                                alt="VS Code Logo"
                                                className="h-12 mr-2"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Advanced</span>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-3xl font-semibold mb-4 mt-12" data-aos="fade-up">Version Control</h1>
                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5" data-aos="fade-up">
                                    <div className={`card relative w-64 h-16 border-2 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} rounded-lg overflow-hidden`}>
                                        <div className={`card-default-content absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}>
                                            <img
                                                src="/images/icon-skills/github.png"
                                                alt="GitHub Logo"
                                                className="h-12 mr-2 rounded-full"
                                            />
                                        </div>
                                        <div className={`card-hover-content absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-opacity duration-300 opacity-0`}>
                                            <span className={`${isDarkMode ? 'text-blue-200' : 'text-blue-600'} font-semibold`}>Intermediate</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".card-hover-content { opacity: 0; transition: opacity 0.3s ease; } .card:hover .card-hover-content { opacity: 1; } .card:hover .card-default-content { opacity: 0; }"
                }}
            />
        </>
    );
};

export default Skills;