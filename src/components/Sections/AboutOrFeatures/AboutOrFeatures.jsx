import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/about/Group 1171275232 (1).png';

const AboutOrFeatures = () => {
  return (
    <div className='2xl:pt-[456px] bg-[#194c47]'>
      {/* container section  */}
      <Container>

        {/* --------------- About section --------------- */}
        <div>
          {/* --------------- about image section ------------- */}
          <div className='w-[50%]'>
            <img className='2xl:w-auto' src={aboutImg} alt="image" />
          </div>
          {/* --------------- about contain info section ------------- */}
          <div className='w-[50%]'>
            <div>
              <div>
                <p className='xl:text-[80px] lg:leading-[80px] lg:tracking-[2.4px]'><span className='text-[#FFF]'>About</span> snax</p>
              </div>
            </div>
          </div>

        </div>


      </Container>
    </div>
  );
};

export default AboutOrFeatures;