import React from 'react';

const Experiences: React.FC = () => {
    return (
        <section id="experiences" className="bg-lightAccent p-8 flex items-start">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-dark mb-4">Experiences</h2>
                <ul className="list-disc list-inside text-dark">
                    <li>Software Engineer at ABC Corp</li>
                    <li>Frontend Developer at XYZ Inc.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experiences;
