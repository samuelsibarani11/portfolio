import React, { useState, useRef, useEffect } from 'react';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import gsap from 'gsap';

interface LanyardProps {
    isDarkMode: boolean;
}

const Lanyard: React.FC<LanyardProps> = ({ isDarkMode }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const lanyardRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const initialY = useRef(0);
    const currentY = useRef(0);

    useEffect(() => {
        if (lanyardRef.current) {
            gsap.fromTo(lanyardRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "bounce.out",
                    delay: 0.5
                }
            );

            setTimeout(() => {
                gsap.to(lanyardRef.current, {
                    y: -10,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 3,
                    ease: "power2.inOut"
                });
            }, 1500);
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        initialY.current = e.clientY;
        currentY.current = 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const deltaY = e.clientY - initialY.current;
        currentY.current = Math.max(0, Math.min(deltaY, 80));

        if (cardRef.current) {
            gsap.set(cardRef.current, { y: currentY.current });
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (currentY.current > 40) {
            setIsFlipped(!isFlipped);

            if (cardRef.current) {
                gsap.to(cardRef.current, {
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.8)"
                });
            }
        } else {
            if (cardRef.current) {
                gsap.to(cardRef.current, {
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.8)"
                });
            }
        }
    };

    return (
        <div className="flex flex-col items-center relative" ref={lanyardRef}>
            {/* Rope */}
            <div className={`w-1 h-16 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full mb-2`} />

            {/* Card */}
            <div
                ref={cardRef}
                className="relative w-64 h-80 cursor-grab active:cursor-grabbing"
                style={{ perspective: '1000px' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                    {/* Front */}
                    <div className={`absolute inset-0 w-full h-full ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border-2 rounded-lg shadow-xl backface-hidden flex flex-col items-center justify-center p-6`}>
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
                            <img src="/images/profile/profile.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>SAM</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center text-sm`}>Full Stack Developer</p>
                        <div className={`mt-4 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                            Pull down to reveal contact info
                        </div>
                    </div>

                    {/* Back */}
                    <div className={`absolute inset-0 w-full h-full ${isDarkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'} border-2 rounded-lg shadow-xl backface-hidden flex flex-col items-center justify-center p-6`} style={{ transform: 'rotateY(180deg)' }}>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Contact Information</h3>
                        <div className="space-y-4 w-full">
                            <div className="flex items-center space-x-3">
                                <Mail className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>samuelalbi09@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img src="images/profile/linkedin.png" alt="LinkedIn" className={`w-5 h-5 ${isDarkMode ? 'invert' : ''}`} />
                                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>linkedin.com/in/johndeveloper</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Github className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>github.com/johndeveloper</span>
                            </div>
                        </div>
                        <div className={`mt-6 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                            Pull down again to flip back
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lanyard;
