import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/about/Group 1171275232 (1).png';
import aboutImgleftShadow from '@/assets/about/Group 1171275238.png';
import aboutImgRightShadow from '@/assets/about/Dinosaur-bone-vector-art-illustration-Graphics-37857416-2-580x387.png';
import { Button } from '@/components/ui/button';

const AboutOrFeatures = () => {
  return (
    <div className='2xl:pt-[420px] bg-[#194c47]'>
      {/* container section  */}
      <div className='relative'>

        <Container>

          {/* --------------- About section --------------- */}
          <div className='flex justify-center items-center lg:gap-[70px]'>
            {/* --------------- about image section ------------- */}
            <div className='w-[50%]'>

              {/* about image section shadow */}
              <img className='absolute 2xl:w-[12%] lg:w-auto 2xl:top-[-100px] 2xl:left-[100px]' src={aboutImgleftShadow} alt="image" />

              <img className='2xl:w-auto' src={aboutImg} alt="image" />
            </div>
            {/* --------------- about contain info section ------------- */}
            <div className='w-[50%]'>

              {/* about contain section shadow */}
              <img className='absolute 2xl:w-[30%] lg:w-auto 2xl:top-[-240px] 2xl:right-[540px]' src={aboutImgRightShadow} alt="image" />

              <div className='border-[3px] border-dashed lg:rounded-[30px] lg:pl-[50px]'>
                <div>
                  <p className='xl:mt-[60px] xl:text-[80px] lg:leading-[80px] lg:tracking-[2.4px]'><span className='text-[#FFF]'>About</span> snax</p>

                  <p className='lg:mt-[30px] xl:w-[85%] text-[#E5DADA] lg:text-[20px] lg:leading-[36px] lg:tracking-[0.8px]'>In the enchanting narrative of Snax, the crypto-savvy pup, lies the genesis of Snax Coin, a beacon of innovation in the blockchain realm. Snax Coin's mission is to democratize access to financial opportunities worldwide, fostering a community-driven ecosystem where individuals can transact securely and transparently.</p>

                  <p className='lg:mt-[30px] xl:w-[97%] text-[#E5DADA] lg:text-[20px] lg:leading-[36px] lg:tracking-[0.8px]'>Visionary and inclusive, Snax Coin aims to reshape the future of finance, empowering users to navigate the digital landscape with confidence. Backed by a dynamic team of cryptocurrency veterans boasting expertise in blockchain technology, finance, and community development, Snax Coin stands poised to revolutionize the crypto space with integrity and purpose.</p>

                  <Button className="lg:mt-[50px] lg:mb-[60px] lg:text-[20px] lg:px-[50px] lg:py-[16px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] lg:leading-[30px] lg:tracking-[0.8px] text-[#000] rounded-[10px] duration-300 w-full md:w-fit">More about us</Button>

                </div>
              </div>
            </div>

          </div>


        </Container>
      </div>

    </div>
  );
};

export default AboutOrFeatures;