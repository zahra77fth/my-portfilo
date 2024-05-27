import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-primary p-4 fixed w-full top-0 z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-lightAccent rounded-full mr-2"></div>
                    <h1 className="text-2xl font-bold">Zahra Fattahi</h1>
                    <span className="ml-2 text-gray-300">/ FRONTEND DEVELOPER</span>
                </div>
                <nav className="space-x-4">
                    <Link to="/zahra-fattahi" className="text-gray-300 hover:text-accent">ABOUT ME</Link>
                    <Link to="/resume" className="text-gray-300 hover:text-accent">RESUME</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
