import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact me/Contact';
import Projects from '../Projects/Projects/Projects';
import SocialLink from '../SocialLink/SocialLink';


const Home = () => {
    return (

        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
            <SocialLink></SocialLink>
        </div>
    );
};

export default Home;