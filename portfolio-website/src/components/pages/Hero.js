import React from 'react';

// import woman image
import MeImg from '../../assets/img/banner-photo-me.png';

const Hero = () => {

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-violet-500 text-md mb-[22px]'>
              Hey, I'm Samara! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              So, what about meet a litle bit about my work and about me...
            </p>
            <a href='/contact'>
              <button className='btn btn-md bg-violet-900 hover:bg-violet-800 md:btn-lg transition-all'>
                Work with me
              </button>
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={MeImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
