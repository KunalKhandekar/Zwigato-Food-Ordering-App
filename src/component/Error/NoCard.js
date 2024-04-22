import error from './noCard.jpg';
import React from 'react';

const NoCard = () => {
  return (
    <div className='mt-4 text-center xsm:mt-10'>
      <div>
        <img src={error} className='w-[800px]' />
        <h1 className='text-5xl font-bold text-blue-600 ssm:text-3xl ssm:mt-3 xsm:text-2xl'>NOTHING HERE !!!</h1>
      </div>
    </div>
  );
};

export default NoCard;