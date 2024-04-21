import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import chef from '../images/chef.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faCode } from '@fortawesome/free-solid-svg-icons';
import LocationContext from '../utils/LocationContext';

const Home = () => {

    const { updateLocation } = useContext(LocationContext);

    const handleLocationClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          updateLocation(latitude, longitude); // Update context with latitude and longitude
        }, (error) => {
          console.error('Error getting location:', error);
        });
      };

      const handleDemoClick = () => {
          updateLocation(19.202367945356468, 72.83034203119135);
      };


    return (
        <div className='max-w-[1200px] w-full max-h-full m-auto pt-4 px-12'>
            <div className='flex justify-center items-center '>
                <img src={logo} className='w-48' />
            </div>

            <div className='flex gap-10 justify-center items-center py-14 lg:flex-col lg:justify-center'>
                <div className=''>
                    <h2 className='text-5xl capitalize font-semibold mb-2 sm:text-3xl xsm:text-2xl sm:mb-1 xsm:mb-0'>Satisfy <span className='text-[#ed811c]'>your cravings</span>,</h2>

                    <h2 className='text-3xl font-normal sm:text-2xl xsm:text-xl'>Discover a whole new way to find your <span className='text-[#ed811c] font-medium'>favourite food</span>.</h2>

                    <div className='flex gap-4 mt-5 text-lg font-semibold xsm:text-sm xxxsm:text-xs lg:justify-center'>

                        <Link to='/restaurants'>
                        <button className='px-7 py-2 rounded-3xl  shadow bg-[#ed811c] text-white hover:bg-[#de8f46]' onClick={handleLocationClick}><FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#ffffff", }} /> Location</button>
                        </Link>
                        <Link to='/restaurants'>
                        <button className='px-7 py-2 rounded-3xl bg-black text-white shadow-lg hover:bg-slate-700' onClick={handleDemoClick}><FontAwesomeIcon icon={faCode} style={{ color: "#ffffff", }} /> Demo
                        </button>
                        </Link>


                    </div>
                </div>

                <div>
                    <img src={chef} className='w-[700px] rounded-3xl shadow-xl' />
                </div>
            </div>

            <div className='absolute inset-x-0 flex justify-center bottom-0 mb-4 text-center text-xl font-normal xsm:text-sm'>
                <h2>Developed By <Link to='https://github.com/KunalKhandekar' className='text-[#ed811c] font-semibold underline'>@KunalKhandekar</Link></h2>
            </div>
        </div>
    )
};

export default Home;