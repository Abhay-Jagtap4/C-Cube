import React from 'react';
import NavigationBar from '../../Components/Navbar/navbar';
import Home from '../Home/home';
import About from '../About/about';
import Donate from '../Donate/donate';
import Contact from '../Contact/contact';
import Events from '../Events/events';
import { Route, Routes } from 'react-router-dom';

/**
 * Layout is a function that returns a div with a NavigationBar and children.
 * @returns The children of the Layout component.
 */
const Layout = ({children}) => {
    
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
}

const App = () => {
    return (
            /* Rendering the Home component when the path is "/", the About component when the path is
            "about", the Donate component when the path is "donate", the Contact component when the
            path is "contact", and the Events component when the path is "events". */
            <Layout>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="donate" element={<Donate />} />
                <Route path="contact" element={<Contact />} />
                <Route path="events" element={<Events />} />
                </Routes>
            </Layout>  
    );
}

export default App;
