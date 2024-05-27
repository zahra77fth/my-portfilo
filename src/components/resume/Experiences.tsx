import React from 'react';

interface ExperienceDetail {
    title: string;
    description: string;
}

interface ExperienceProps {
    startYear: number;
    endYear: number;
    companyName: string;
    position: string;
    location: string;
    details: ExperienceDetail[];
}

const Experience: React.FC<ExperienceProps> = ({
       startYear,
       endYear,
       companyName,
       position,
       location,
       details
   }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
            <div className="flex flex-col justify-between">
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-3xl text-secondary font-semibold mt-2">{companyName}</h2>
                        <h4 className="text-accent font-bold text-lg">{startYear} – {endYear}</h4>
                    </div>
                    <div>
                        <p className="mt-1">{position}</p>
                        <p className="mt-1">{location}</p>
                    </div>
                </div>
                <div className="flex-1 mt-4 sm:mt-0 sm:ml-6">
                    <ul className="list-disc list-inside">
                        {details.map((detail, index) => (
                            <li key={index} className="mb-2">
                                <strong>{detail.title}: </strong>{detail.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
