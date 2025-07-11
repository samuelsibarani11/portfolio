import React, { useState, useRef, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
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
            gsap.fromTo(
                lanyardRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "bounce.out",
                    delay: 0.5,
                }
            );

            setTimeout(() => {
                gsap.to(lanyardRef.current, {
                    y: -10,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 3,
                    ease: "power2.inOut",
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
        e.preventDefault(); // mencegah highlight teks saat drag

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
        }
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.8)",
            });
        }
    };

    return (
        <div className="flex flex-col items-center relative" ref={lanyardRef}>
            {/* Tali */}
            <div
                className={`w-1 h-16 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full mb-2`}
            />

            {/* Kartu */}
            <div
                ref={cardRef}
                className={`relative w-64 h-80 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ perspective: '1000px' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="absolute inset-0 w-full h-full transition-transform duration-700"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                >
                    {/* Depan */}
                    <div
                        className={`absolute inset-0 w-full h-full ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border-2 rounded-lg shadow-xl flex flex-col items-center justify-center p-6`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
                            <img src="/images/profile/profile.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>SAM</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center text-sm`}>Full Stack Developer</p>
                        <div className={`mt-4 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                            Tarik ke bawah untuk menampilkan kontak
                        </div>
                    </div>

                    {/* Belakang */}
                    <div
                        className={`absolute inset-0 w-full h-full ${isDarkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'} border-2 rounded-lg shadow-xl flex flex-col justify-between p-4`}
                        style={{
                            transform: 'rotateY(180deg)',
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center`}>
                                Kontak
                            </h3>
                            <div className="space-y-3 w-full px-2">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <Mail className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs leading-relaxed break-all`}>
                                            samuelalbi09@gmail.com
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <Linkedin className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a
                                            href="https://www.linkedin.com/in/samuel-albi-pulo-s-084392272/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} text-xs leading-relaxed transition-colors duration-200 block`}
                                        >
                                            Samuel Albi Pulo S
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <Github className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a
                                            href="https://github.com/samuelsibarani11"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} text-xs leading-relaxed transition-colors duration-200 block`}
                                        >
                                            github.com/samuelsibarani11
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-center mt-4`}>
                            Tarik ke bawah lagi untuk kembali
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lanyard;