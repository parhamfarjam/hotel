import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FeatureRooms from '../components/FeatureRooms';
import Hero from '../components/Hero';
import Servises from '../components/Servises';

const Home = () => {
    return ( 
    <>
    <Hero>
        <Banner title='luxuries rooms' subTitle='deluxe rooms starting from 254$'>
            <Link to='rooms' className='btn-primary'>
                our rooms
            </Link>
        </Banner>
    </Hero>
    <Servises/>
    <FeatureRooms/> 
    </>

     );
}
 
export default Home;