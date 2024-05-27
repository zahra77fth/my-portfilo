import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-lightAccent p-8 flex items-start">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <ul className="list-disc list-inside">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
