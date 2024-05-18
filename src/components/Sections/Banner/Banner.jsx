import bgImg from "@/assets/banner/wireframe.png"
import photoFrame from "@/assets/banner/Vector.png"
import Container from "../Container/Container";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { Button } from "@/components/ui/button";
import icon1 from '@/assets/banner/Group1.png'
import icon2 from '@/assets/banner/Group.png'
import icon3 from '@/assets/banner/Group3.png'
import icon4 from '@/assets/banner/Group2.png'
import icon5 from '@/assets/banner/Group4.png'
import line from '@/assets/banner/Line 12.png'
import faqIcon from '@/assets/banner/Group 845.png'
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

const Banner = () => {
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


  // Dynamic timer
  const [presalePercentage, setPresalePercentage] = useState(2);
  // Input logo change 
  const [open, setOpen] = useState(true);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-06-23") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Pad numbers with leading zeros
    Object.keys(timeLeft).forEach(interval => {
      timeLeft[interval] = timeLeft[interval].toString().padStart(2, '0');
    });

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setPresalePercentage(99 - timeLeft.hours * 1.2);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="">
        <span className="text-[#FFF4E7] font-bold lg:tracking-[3px] text-[32px] md:text-[37px] lg:text-[32px] xl:text-[38px] 2xl:text-[43px] rounded-[8px] px-[13px] md:px-7 lg:px-[17px] xl:px-[17px] 2xl:px-6 ml-3">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[20px] uppercase  top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });


  return (
    <div className="lg:mt-[-80px]" id="home">
      <img src={bgImg} alt="Image" className="md:h-[500px] lg:h-[150vh] xl:h-[155vh] 2xl:h-[140vh] w-full hidden lg:block" />
      <div className="lg:-mt-[670px] xl:-mt-[850px] 2xl:-mt-[1085px] bg-[#295949] lg:bg-transparent">
        <Container>
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            {/* banner text section  */}
            <div className="lg:w-[50%] mt-16 lg:mt-[-70px] xl:mt-0">
              <p className="text-[#FFF4E7] font-gagalin text-center md:text-start text-[30px] md:text-[45px] xl:text-[60px] 2xl:text-[90px] xl:leading-[90px] lg:tracking-[2.7px]">Welcome to</p>

              <p className="mt-[-15px] xl:mt-[-29px] 2xl:mt-[-5px] bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#22DDE2] text-center md:text-start text-[70px] md:text-[90px] lg:text-[75px] xl:text-[110px] 2xl:text-[140px] xl:leading-[150px] lg:tracking-[3.8px]">snax coin</p>

              <p className="mt-[5px] 2xl:mt-[25px] text-[#CED9D7] font-gagalin text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[28px] xl:leading-[35px] 2xl:leading-[44.8px] lg:tracking-[1.12px] hidden md:block">the crypto sensation inspired by the tale of <br /> a savvy pup!"</p>

              <p className="mt-[5px] 2xl:mt-[25px] text-[#CED9D7] font-gagalin text-center md:text-start text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[28px] xl:leading-[35px] 2xl:leading-[44.8px] lg:tracking-[1.12px] block md:hidden">the crypto sensation inspired by the tale of a savvy pup!"</p>

              {/* Copied text */}
              <div className='mt-[30px] flex justify-center md:justify-start'>
                <div className="bg-gradient-to-l to-[#1cb4b2] from-[#c9af31] p-[1px] rounded-md">
                  <div className="flex justify-center items-center text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[18px] bg-gradient-to-l to-[#278274] from-[#5d814d] p-[6px] xl:p-2 2xl:p-3 rounded-md">
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

              <Button className="mt-5 md:mt-[40px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 xl:px-[35px] 2xl:px-[50px] mb-10 lg:mb-0 rounded-[10px] duration-300 w-full md:w-fit">CONNECT</Button>
            </div>


            {/* -------------- Buy now card ------------ */}
            <div className="md:w-[70%] lg:w-[50%] mx-auto lg:mx-0 flex justify-end mt-12 lg:mt-0">
              <div className="lg:mt-[-85px] xl:mt-[-70px] 2xl:mt-[-70px] bgBlur">
                <div className="md:flex justify-end">
                  <img src={photoFrame} alt="Image" className="w-auto lg:w-[400px] xl:w-[452px] 2xl:w-[580px] h-[680px] md:h-[760px] lg:h-[710px] xl:h-[810px] 2xl:h-[910px] ml-[0px]" />
                </div>

                <div className="mt-[-670px] md:mt-[-747px] lg:mt-[-690px] xl:mt-[-800px] 2xl:mt-[-850px] lg:ml-[10px] 2xl:ml-[18px]">
                  <div className="w-[360px] md:w-auto lg:w-[380px] xl:w-[430px] 2xl:w-[540px] rounded-[28px] px-[30px] lg:px-[20px] xl:px-[20px] 2xl:px-[40px] py-[20px] text-[#000]">
                    <h3 className="text-center text-[24px] lg:text-[22px] xl:text-[23px] 2xl:text-[28px] lg:mb-[-15px] xl:mb-5 lg:leading-[33px] lg:tracking-[2.8px]">SNAX PRESALE IS NOW LIVE!</h3>

                    {/* Dynamic Timer */}
                    <div className="mt-4 md:mt-[30px] relative bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[20px] h-[88px] md:h-[110px] lg:h-[85px] xl:h-[110px]">
                      <div className="flex justify-between font-semibold px-5 md:px-[25px] lg:px-3 xl:px-[25px] 2xl:px-[30px] pt-[10px] pb-2 text-[#FFF4E7]">
                        <p className="text-[17px] md:text-[21px] lg:text-[15px] xl:text-[18px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Days</p>

                        <p className="text-[17px] md:text-[21px] lg:text-[15px] xl:text-[18px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Hours</p>

                        <p className="text-[17px] md:text-[21px] lg:text-[15px] xl:text-[18px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Minutes</p>

                        <p className="text-[17px] md:text-[21px] lg:text-[15px] xl:text-[18px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Second</p>
                      </div>

                      <h2 className="absolute left-[0px] lg:-left-[12px] xl:left-0">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                      </h2>
                    </div>

                    <p className="xl:mt-[20px] xl:mb-[25px] text-center text-[17px] 2xl:text-[20px] lg:leading-[24px] lg:tracking-[1.8px] my-4">USDT RAISED: $520,320.46 / $543,440</p>
                    <Progress value={92} />

                    <div className="mt-[20px] flex justify-center items-center">
                      <p className="tracking-[1px] lg:leading-[24px] lg:tracking-[1.44px] mr-2">YOUR PURCHASED $SNAX= 0</p>
                      {/* <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" /> */}
                      <img src={faqIcon} alt="Image" />
                    </div>

                    <div className="mt-[10px] flex justify-center items-center">
                      <p className="tracking-[1px] lg:leading-[24px] lg:tracking-[1.44px] mr-2">YOUR STAKEABLE $SNAX= 0</p>
                      {/* <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" /> */}
                      <img src={faqIcon} alt="Image" />
                    </div>

                    <div className="mt-[18px] xl:mt-[25px] flex justify-center items-center">
                      <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
                      <p className="2xl:text-[18px] lg:leading-[19.2px] lg:tracking-[3px] xl:tracking-[4.92px] px-2">1 $SNAX - $0.000445</p>
                      <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
                    </div>

                    {/* Ethereum button */}
                    <div className="mt-[23px] xl:mt-[30px] flex justify-between gap-x-3 md:gap-x-6">
                      <div className="bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] w-fit h-fit p-[1px] rounded-[30px]">
                        <div className="flex items-center gap-3 2xl:gap-5 bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] w-fit px-4 lg:px-2 xl:px-4 py-[8px] xl:py-[10px] rounded-[30px]">
                          <img src={icon1} alt="Image" className="w-[20px] md:w-[31px] lg:w-[23px] xl:w-[23px] 2xl:w-[31px]" />
                          <p className="text-[14px] md:text-[17px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">ETH</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 2xl:gap-5 bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] w-fit h-fit p-[1px] rounded-[30px]">
                        <div className="flex items-center gap-3 2xl:gap-5 bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] w-fit px-4 lg:px-2 xl:px-4 py-[8px] xl:py-[10px] rounded-[30px]">
                          <img src={icon2} alt="Image" className="w-[20px] md:w-[31px] lg:w-[23px] xl:w-[23px] 2xl:w-[31px]" />
                          <p className="text-[14px] md:text-[17px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">USDT</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 2xl:gap-5 bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] w-fit h-fit p-[1px] rounded-[30px]">
                        <div className="flex items-center gap-3 2xl:gap-5 bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] w-fit px-4 lg:px-2 xl:px-4 py-[8px] md:py-[10px] lg:py-[8px] xl:py-[10px] rounded-[30px]">
                          <img src={icon3} alt="Image" className="w-[19px] md:w-[28px] lg:w-[21px] xl:w-[21px] 2xl:w-[28px]" />
                          <p className="text-[14px] md:text-[17px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">CARD</p>
                        </div>
                      </div>
                    </div>

                    {/* ETH you pay */}
                    <div className="mt-[20px] xl:mt-[30px] flex justify-between">
                      <p className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">ETH you pay</p>
                      <p className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">Max</p>
                      <p className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">$SNAX you receive</p>
                    </div>

                    {/* Input field */}
                    <div className="mt-[10px] flex justify-between gap-x-3 md:gap-x-6">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] rounded-[30px] p-[1px]">
                          <Input type="text" placeholder="0" className="md:text-[18px] md:py-[23px] rounded-[30px] bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] placeholder:text-[#000] border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />
                        </div>

                        <img src={icon1} alt="Image" className="w-[22px] lg:w-[28px] xl:w-[30px] 2xl:w-auto absolute top-[10px] lg:top-[11px] xl:top-[10px] right-4" />
                      </div>

                      <div className="relative">
                        <div className="bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] rounded-[30px] p-[1px]">
                          <Input type="text" placeholder="0" className="md:text-[18px] md:py-[23px] rounded-[30px] bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] placeholder:text-[#000] border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />
                        </div>

                        <img src={icon5} alt="Image" className="w-[17px] lg:w-[18px] xl:w-[19px] 2xl:w-[21px] absolute top-[9px] lg:top-[10px] xl:top-[9px] right-4" />
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-[20px] xl:mt-[40px] flex justify-between gap-x-3 md:gap-x-6">
                      <div className="p-[1px] bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] rounded-[30px] h-[47px] md:h-[52px] lg:h-[50px] xl:h-auto w-1/2">
                        <button className="text-[#000] text-[14px] md:text-[18px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] font-semibold rounded-[30px] bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] tracking-[2px] 2xl:tracking-[3px] w-full h-full">Connect Wallet</button>
                      </div>

                      <div className="relative w-1/2">
                        <img src={icon4} alt="Image" className="w-[18px] md:w-[23px] lg:w-[21px] xl:w-[23px] 2xl:w-[26px] absolute top-4 md:top-[15px] lg:top-[14px] xl:top-[14px] 2xl:top-[16px] left-2 md:left-3 lg:left-2 xl:left-2 2xl:left-3 cursor-pointer" />

                        <div className="p-[1px] bg-gradient-to-r from-[#f8b415cc] to-[#0fc1c7e3] rounded-[30px] w-full xl:w-auto h-[47px] md:h-[52px] lg:h-[50px] xl:h-auto">
                          <button className="text-[#000] text-[14px] md:text-[18px] lg:text-[14px] xl:text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] bg-gradient-to-l from-[#e2a515d8] to-[#0ea6acfb] pl-6 md:pl-14 lg:pl-[38px] 2xl:pl-[54px] py-[13px] 2xl:py-[12px] md:px-[10px] xl:px-[10px] lg:mt-0 tracking-[2px] 2xl:tracking-[3px] w-full h-[45px] md:h-[50px] xl:h-auto">Buy with BNB</button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-[20px] md:mt-[30px] pb-[12px] 2xl:pb-[46px] tracking-[1.44px] text-[14px] md:text-[16px] text-center w-[77%] md:w-[60%] lg:w-[75%] xl:w-[65%] 2xl:w-[55%] mx-auto">You do not have enough SOL to pay for this transaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
