import React from 'react';
import Container from '../Container/Container';
import howToImg from '@/assets/howToBuy/Group 1171275272.png';
import claud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import cardImage from '@/assets/howToBuy/logo_short_no_bg_square.png';
import cardImageShadow from '@/assets/howToBuy/Group 1171275247.png';

const HowToBuy = () => {
  return (
    <div className='2xl:mt-[248px] xl:mt-[220px] lg:mt-[160px]'>
      <div className='relative'>
        <Container>

          {/* ------ title section ----------- */}
          <div>
            <h1 className='text-[#FFF] text-center xl:text-[80px] lg:text-[60px] lg:leading-[88px] lg:tracking-[2.4px]'>How to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>buy?</span></h1>
            <img className='absolute 2xl:w-auto xl:w-auto lg:w-[25%] 2xl:top-[-40px] xl:top-[-40px] lg:top-[-35px] 2xl:left-[610px] xl:left-[340px] lg:left-[205px]' src={claud} alt="image" />
          </div>


          {/* ------------ contain section -------------- */}
          <div className='2xl:mt-[85px] xl:mt-[85px] lg:mt-[80px]'>

            {/* ----------- card 1 --------- */}
            <div className='2xl:ml-[4px] xl:ml-[4px] lg:ml-[4px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]'>
              <img className='2xl:ml-[240px] xl:ml-[240px] lg:ml-[240px] 2xl:w-auto xl:w-[10%] lg:w-[10%]' src={cardImage} alt="image" />

              <div className='2xl:w-[44%] xl:w-[41%] lg:w-[41%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Create <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>Wallet</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Download metamask from the app store or google play store for free. Desktoo users, download the aocale chrome I</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-185px] lg:mt-[-185px] 2xl:ml-[410px] xl:ml-[290px] lg:ml-[290px] 2xl:w-auto xl:w-[16%] lg:w-[16%]' src={cardImageShadow} alt="image" />
              </div>

            </div>

            {/* ----------- card 2 --------- */}
            <div className='2xl:mt-[-170px] xl:mt-[-110px] lg:mt-[-110px] 2xl:ml-[860px] xl:ml-[660px] lg:ml-[660px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]'>
              <img className='2xl:ml-[240px] xl:ml-[240px] lg:ml-[240px] 2xl:w-auto xl:w-[24%] lg:w-[24%]' src={cardImage} alt="image" />

              <div className='2xl:w-[100%] xl:w-[99%] lg:w-[99%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Get some <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>BNB</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Have BNB in your wallet to switch to skillSolona. If you don't have any BNB, you con buy directly on metamosk, transfer from another wollet, or buy on another exchange and send it to your wollet.</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-220px] lg:mt-[-220px] 2xl:ml-[415px] xl:ml-[255px] lg:ml-[255px] 2xl:w-auto xl:w-auto lg:w-auto' src={cardImageShadow} alt="image" />
              </div>

            </div>



            {/* ---------------- main images ---------------- */}
            <div className='2xl:mt-[-540px] xl:mt-[-440px] lg:mt-[-440px]'>
              <img className='mx-auto 2xl:pl-[15px] 2xl:w-[50%] xl:w-[50%] lg:w-[50%]' src={howToImg} alt="image" />
            </div>





            {/* ----------- card 3 --------- */}
            <div className='2xl:mt-[-830px] xl:mt-[-630px] lg:mt-[-630px] 2xl:ml-[4px] xl:ml-[4px] lg:ml-[4px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]'>
              <img className='2xl:ml-[240px] xl:ml-[240px] lg:ml-[240px] 2xl:w-auto xl:w-[10%] lg:w-[10%]' src={cardImage} alt="image" />

              <div className='2xl:w-[44%] xl:w-[41%] lg:w-[41%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Go to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>PancakeSwap</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Connect to PancakeSwap. Go to PancakeSwap in google chrome or on the browser inside wour lictamark ago. Connect your wallet. Paste the sKillSolana BNB token Smart Contract address (0x4eCd50E&8507204D487555c59851755EF9fFAF9) into PoncokeSwoo, select TWEETY. and confirm. When. metamonk promote uou for a wollet sanature, sion.</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-250px] lg:mt-[-250px] 2xl:ml-[440px] xl:ml-[230px] lg:ml-[230px] 2xl:w-auto xl:w-[22%] lg:w-[22%]' src={cardImageShadow} alt="image" />
              </div>

            </div>





            {/* ----------- card 4 --------- */}
            <div className='2xl:mt-[-170px] xl:mt-[-170px] lg:mt-[-170px] 2xl:ml-[860px] xl:ml-[660px] lg:ml-[660px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]'>
              <img className='2xl:ml-[240px] xl:ml-[240px] lg:ml-[240px] 2xl:w-auto xl:w-auto lg:w-auto' src={cardImage} alt="image" />

              <div className='2xl:w-[100%] xl:w-[99%] lg:w-[99%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Swap BNB for <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>KillSolana</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Switch BNB for #KillSolana. We have ZERO toxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility. HOLD KillSolana BNB for 1000x ATH Growth + s</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-220px] lg:mt-[-220px] 2xl:ml-[415px] xl:ml-[290px] lg:ml-[290px] 2xl:w-auto xl:w-auto lg:w-auto' src={cardImageShadow} alt="image" />
              </div>

            </div>



          </div>

        </Container>
      </div>
    </div>
  );
};

export default HowToBuy