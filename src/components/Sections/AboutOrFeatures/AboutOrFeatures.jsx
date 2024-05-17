import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/about/Group 1171275232 (1).png';
import aboutImgleftShadow from '@/assets/about/Group 1171275238.png';
import aboutImgRightShadow from '@/assets/about/Dinosaur-bone-vector-art-illustration-Graphics-37857416-2-580x387.png';
import { Button } from '@/components/ui/button';

const AboutOrFeatures = () => {
  return (
    <div className='2xl:pt-[420px] xl:pt-[290px] lg:pt-[240px] bg-[#194c47]'>
      {/* container section  */}
      <div className='relative'>

        <Container>

          {/* --------------- About section --------------- */}
          <div className='flex justify-center items-center xl:gap-[70px] lg:gap-[30px]'>
            {/* --------------- about image section ------------- */}
            <div className='2xl:w-[48%] xl:w-[45%] lg:w-[45%]'>

              {/* about image section shadow */}
              <img className='absolute 2xl:w-[12%] xl:w-[20%] lg:w-auto 2xl:top-[-100px] xl:top-[-100px] lg:top-[-100px] 2xl:left-[100px] xl:left-[100px] lg:left-[80px]' src={aboutImgleftShadow} alt="image" />

              <img className='2xl:w-auto' src={aboutImg} alt="image" />
            </div>
            {/* --------------- about contain info section ------------- */}
            <div className='2xl:w-[52%] xl:w-[55%] lg:w-[55%]'>

              {/* about contain section shadow */}
              <img className='absolute 2xl:w-[30%] xl:w-[38%] lg:w-[40%] 2xl:top-[-240px] xl:top-[-220px] lg:top-[-180px] 2xl:right-[570px] xl:right-[360px] lg:right-[270px]' src={aboutImgRightShadow} alt="image" />

              <div className='border-[3px] border-dashed lg:rounded-[30px] xl:pl-[50px] lg:pl-[40px]'>
                <div>
                  <p className='xl:mt-[60px] lg:mt-[40px] text-[#FFF] xl:text-[80px] lg:text-[65px] lg:leading-[80px] lg:tracking-[2.4px]'>About <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>snax</span></p>

                  <p className='lg:mt-[30px] 2xl:w-[92%] xl:w-[97%] text-[#E5DADA] 2xl:text-[20px] lg:text-[19px] lg:leading-[36px] lg:tracking-[0.8px]'>In the enchanting narrative of Snax, the crypto-savvy pup, lies the genesis of Snax Coin, a beacon of innovation in the blockchain realm. Snax Coin's mission is to democratize access to financial opportunities worldwide, fostering a community-driven ecosystem where individuals can transact securely and transparently.</p>

                  <p className='lg:mt-[30px] 2xl:w-[94%] xl:w-[97%] text-[#E5DADA] 2xl:text-[20px] lg:text-[19px] lg:leading-[36px] lg:tracking-[0.8px]'>Visionary and inclusive, Snax Coin aims to reshape the future of finance, empowering users to navigate the digital landscape with confidence. Backed by a dynamic team of cryptocurrency veterans boasting expertise in blockchain technology, finance, and community development, Snax Coin stands poised to revolutionize the crypto space with integrity and purpose.</p>

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