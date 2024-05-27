import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Resume from './components/resume/Resume';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="h-screen overflow-y-auto">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resume" element={<Resume />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    {/*<Route path="/projects" element={<Projects />} />*/}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
