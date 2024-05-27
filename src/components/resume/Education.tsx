import React from 'react';

interface EducationInfoProps {
    startYear: number;
    endYear: number;
    universityName: string;
    degreeLevel: string;
    location: string;
    description: string;
}

const Education: React.FC<EducationInfoProps> = ({
       startYear,
       endYear,
       universityName,
       degreeLevel,
       location,
       description
   }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex-1">
                    <h2 className="text-3xl text-secondary font-semibold mt-2">{universityName}</h2>
                    <h4 className="text-accent font-bold text-lg">{startYear} – {endYear}</h4>
                    <p className="mt-1">{degreeLevel}</p>
                    <p className="mt-1">{location}</p>
                </div>
                <div className="flex-1 mt-4 sm:mt-0 sm:ml-6">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
