import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/about/Group 1171275232 (1).png';
import aboutImgleftShadow from '@/assets/about/Group 1171275238.png';
import aboutImgRightShadow from '@/assets/about/Dinosaur-bone-vector-art-illustration-Graphics-37857416-2-580x387.png';
// ourfeatures
import featuresTitleShadow from '@/assets/ourFeatures/Group 1171275247.png';
import featuresMainCenterImg from '@/assets/ourFeatures/Group 1171275245.png';
import featuresCardImg from '@/assets/ourFeatures/Group (2).png';

import { Button } from '@/components/ui/button';

const AboutOrFeatures = () => {
  return (
    <div className='2xl:pt-[420px] xl:pt-[290px] lg:pt-[240px] md:pt-[120px] pt-[60px] bg-[#194c47] overflow-hidden' id='about'>
      {/* container section  */}
      <div className='relative'>

        <Container>

          {/* --------------- About section --------------- */}
          <div className='lg:flex justify-center items-center xl:gap-[70px] lg:gap-[30px]'>
            {/* --------------- about image section ------------- */}
            <div className='2xl:w-[48%] xl:w-[45%] lg:w-[45%]'>

              {/* about image section shadow */}
              <img className='absolute 2xl:w-[12%] xl:w-[20%] lg:w-auto md:w-[20%] w-[15%] 2xl:top-[-100px] xl:top-[-100px] lg:top-[-100px] md:top-[-100px] top-[-60px] 2xl:left-[100px] xl:left-[100px] lg:left-[80px] md:left-[40px] left-[40px]' src={aboutImgleftShadow} alt="image" />

              <img className='lg:w-auto md:w-[60%] mx-auto' src={aboutImg} alt="image" />
            </div>




            {/* --------------- about contain info section ------------- */}
            <div className='2xl:w-[52%] xl:w-[55%] lg:w-[55%] lg:mt-0 md:mt-[60px] mt-[30px]'>

              {/* about contain section shadow */}
              <img className='absolute 2xl:w-[30%] xl:w-[38%] lg:w-[40%] md:w-[40%] w-[40%] 2xl:top-[-240px] xl:top-[-220px] lg:top-[-180px] md:top-[-180px] top-[-80px] 2xl:right-[570px] xl:right-[360px] lg:right-[270px] md:right-[20px] right-[5px]' src={aboutImgRightShadow} alt="image" />

              <div className='border-[3px] border-dashed rounded-[30px] xl:pl-[50px] lg:pl-[40px] md:pl-[30px] 2xl:pr-[0px] xl:pr-[11px] lg:pr-[11px] md:p-[0px] p-[10px]'>

                <div>
                  <p className='xl:mt-[60px] lg:mt-[40px] md:mt-[25px] mt-[20px] text-[#FFF] xl:text-[80px] lg:text-[65px] md:text-[35px] text-[25px] lg:leading-[80px] lg:tracking-[2.4px] lg:text-start text-center'>About <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>snax</span></p>

                  <p className='lg:mt-[30px] md:mt-[20px] mt-[15px] 2xl:w-[92%] xl:w-[90%] text-[#E5DADA] 2xl:text-[20px] xl:text-[18px] lg:text-[19px] md:text-[14px] text-[12px] xl:leading-[36px] lg:leading-[26px] lg:tracking-[0.8px]'>In the enchanting narrative of Snax, the crypto-savvy pup, lies the genesis of Snax Coin, a beacon of innovation in the blockchain realm. Snax Coin's mission is to democratize access to financial opportunities worldwide, fostering a community-driven ecosystem where individuals can transact securely and transparently.</p>

                  <p className='lg:mt-[30px] md:mt-[20px] mt-[15px] 2xl:w-[94%] xl:w-[97%] text-[#E5DADA] 2xl:text-[20px] lg:text-[19px] md:text-[14px] text-[12px] xl:leading-[36px] lg:leading-[26px] lg:tracking-[0.8px]'>Visionary and inclusive, Snax Coin aims to reshape the future of finance, empowering users to navigate the digital landscape with confidence. Backed by a dynamic team of cryptocurrency veterans boasting expertise in blockchain technology, finance, and community development, Snax Coin stands poised to revolutionize the crypto space with integrity and purpose.</p>

                  <Button className="lg:mt-[50px] md:mt-[40px] mt-[30px] lg:mb-[60px] md:mb-[40px] mb-[30px] lg:text-[20px] lg:px-[50px] lg:py-[16px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] lg:leading-[30px] lg:tracking-[0.8px] text-[#000] rounded-[10px] duration-300 w-full md:w-fit">More about us</Button>

                </div>
              </div>
            </div>

          </div>








          {/* ------------------- our features section --------------- */}
          <div className='2xl:pt-[170px] xl:pt-[160px] lg:pt-[100px] md:pt-[80px]'>
            <div>
              <h1 className='text-white 2xl:text-[80px] xl:text-[75px] lg:text-[40px] md:text-[35px] text-center lg:leading-[80px] lg:tracking-2.4px'>our <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>features </span></h1>
            </div>

            <div>

              {/* -------- card 1 ---------- */}
              <div className='2xl:ml-[495px] xl:ml-[380px] lg:ml-[290px] 2xl:w-[96%] xl:w-[85%] lg:w-[85%] 2xl:mt-[70px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px]'>
                <p className='text-[#FFF] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] md:text-[18px] lg:leading-[33px] lg:tracking-[0.84px]'>best tax</p>

                <div className='2xl:mt-[30px] xl:mt-[30px] lg:mt-[20px] md:mt-[10px] 2xl:w-[35%] xl:w-[42%] lg:w-[42%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>

                  <div className='bg-[#18534f] 2xl:px-[40px] xl:px-[30px] lg:px-[20px] md:px-[40px] 2xl:py-[30px] xl:py-[25px] lg:py-[18px] md:py-[30px] rounded-[30px] lg:text-start text-center'>
                    <p className='text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] xl:leading-[28px] xl:tracking-[0.54px]'>There is only 5% tax both for buy and sell and will be spent for marketing purposes only.</p>
                  </div>

                </div>
                <img className='2xl:mt-[-210px] xl:mt-[-180px] lg:mt-[-120px] md:mt-[-170px] 2xl:ml-[250px] xl:ml-[200px] lg:ml-[175px] md:ml-[485px] 2xl:w-auto xl:w-[22%] lg:w-[19%] md:w-[30%]' src={featuresCardImg} alt="image" />
              </div>

              {/* --------- card 2 --------- */}
              <div className='2xl:ml-[-18px] xl:ml-[-18px] lg:ml-[-15px] 2xl:w-[96%] xl:w-[96%] lg:w-[96%] 2xl:mt-[120px] xl:mt-[90px] lg:mt-[40px] md:mt-[70px]'>
                <p className='text-[#FFF] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] lg:leading-[33px] lg:tracking-[0.84px]'>no ownership</p>

                <div className='2xl:mt-[30px] xl:mt-[30px] lg:mt-[20px] 2xl:w-[35%] xl:w-[35%] lg:w-[35%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>

                  <div className='bg-[#18534f] 2xl:px-[40px] xl:px-[30px] lg:px-[20px] 2xl:py-[30px] xl:py-[25px] lg:py-[18px] rounded-[30px]'>
                    <p className='text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] xl:leading-[28px] xl:tracking-[0.54px]'>Our smart contract is renounced which means technically no one owns the contract and cannot do execute write functions on it.</p>
                  </div>

                </div>
                <img className='2xl:mt-[-210px] xl:mt-[-200px] lg:mt-[-140px] 2xl:ml-[250px] xl:ml-[150px] lg:ml-[140px] 2xl:w-auto xl:w-[22%] lg:w-[19%]' src={featuresCardImg} alt="image" />
              </div>


              {/* ----------- center image ----------- */}
              <div className='2xl:mt-[-210px] xl:mt-[-205px] lg:mt-[-125px]'>
                <img className='lg:mx-auto 2xl:w-auto xl:w-[18%] lg:w-[15%]' src={featuresMainCenterImg} alt="image" />
              </div>

              {/* -------- card 3 --------- */}
              <div className='2xl:ml-[1005px] xl:ml-[815px] lg:ml-[615px] 2xl:w-[95%] xl:w-[88%] lg:w-[88%] 2xl:mt-[-225px] xl:mt-[-210px] lg:mt-[-153px]'>
                <p className='text-[#FFF] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] lg:leading-[33px] lg:tracking-[0.84px]'>no mint</p>

                <div className='2xl:mt-[30px] xl:mt-[30px] lg:mt-[20px] 2xl:w-[35%] xl:w-[34%] lg:w-[34%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>

                  <div className='bg-[#18534f] 2xl:px-[40px] xl:px-[30px] lg:px-[20px] 2xl:py-[30px] xl:py-[25px] lg:py-[18px] rounded-[30px]'>
                    <p className='text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] xl:leading-[28px] xl:tracking-[0.54px]'>Our total supply is fixed and cannot be changed and minted more since there is no any mint function in our contract.</p>
                  </div>

                </div>
                <img className='2xl:mt-[-210px] xl:mt-[-210px] lg:mt-[-125px] 2xl:ml-[240px] xl:ml-[95px] lg:ml-[120px] 2xl:w-auto xl:w-auto lg:w-[19%]' src={featuresCardImg} alt="image" />
              </div>

              {/* ---------- card 4 ----------*/}
              <div className='2xl:ml-[495px] xl:ml-[395px] lg:ml-[300px] 2xl:w-[96%] xl:w-[96%] lg:w-[96%] 2xl:mt-[50px] xl:mt-[50px] lg:mt-[50px]'>
                <p className='text-[#FFF] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] lg:leading-[33px] lg:tracking-[0.84px]'>Secure</p>

                <div className='2xl:mt-[30px] xl:mt-[30px] lg:mt-[20px] 2xl:w-[35%] xl:w-[35%] lg:w-[35%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>

                  <div className='bg-[#18534f] 2xl:px-[40px] xl:px-[30px] lg:px-[20px] 2xl:py-[30px] xl:py-[25px] lg:py-[18px] rounded-[30px]'>
                    <p className='text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] xl:leading-[28px] xl:tracking-[0.54px]'>You are completely SAFU. We do have our smart contract audited by Coinsult!</p>
                  </div>

                </div>
                <img className='2xl:mt-[-210px] xl:mt-[-210px] lg:mt-[-135px] 2xl:ml-[250px] xl:ml-[140px] lg:ml-[138px] 2xl:w-auto xl:w-auto lg:w-[19%]' src={featuresCardImg} alt="image" />
              </div>


            </div>

          </div>







        </Container>
      </div>

    </div>
  );
};

export default AboutOrFeatures