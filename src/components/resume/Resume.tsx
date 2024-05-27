import React from 'react';
import Education from "./Education";
import Skills from "./Skills";
import Experiences from "./Experiences";

const Resume: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-24">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-8">Resume</h1>
                <section id="education" className="mb-8">
                    <Education />
                </section>
                <section id="skills" className="mb-8">
                    <Skills />
                </section>
                <section id="experience" className="mb-8">
                    <Experiences />
                </section>
            </div>
        </div>
    );
};

export default Resume;
