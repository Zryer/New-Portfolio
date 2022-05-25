import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import Navbar from './Components/Navigation/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;