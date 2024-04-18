import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AboutShimmer from './AboutShimmer';

const About = () => {

  const [userInfo, setUserInfo] = useState({})

  useEffect(()=> {
    fetchUser();
  }, [])

  const fetchUser = async () => {
    const data = await fetch('https://api.github.com/users/KunalKhandekar');
    const json = await data.json();
    setUserInfo(json);
  };

  return (userInfo?.avatar_url == null) ?
  
  <AboutShimmer/>

  :

  (
    <div className='max-w-[900px] border border-black m-auto my-5 rounded-xl p-5 flex gap-6 items-center bg-[#110606] text-white slg:mx-4 md:flex-col md:justify-center'>
      <div className="w-[650px] md:w-[350px] sm:w-[260px]">
        <img className='rounded-[50%] border-2 border-white' src={userInfo?.avatar_url} />
      </div>
      <div className="about_info">
        <div className='mb-7'>
        <h1 className='text-3xl uppercase font-semibold'>{userInfo?.name}</h1>
        <h3><Link to={userInfo?.html_url} className='text-blue-500'>{userInfo?.login}   <FontAwesomeIcon icon={faGithub} /></Link></h3>

        <h2 className='mt-6'><FontAwesomeIcon icon={faLocationDot} className='mr-1' style={{color: "#ffffff",}} /> {userInfo?.location}</h2>
        </div>

        
        <p>{userInfo?.bio}</p>
      </div>
    </div>
  ) 
}

export default About
