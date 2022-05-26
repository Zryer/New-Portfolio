import React, { useEffect, useState } from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Navigation from './Components/Navigation/Navigation';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {loading === false ? (
                <>
                    <Navigation />
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </>

            ) : (
                <LoadingScreen />
            )}
        </>

    )
};

export default App;