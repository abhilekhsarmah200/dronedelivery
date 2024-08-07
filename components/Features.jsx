import React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShieldIcon from '@mui/icons-material/Shield';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Features = () => {
  return (
    <div
      id='features'
      className={'sm:px-[2rem] px-[1rem] mt-[2rem] py-[2rem] text-black'}
    >
      <h2 className='sm:text-[2.5rem] text-[#2463EB] text-[2rem] text-center font-bold'>
        Features
      </h2>
      <div className='flex md:flex-row flex-col justify-center items-center gap-2 mt-[1rem] md:mt-0'>
        <div className='w-full'>
          <img src='/images/dronedeliveryBackground.png' alt='' />
        </div>
        <div className='w-full'>
          <ul>
            <li className='flex flex-col gap-2 font-bold sm:text-[1.5rem] text-[1.2rem] mt-3'>
              <div>
                <SpeedIcon className='text-[#2463EB]' />
                &nbsp; Fast Delivery:{' '}
              </div>
              <p className='font-normal sm:text-[1.2rem] text-[0.8rem]'>
                <FiberManualRecordIcon className='sm:text-[0.6rem] text-[0.5rem] mr-4' />
                Deliveries made in minutes.
              </p>
            </li>
            <li className='flex flex-col gap-2 font-bold sm:text-[1.5rem] text-[1.2rem] mt-3'>
              <div>
                <EnergySavingsLeafIcon className='text-[#2463EB]' />
                &nbsp; Eco-Friendly:{' '}
              </div>
              <p className='font-normal sm:text-[1.2rem] text-[0.8rem]'>
                <FiberManualRecordIcon className='sm:text-[0.6rem] text-[0.5rem] mr-4' />
                Reduced carbon footprint.
              </p>
            </li>
            <li className='flex flex-col gap-2 font-bold sm:text-[1.5rem] text-[1.2rem] mt-3'>
              <div>
                <ShieldIcon className='text-[#2463EB]' />
                &nbsp; Safe & Secure:{' '}
              </div>
              <p className='font-normal sm:text-[1.2rem] text-[0.8rem]'>
                <FiberManualRecordIcon className='sm:text-[0.6rem] text-[0.5rem] mr-4' />
                Contactless delivery ensuring safety.
              </p>
            </li>
            <li className='flex flex-col gap-2 font-bold sm:text-[1.5rem] text-[1.2rem] mt-3'>
              <div>
                <ApartmentIcon className='text-[#2463EB]' />
                &nbsp; Coverage Area:{' '}
              </div>
              <p className='font-normal sm:text-[1.2rem] text-[0.8rem]'>
                <FiberManualRecordIcon className='sm:text-[0.6rem] text-[0.5rem] mr-4' />
                Maps or descriptions of delivery zones.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
