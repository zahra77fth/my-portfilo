import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Resume from './components/resume/Resume';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="h-screen flex flex-col">
                <Header />
                <main className="flex-grow overflow-y-auto">
                    <Routes>
                        <Route path="/zahra-fattahi/" element={<HomePage />} />
                        <Route path="/zahra-fattahi/resume" element={<Resume />} />
                        {/*<Route path="/contact" element={<Contact />} />*/}
                        {/*<Route path="/projects" element={<Projects />} />*/}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
