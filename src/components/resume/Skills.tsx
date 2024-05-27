import React, { useEffect, useState } from 'react';

interface Skill {
    title: string;
    description: string;
}

const Skills: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSkills(data.skills);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchSkills();
    }, []);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setSkills(data.skills))
            .catch(error => console.error('Error loading skills:', error));
    }, []);

    return (
        <div className="space-y-4 p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
            {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                    <h3 className="font-bold">{skill.title}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
