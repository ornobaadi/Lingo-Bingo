/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Banner from '../components/Banner';
import HomeAbout from '../components/HomeAbout';
import SuccessNumbers from '../components/SuccessNumbers';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="container mx-auto bg-gray-50">
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <SuccessNumbers></SuccessNumbers>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;