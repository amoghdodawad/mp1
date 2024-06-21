import React from 'react';
import './Home.css'
import homeImageLeft from './home-delivery-image.jpg';
import { useSelector } from 'react-redux';

function Home() {
    const { fullName } = useSelector(state => state.user);
    return (
        <div className='home-container'>
            <div className='home-card'>
                <div className="home-card-left">
                    <img src={homeImageLeft} alt="" srcset="" className='home-image-left'/>
                </div>
                <div className="home-card-right">
                    <div className="home-text-right">
                        Hello { fullName ? fullName : ''}, at OUR_NGO, we believe that it is essential for organisations and people to indulge in responsible consumption and production. Ensuring that people get seamless access to their goods with least carbon footprint. This led us to launching a volunteer based goods delivery system to fulfil our mission of responsible and sustainable consumption and production.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;