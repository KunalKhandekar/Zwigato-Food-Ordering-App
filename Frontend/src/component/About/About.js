import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import AboutShimmer from './AboutShimmer';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const About = () => {

  const [userInfo, setUserInfo] = useState({}); // Initializing state for userInfo using useState hook

  useEffect(() => { // Using useEffect hook to fetch user info
    fetchUser();
  }, []);

  const fetchUser = async () => { // Asynchronous function to fetch user info
    const data = await fetch('https://api.github.com/users/KunalKhandekar'); // Fetching user info from GitHub API
    const json = await data.json(); // Parsing response data to JSON format
    setUserInfo(json); // Setting user info in state
  };

  return (userInfo?.avatar_url == null) ? // Conditional rendering based on user info presence

    <AboutShimmer /> // Displaying shimmer effect when user info is being fetched

    :

    (
      <div className='max-w-[1000px] m-auto my-5 rounded-xl pt-5 flex gap-6 items-center flex-col bg-[#ffffff] text-white slg:mx-4'> {/* Container for About Me and About Project sections */}
        <h1 className='text-2xl text-black font-semibold'>About Me</h1> {/* Heading for About Me section */}
        <div className='max-w-[800px] border border-black m-auto mb-1 rounded-xl p-5 flex gap-6 items-center bg-[#110606] text-white slg:mx-4 md:flex-col md:justify-center'> {/* Container for my Github info */}
          <div className="w-[650px] md:w-[350px] sm:w-[260px]"> {/* Container for my Github avatar */}
            <img className='rounded-[50%] border-2 border-white' src={userInfo?.avatar_url} /> {/* Displaying my Github avatar */}
          </div>
          <div className="about_info"> {/* Container for my Github information */}
            <div className='mb-7'> {/* Container for user name and GitHub profile link */}
              <h1 className='text-3xl uppercase font-semibold sm:text-2xl'>{userInfo?.name}</h1> {/* Displaying my name */}
              <h3><Link to={userInfo?.html_url} className='text-blue-500'>{userInfo?.login}   <FontAwesomeIcon icon={faGithub} /></Link></h3> {/* Displaying GitHub profile link */}

              <h2 className='mt-6'><FontAwesomeIcon icon={faLocationDot} className='mr-1' style={{ color: "#ffffff", }} /> {userInfo?.location}</h2> {/* Displaying my location */}
            </div>
            <p className='text-justify'>{userInfo?.bio}</p> {/* Displaying my Github bio */}
          </div>
        </div>

        <h1 className='text-2xl text-black font-semibold'>About Project</h1> {/* Heading for About Project section */}
        <div className='max-w-[800px] border border-black m-auto flex justify-center items-center flex-col mb-5 rounded-xl p-5 bg-black text-white slg:mx-4'> {/* Container for project information */}
          <div className="mb-3"> {/* Container for project logo */}
            <img className='w-[230px] md:w-[200px] sm:w-[160px]' src={logo} /> {/* Displaying project logo */}
          </div>
          <div className="about_info"> {/* Container for project details */}
            <div className='flex flex-col gap-3 text-justify'><p>Introducing Swigato: My First React Project, a food-ordering website powered by the trusted Swiggy API. We've combined technology and tasty meals to give you an easy way to discover, order, and enjoy food from lots of different places.</p>

              <p>Swigato's website is easy to use and looks great. You can find your favorite restaurants, try new ones, and customize your order however you like.</p>

              <p>Whether you're in the mood for classic dishes or something exotic, Swigato has something for everyone. Come join us for a delicious journey!</p></div> {/* Displaying project description */}
          </div>
        </div>
      </div>
    )
}

export default About; // Exporting About Component
