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
      <img src={dogBone} alt="Image" className='absolute bottom-[-113px] left-[540px]'/>
      <div style={{ backgroundImage: `url(${shapeImg2})` }} className='bg-no-repeat bg-contain bg-center'>
        <div className='bg-gradient-to-l from-[#d19f2b27] to-[#0fc1c727] '>
          <Container>
            <div className='lg:flex justify-between py-[100px]'>
              {/* Token Information contents */}
              <div>
                <img src={dog} alt="Image" className='mb-[-65px] ml-[-18px] z-10' />

                <div className='p-[30px] xl:p-[60px] border-[3px] border-dashed border-[#fff] rounded-[30px] w-fit'>
                  <h1 className='text-white text-[40px] lg:leading-[40px] lg:tracking-[1.2px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>token</span> information</h1>

                  <div className='text-[#E7D7CB] text-[18px]'>
                    <p className='lg:leading-[30.6px] lg:tracking-[0.72px] mt-[30px] mb-[16px]'>snax tokenomics include smart staking rewards, <br /> meaning you can earn right away.</p>

                    <div className='space-y-[16px]'>
                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" />
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% of supply sold in presale</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" />
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% allocated to marketing</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" />
                        <p className='lg:tracking-[0.54px] ml-[15px]'>25% for the project treasury</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" />
                        <p className='lg:tracking-[0.54px] ml-[15px]'>15% used for staking rewards</p>
                      </div>

                      <div className='flex items-center'>
                        <img src={dot6} alt="Image" />
                        <p className='lg:tracking-[0.54px] ml-[15px]'>10% for exchange liquidity</p>
                      </div>
                    </div>
                  </div>

                  <p className='text-white text-[18px] lg:tracking-[0.54px] mt-[42px] mb-[15px]'>snax token adress</p>

                  {/* Copied text */}
                  <div className='mt-[30px] flex justify-center md:justify-start'>
                    <div className="bg-gradient-to-l to-[#179b99] from-[#ac9429] p-[1px] rounded-md">
                      <div className="flex justify-center items-center text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[18px] bg-gradient-to-l to-[#226257] from-[#3a6246] p-[6px] xl:p-2 2xl:p-3 rounded-md">
                        <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                        <button onClick={() => { setCopied(!copied); copyLink() }}>
                          {
                            copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" /> :
                              <IoCopy className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" />
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Info */}
              <div>

              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TokenInformation;
