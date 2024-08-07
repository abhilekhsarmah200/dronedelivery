import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='fixed w-full h-full'>
        <video className='w-full h-full object-cover' autoPlay loop muted>
          <source
            className=''
            src='https://res.cloudinary.com/dwkajs0ca/video/upload/v1723044405/Abhilekhz/gyjtmave2rgxykqbr1w8.mp4'
            type='video/mp4'
          />
        </video>
        <div className='absolute top-1/2 left-1/2 md:w-full w-[90%] transform -translate-x-1/2 -translate-y-1/2 text-center font-extrabold md:text-[2.5rem] text-[1.8rem]'>
          Welcome to{' '}
          <a
            className='text-[#2463EB]'
            style={{ textShadow: '0px 2px 4px #2463EB' }}
          >
            Drone Food Delivery Service
          </a>{' '}
          <p className='md:text-[1.5rem] text-white text-[1rem]'>
            Fast, eco-friendly , and reliable delivery by drones.
          </p>
        </div>
        <div className='absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <a href='#intro'>
            <KeyboardArrowDownIcon className='md:text-[5rem] text-[2rem]' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
