import { useState } from 'react';
import Container from '../Container/Container';
import dot1 from '@/assets/tokenInformation/Group 1171275234.png';
import dot2 from '@/assets/tokenInformation/Group 1171275234 (1).png';
import dot3 from '@/assets/tokenInformation/Group 1171275234 (2).png';
import dot4 from '@/assets/tokenInformation/Group 1171275234 (3).png';
import dot5 from '@/assets/tokenInformation/Group 1171275234 (4).png';
import dot6 from '@/assets/tokenInformation/Group 1175234.png';
import chart from '@/assets/tokenInformation/Group 1171275236.png';
import dog from '@/assets/tokenInformation/logo_short.png';
import shapeImg from '@/assets/tokenInformation/Group 1171275272.png';
import shapeImg2 from '@/assets/tokenInformation/Mask group.png';
import dogBone from '@/assets/tokenInformation/Dinosaur-bone.png';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import toast from 'react-hot-toast';

const TokenInformation = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('0x4444c12f49c474b24b090d7322025b4b9961baed').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };


  return (
    <div className='relative overflow-hidden'>
      {/* Dog bone */}
      <img src={dogBone} alt="Image" className='absolute bottom-[-100px] md:bottom-[-60px] lg:bottom-[-75px] xl:bottom-[-89px] 2xl:bottom-[-113px] left-[500px] md:left-[550px] lg:left-[290px] xl:left-[360px] 2xl:left-[540px] w-[280px] lg:w-[340px] xl:w-[400px] 2xl:w-auto' />

      <div style={{ backgroundImage: `url(${shapeImg2})` }} className='bg-repeat-y lg:bg-no-repeat bg-contain lg:bg-cover 2xl:bg-contain lg:bg-center'>
        <div className='bg-gradient-to-l from-[#d19f2b27] to-[#0fc1c727] '>
          <Container>
            <div className='flex flex-col lg:flex-row justify-between items-center py-[80px] xl:py-[100px]'>
              {/* Token Information contents */}
              <div className='lg:w-[50%] relative'>
                <img src={dog} alt="Image" className='mb-[-35px] xl:mb-[-40px] 2xl:mb-[-65px] ml-[-18px] w-[60px] xl:w-[85px] 2xl:w-auto z-10' />
                {/* Shadow */}
                <div className='w-[150px] xl:w-[250px] h-[150px] xl:h-[250px] absolute top-52 left-20 tokenShadow'/>

                <div className='p-[25px] xl:p-[40px] 2xl:p-[60px] border-[3px] border-dashed border-[#fff] rounded-[30px] w-fit'>
                  <h1 className='text-white text-[40px] lg:leading-[40px] lg:tracking-[1.2px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>token</span> information</h1>

                  <div className='text-[#E7D7CB] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>
                    <p className='lg:leading-[30.6px] lg:tracking-[0.72px] mt-[25px] xl:mt-[30px] mb-[16px]'>snax tokenomics include smart staking rewards, <br /> meaning you can earn right away.</p>

                    <div className='space-y-[16px]'>
                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" className='lg:w-[16px] xl:w-auto'/>
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% of supply sold in presale</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" className='lg:w-[16px] xl:w-auto'/>
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% allocated to marketing</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" className='lg:w-[16px] xl:w-auto'/>
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% for the project treasury</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" className='lg:w-[16px] xl:w-auto'/>
                        <p className='lg:tracking-[0.54px] ml-[15px]'>15% used for staking rewards</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" className='lg:w-[16px] xl:w-auto'/>
                        <p className='lg:tracking-[0.54px] ml-[15px]'>10% for exchange liquidity</p>
                      </div>
                    </div>
                  </div>

                  <p className='text-white xl:text-[18px] lg:tracking-[0.54px] mt-[30px] xl:mt-[42px] mb-[15px]'>snax token adress</p>

                  {/* Copied text */}
                  <div className='mt-[30px] flex justify-center md:justify-start'>
                    <div className="bg-gradient-to-l to-[#1cb1ae] from-[#ac9429] p-[1px] rounded-[5px]">
                      <div className="flex justify-center items-center text-[15.5px] md:text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] bg-gradient-to-l to-[#276e62] from-[#3a6246] p-[6px] xl:p-2 2xl:p-3 rounded-md">
                        <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                        <button onClick={() => { setCopied(!copied); copyLink() }}>
                          {
                            copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer text-[#fff]" /> :
                              <IoCopy className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer text-[#fff]" />
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Info */}
              <div className='lg:w-[50%] mt-14 lg:mt-0'>
                <div className='flex justify-between items-center gap-x-5 xl:gap-x-16'>
                  <div className='relative'>
                    <img src={chart} alt="Image" className='xl:scale-110 2xl:scale-100'/>

                    <div className='text-white text-[18px] lg:text-[15px] xl:text-[20px] lg:tracking-[0.6px]'>
                      <p className='absolute top-[38px] md:top-[43px] lg:top-[20px] xl:top-[5px] 2xl:top-[38px] left-24 md:left-[110px] lg:left-[62px] xl:left-[60px] 2xl:left-24'>10%</p>

                      <p className='absolute top-[147px] md:top-[153px] lg:top-[85px] xl:top-[90px] 2xl:top-[147px] left-4 md:left-5 lg:left-[10px] xl:left-[-6px] 2xl:left-4'>15%</p>

                      <p className='absolute top-[62px] md:top-[67px] lg:top-[33px] xl:top-[23px] 2xl:top-[62px] right-[52px] md:right-[60px] lg:right-[28px] xl:right-[15px] 2xl:right-[52px]'>25%</p>

                      <p className='absolute bottom-[135px] md:bottom-[138px] lg:bottom-[83px] xl:bottom-[87px] 2xl:bottom-[135px] right-[17px] md:right-[25px] lg:right-[6px] xl:right-[-12px] 2xl:right-[17px]'>25%</p>

                      <p className='absolute bottom-[80px] md:bottom-[82px] lg:bottom-[49px] xl:bottom-[44px] 2xl:bottom-[80px] left-[85px] md:left-[90px] lg:left-[52px] xl:left-[45px] 2xl:left-[85px]'>25%</p>
                    </div>

                    <p className='absolute top-[248px] md:top-[250px] lg:top-[148px] xl:top-[175px] 2xl:top-[248px] left-[238px] md:left-[247px] lg:left-[142px] xl:left-[165px] 2xl:left-[238px] text-[40px] lg:text-[27px] xl:text-[35px] 2xl:text-[40px] leading-[40px] lg:tracking-[2px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>150 b</span></p>
                  </div>

                  {/* Presale contents */}
                  <div className='space-y-[25px] mt-10'>

                    <div className='flex items-center'>
                      <img src={dot1} alt="Image" className='mr-[15px] xl:mr-[30px] lg:w-[16px] xl:w-auto' />
                      <div>
                        <div>
                          <p className='text-[#8C1BCD] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px] textStroke mb-[-24px] lg:mb-[-22.5px] xl:mb-[-27px]'>Presale</p>
                          <p className='text-[#8C1BCD] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px]'>Presale</p>
                        </div>
                        <p className='text-white text-[18px] 2xl:text-[20px] lg:tracking-[0.6px] 2xl:mt-[5px]'>25%</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <img src={dot2} alt="Image" className='mr-[15px] xl:mr-[30px] lg:w-[16px] xl:w-auto' />
                      <div>
                        <div>
                          <p className='text-[#0FB0B0] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px] textStroke mb-[-24px] lg:mb-[-22.5px] xl:mb-[-27px]'>marketing</p>
                          <p className='text-[#0FB0B0] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px]'>marketing</p>
                        </div>
                        <p className='text-white text-[18px] 2xl:text-[20px] lg:tracking-[0.6px] 2xl:mt-[5px]'>25%</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <img src={dot3} alt="Image" className='mr-[15px] xl:mr-[30px] lg:w-[16px] xl:w-auto' />
                      <div>
                        <div>
                          <p className='text-[#907602] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px] textStroke mb-[-24px] lg:mb-[-22.5px] xl:mb-[-27px]'>treasury</p>
                          <p className='text-[#907602] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px]'>treasury</p>
                        </div>
                        <p className='text-white text-[18px] 2xl:text-[20px] lg:tracking-[0.6px] 2xl:mt-[5px]'>25%</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <img src={dot4} alt="Image" className='mr-[15px] xl:mr-[30px] lg:w-[16px] xl:w-auto' />
                      <div>
                        <div>
                          <p className='text-[#41A01E] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px] textStroke mb-[-24px] lg:mb-[-22.5px] xl:mb-[-27px]'>staking</p>
                          <p className='text-[#41A01E] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px]'>staking</p>
                        </div>
                        <p className='text-white text-[18px] 2xl:text-[20px] lg:tracking-[0.6px] 2xl:mt-[5px]'>15%</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <img src={dot5} alt="Image" className='mr-[15px] xl:mr-[30px] lg:w-[16px] xl:w-auto' />
                      <div>
                        <div>
                          <p className='text-[#1B95CD] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px] textStroke mb-[-24px] lg:mb-[-22.5px] xl:mb-[-27px]'>liquidity</p>
                          <p className='text-[#1B95CD] lg:text-[15px] xl:text-[18px] lg:tracking-[0.54px]'>liquidity</p>
                        </div>
                        <p className='text-white text-[18px] 2xl:text-[20px] lg:tracking-[0.6px] 2xl:mt-[5px]'>15%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TokenInformation;
