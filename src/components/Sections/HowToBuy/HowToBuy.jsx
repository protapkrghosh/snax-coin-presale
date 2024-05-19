import React from 'react';
import Container from '../Container/Container';
import howToImg from '@/assets/howToBuy/Group 1171275272.png';
import claud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import cardImage from '@/assets/howToBuy/logo_short_no_bg_square.png';
import cardImageShadow from '@/assets/howToBuy/Group 1171275247.png';

const HowToBuy = () => {
  return (
    <div className='2xl:mt-[248px]'>
      <div className='relative'>
        <Container>

          {/* ------ title section ----------- */}
          <div>
            <h1 className='text-[#FFF] text-center text-[80px] lg:leading-[88px] lg:tracking-[2.4px]'>How to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>buy?</span></h1>
            <img className='absolute 2xl:w-auto 2xl:top-[-40px] 2xl:left-[610px]' src={claud} alt="image" />
          </div>


          {/* ------------ contain section -------------- */}
          <div className='2xl:mt-[85px]'>

            {/* ----------- card 1 --------- */}
            <div className='2xl:ml-[4px] 2xl:space-y-[-10px]'>
              <img className='2xl:ml-[240px] 2xl:w-auto' src={cardImage} alt="image" />

              <div className='2xl:w-[42%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] rounded-[30px]'>
                  <p className='text-[#FFF] text-[28px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Create <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>Wallet</span></p>
                  <p className='2xl:mt-[15px] text-[#E7D7CB] 2xl:text-[18px] xl:leading-[28.8px] xl:tracking-[0.54px]'>Download metamask from the app store or google play store for free. Desktoo users, download the aocale chrome I</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] 2xl:ml-[410px] 2xl:w-auto' src={cardImageShadow} alt="image" />
              </div>

            </div>

            {/* ----------- card 2 --------- */}
            <div className='2xl:mt-[-170px] 2xl:ml-[860px] 2xl:space-y-[-10px]'>
              <img className='2xl:ml-[240px] 2xl:w-auto' src={cardImage} alt="image" />

              <div className='2xl:w-[100%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] rounded-[30px]'>
                  <p className='text-[#FFF] text-[28px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Get some <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>BNB</span></p>
                  <p className='2xl:mt-[15px] text-[#E7D7CB] 2xl:text-[18px] xl:leading-[28.8px] xl:tracking-[0.54px]'>Have BNB in your wallet to switch to skillSolona. If you don't have any BNB, you con buy directly on metamosk, transfer from another wollet, or buy on another exchange and send it to your wollet.</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] 2xl:ml-[415px] 2xl:w-auto' src={cardImageShadow} alt="image" />
              </div>

            </div>



            {/* ---------------- main images ---------------- */}
            <div className='2xl:mt-[-540px]'>
              <img className='mx-auto 2xl:pl-[15px] 2xl:w-[50%]' src={howToImg} alt="image" />
            </div>





            {/* ----------- card 3 --------- */}
            <div className='2xl:mt-[-860px] 2xl:ml-[4px] 2xl:space-y-[-10px]'>
              <img className='2xl:ml-[240px] 2xl:w-auto' src={cardImage} alt="image" />

              <div className='2xl:w-[43%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] rounded-[30px]'>
                  <p className='text-[#FFF] text-[28px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Go to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>PancakeSwap</span></p>
                  <p className='2xl:mt-[15px] text-[#E7D7CB] 2xl:text-[18px] xl:leading-[28.8px] xl:tracking-[0.54px]'>Connect to PancakeSwap. Go to PancakeSwap in google chrome or on the browser inside wour lictamark ago. Connect your wallet. Paste the sKillSolana BNB token Smart Contract address (0x4eCd50E&8507204D487555c59851755EF9fFAF9) into PoncokeSwoo, select TWEETY. and confirm. When. metamonk promote uou for a wollet sanature, sion.</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] 2xl:ml-[420px] 2xl:w-auto' src={cardImageShadow} alt="image" />
              </div>

            </div>



          </div>

        </Container>
      </div>
    </div>
  );
};

export default HowToBuy;