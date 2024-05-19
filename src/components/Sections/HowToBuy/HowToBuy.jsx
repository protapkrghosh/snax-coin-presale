import React from 'react';
import Container from '../Container/Container';
import cloud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import cardImage from '@/assets/howToBuy/logo_short_no_bg_square.png';

const HowToBuy = () => {
  return (
    <div className='2xl:mt-[248px]'>
      <Container>

        {/* ------ title section ----------- */}
        <div>
          <h1 className='text-[#FFF] text-center text-[80px] lg:leading-[88px] lg:tracking-[2.4px]'>How to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>buy?</span></h1>
        </div>


        {/* ------------ contain section -------------- */}
        <div>

          {/* ----------- card 1 --------- */}
          <div className='space-y-[-20px]'>
            <img src={cardImage} alt="image" />

            <div className='2xl:w-[40%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
              <div className='bg-[#18534f] 2xl:p-[40px] rounded-[30px]'>
                <p className='text-[#FFF] text-[28px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Create Wallet</p>
                <p className='2xl:mt-[15px] text-[#E7D7CB] 2xl:text-[18px]'>Download metamask from the app store or google play store for free. Desktoo users, download the aocale chrome I</p>
              </div>
            </div>

          </div>




        </div>

      </Container>
    </div>
  );
};

export default HowToBuy;