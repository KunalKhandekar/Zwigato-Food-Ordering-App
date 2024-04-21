import React from 'react'
import {useRouteError} from 'react-router-dom';
import ApiError from './ApiError.png'

const RouteError = () => {
  const err = useRouteError();
  console.log(err)

  return (
    <div className='max-w-[1500px] m-auto mt-16 flex justify-center items-center flex-col'>
        <img src={ApiError} className='w-[560px]'/>
        <div className='mt-10 text-center'>
        <h1 className='text-5xl font-semibold uppercase text-red-600 sm:text-3xl xxsm:text-2xl'>Some Error In APIs</h1>
        <h3 className='text-lg font-semibold uppercase text-yellow-500 sm:text-sm xxsm:text-xs'>Try Again later</h3>
        <Link to="/" className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg xsm:text-sm">Home</Link>
        </div>
    </div>
  )
}

export default RouteError
