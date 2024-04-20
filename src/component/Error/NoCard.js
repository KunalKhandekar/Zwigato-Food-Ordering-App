import React from 'react';
import error from './noCard.jpg'

const NoCard = () => {
  return (
    <div className='text-center'>
      <div>
        <img src={error} className='w-[800px]' />
        <h1 className='text-5xl font-bold text-blue-600 ssm:text-3xl ssm:mt-3 xsm:text-2xl'>NOTHING HERE !!!</h1>
      </div>

      
    </div>
  )
}

export default NoCard;