import React from 'react';
import Carousel from 'react-multi-carousel';

const Testimonials = () => {
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
  return (
    <div
      id='testimonials'
      className={'sm:px-[2rem] px-[1rem] py-[2rem] bg-[#2463EB] text-white'}
    >
      <h2 className='sm:text-[2.5rem] text-[2rem] text-center font-bold'>
        Testimonials
      </h2>
      <div className='mt-5'>
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
          removeArrowOnDeviceType={['mobile']}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          <div className={'text-center font-bold sm:text-[1rem] text-[0.7rem]'}>
            <p>
              {'Amazing service! The drone delivered my package in no time.'}
            </p>
            <span className='sm:text-[1.5rem] text-[1rem] mt-2'>
              - Happy Customer
            </span>
          </div>
          <div className={'text-center font-bold sm:text-[1rem] text-[0.7rem]'}>
            <p>{"Eco-friendly and fast. Couldn't ask for more!"}</p>
            <span className='sm:text-[1.5rem] text-[1rem] mt-2'>
              - Satisfied User
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
