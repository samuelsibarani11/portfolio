import React from 'react';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} pt-24`} id="footer">
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap"
                        data-aos="fade-up"
                    >
                        Portfolio
                    </span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <a
                                href="https://github.com/samuelsibarani11"
                                className="hover:underline me-4 md:me-6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icon-skills/github.png"
                                    alt="GitHub"
                                    className="rounded-xl h-12 w-12"
                                    data-aos="fade-up"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/samuel-albi-pulo-s-084392272/"
                                className="hover:underline me-4 md:me-6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icon-skills/linkedin.png"
                                    alt="LinkedIn"
                                    className="rounded-full h-20 w-20"
                                    data-aos="fade-up"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/samuel_sibarani14"
                                className="hover:underline me-4 md:me-6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icon-skills/instagram.png"
                                    alt="Instagram"
                                    className="rounded-xl h-12 w-12"
                                    data-aos="fade-up"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                <hr className={`my-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} sm:mx-auto lg:my-8`} />

                <span className="flex justify-center text-sm sm:text-center">
                    © 2024
                    <span className="underline px-2">
                        Samuel Albi Pulo S
                    </span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
