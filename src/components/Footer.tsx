import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white p-4 bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-light" />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-light" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
