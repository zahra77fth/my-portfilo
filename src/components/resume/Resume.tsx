import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experiences';

interface EducationInfoProps {
    startYear: number;
    endYear: number;
    universityName: string;
    degreeLevel: string;
    location: string;
    description: string;
}

interface ExperienceDetail {
    title: string;
    description: string;
}

interface ExperienceProps {
    companyName: string;
    startYear: number;
    endYear: number;
    employmentType: string;
    position: string;
    companyWebsite?: string;
    details: ExperienceDetail[];
}

const Resume: React.FC = () => {
    const [educationData, setEducationData] = useState<EducationInfoProps[]>([]);
    const [experienceData, setExperienceData] = useState<ExperienceProps[]>([]);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEducationData(data.education);
                setExperienceData(data.experiences);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchResume();
    }, []);

    return (
        <div className="relative bg-lightAccent py-24">
            <div className="container mx-auto min-h-screen p-4">
                <div className="bg-accent shadow-md rounded-lg p-4 fixed w-96 mx-auto bottom-24 left-0 right-0 z-10 flex justify-around">
                    <a href="#skills" className="flex cursor-pointer">
                        <FaTools className="text-primary text-xl" />
                        <span className="ml-2 font-bold text-primary">Skills</span>
                    </a>
                    <a href="#education" className="flex cursor-pointer">
                        <FaGraduationCap className="text-primary text-xl" />
                        <span className="ml-2 font-bold text-primary">Education</span>
                    </a>
                    <a href="#experience" className="flex cursor-pointer">
                        <FaBriefcase className="text-primary text-xl" />
                        <span className="ml-2 font-bold text-primary">Experience</span>
                    </a>
                </div>

                <section id="skills" className="mb-8 pt-16">
                    <h2 className="text-4xl text-primary font-bold mb-8">Skills</h2>
                    <Skills />
                </section>
                <section id="education" className="mb-8 space-y-2 scrollable-section pt-16">
                    <h2 className="text-4xl font-bold text-primary mb-8">Education</h2>
                    {educationData.map((education, index) => (
                        <Education
                            key={index}
                            startYear={education.startYear}
                            endYear={education.endYear}
                            universityName={education.universityName}
                            degreeLevel={education.degreeLevel}
                            location={education.location}
                            description={education.description}
                        />
                    ))}
                </section>
                <section id="experience" className="mb-8 space-y-2 scrollable-section pt-16">
                    <h2 className="text-4xl font-bold mb-8 text-primary">Experiences</h2>
                    {experienceData.map((experience, index) => (
                        <Experiences
                            key={index}
                            startYear={experience.startYear}
                            endYear={experience.endYear}
                            companyName={experience.companyName}
                            position={experience.position}
                            location={experience.employmentType}
                            details={experience.details}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Resume;
