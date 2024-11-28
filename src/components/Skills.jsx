import { useEffect, useState } from "react";
import Framework from "./Skills_List/Framework";
import Language from "./Skills_List/Language";
import Programming_skills from "./Skills_List/Programming_skills";
import Soft_Skills from "./Skills_List/Soft_Skills";
import Software from "./Skills_List/Software";


const Skills = () => {

    // Sample array of slide images or text (replace with your images or components)
    const slides = [
        <Programming_skills></Programming_skills>,
        <Framework></Framework>,
        <Software></Software>,
        <Soft_Skills></Soft_Skills>,
        <Language></Language>,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 4 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    return (
        <div id="skill">
            <p className="text-5xl text-center text-indigo-500 font-semibold pt-12 m-10">Skills</p>
            <div className="animated-border p-4 rounded-lg max-w-md mx-auto text-center h-[400px]">
                <div className="slider-container">
                    {/* Render the component based on currentIndex */}
                    {slides[currentIndex]}
                    {/* Optional: Add indicators */}
                    <div className="flex justify-center mt-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full ${
                                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;