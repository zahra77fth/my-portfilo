import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

interface Profile {
    name: string;
    title: string;
    bio: string;
    description: string;
    image: string;
    socialLinks: {
        // facebook: string;
        twitter: string;
        linkedin: string;
        github: string;
    };
}

const HomePage: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProfile(data.profile);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img
                            className="w-32 h-32 rounded-full mx-auto"
                            src={`${process.env.PUBLIC_URL}${profile.image}`}
                            alt={profile.name}
                        />
                        <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
                        <p className="text-gray-500">{profile.title}</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            {/*<a href={profile.socialLinks.facebook} className="text-gray-500 hover:text-blue-500">*/}
                            {/*    <FontAwesomeIcon icon={faFacebook} />*/}
                            {/*</a>*/}
                            <a href={profile.socialLinks.twitter} className="text-gray-500 hover:text-blue-500">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href={profile.socialLinks.linkedin} className="text-gray-500 hover:text-blue-500">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={profile.socialLinks.github} className="text-gray-500 hover:text-blue-500">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4 text-center md:text-left">
                    <h1 className="text-4xl font-bold">{profile.bio}</h1>
                    <p className="text-gray-700 mt-4">{profile.description}</p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <a href="/zahra-fattahi/resume" className="bg-primary text-white px-4 py-2 rounded-full">RESUME</a>
                        {/*<a href="/projects" className="border border-gray-500 text-gray-700 px-4 py-2 rounded-full">PROJECTS</a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
