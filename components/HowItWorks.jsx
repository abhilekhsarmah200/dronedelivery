import React from 'react';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Carousel from 'react-multi-carousel';

const HowItWorks = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const HowItWorks = [
    {
      imageUrl: `/images/placeOrder.png`,
      title: 'Place an Order',
      icons: <LooksOneIcon className='text-black' />,
      alt: 'Step 1',
    },
    {
      imageUrl: `/images/orderProcess3.png`,
      title: 'Order Processed',
      icons: <LooksTwoIcon className='text-black' />,
      alt: 'Step 2',
    },
    {
      imageUrl: `/images/droneDelivery.png`,
      title: 'Drone Delivery',
      icons: <Looks3Icon className='text-black' />,
      alt: 'Step 3',
    },
    {
      imageUrl: `/images/recieveOrder.jpg`,
      title: 'Receive Your Order',
      icons: <Looks4Icon className='text-black' />,
      alt: 'Step 4',
    },
  ];
  return (
    <div id='intro' className={'mx-[2rem]'}>
      <h2 className='sm:text-[2.5rem] text-[2rem] text-center font-bold text-[#2463EB] py-[2rem]'>
        How It Works
      </h2>
      <div
        className={
          'hidden sm:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-2'
        }
      >
        {HowItWorks.map((item, index) => (
          <div
            className={
              'relative shadow-lg p-[1.2rem] w-full rounded-lg cursor-pointer'
            }
            key={index}
          >
            <img
              className='w-auto mx-auto lg:h-[15rem] h-[12rem]'
              src={item?.imageUrl}
              alt={item?.alt}
            />
            <p className='text-center text-[#2463EB] font-bold mt-5 text-[1rem] uppercase italic'>
              {item?.title}
            </p>
            <div className='absolute right-0 top-0'>{item?.icons}</div>
          </div>
        ))}
      </div>
      <div className='sm:hidden shadow-xl rounded-lg'>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          interval={3000}
          transitionTime={500}
          containerClass='carousel-container'
          // removeArrowOnDeviceType={['mobile']}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {HowItWorks.map((item, index) => (
            <div
              className={
                'relative shadow-lg p-[1.2rem] w-full rounded-lg cursor-pointer'
              }
              key={index}
            >
              <img
                className='w-auto mx-auto lg:h-[15rem] h-[12rem]'
                src={item?.imageUrl}
                alt={item?.alt}
              />
              <p className='text-center mt-5 text-[1rem] uppercase italic'>
                {item?.title}
              </p>
              <div className='absolute right-0 top-0'>{item?.icons}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HowItWorks;
