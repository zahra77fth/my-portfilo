import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="bg-lightAccent p-8 flex items-start">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-dark mb-4">Education</h2>
                <ul className="list-disc list-inside">
                    <li className="text-dark">University XYZ - B.S. in Computer Science</li>
                    <li className="text-dark">Some Online Course - Full-Stack Web Development</li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
