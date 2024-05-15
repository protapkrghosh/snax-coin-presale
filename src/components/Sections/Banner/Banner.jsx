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
import { IoMdInformationCircleOutline } from "react-icons/io";
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
    const difference = +new Date("2024-06-21") - +new Date();
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
        <span className="text-[#FFF4E7] font-bold text-[32px] lg:tracking-[3px] md:text-[43px] rounded-[8px] px-7 2xl:px-6 ml-3">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[20px] uppercase  top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });


  return (
    <div className="mt-[-80px]">
      <img src={bgImg} alt="Image" className="md:h-[500px] lg:h-[550px] xl:h-auto 2xl:h-[110vh] w-full hidden md:block" />
      <div className="xl:-mt-[850px] 2xl:-mt-[850px]">
        <Container>
          <div className="lg:flex justify-between">
            {/* banner text section  */}
            <div className="w-[50%]">
              <p className="text-[#FFF4E7] font-gagalin xl:text-[90px] lg:leading-[90px] lg:tracking-[2.7px]">Welcome to</p>
              <p className="bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#22DDE2] xl:text-[140px] lg:leading-[150px] lg:tracking-[3.8px]">snax coin</p>
              <p className="text-[#CED9D7] font-gagalin lg:text-[28px] lg:leading-[44.8px] lg:tracking-[1.12px]">the crypto sensation inspired by the tale of <br /> a savvy pup!"</p>

              {/* Copied text */}
              <div className='flex justify-center md:justify-start mt-10'>
                <div className="flex justify-center items-center text-[18px] border-[1px] border-[#2da091] bg-gradient-to-l to-[#288B7D] from-[#497953] p-3 rounded-md">
                  <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                  <button onClick={() => { setCopied(!copied); copyLink() }}>
                    {
                      copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" /> :
                        <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" />
                    }
                  </button>
                </div>
              </div>

              <Button className="mt-[50px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 px-[50px] rounded-[10px] duration-300">CONNECT</Button>
            </div>

            {/* Buy now card */}
            <div className="w-[50%] flex justify-end">
              <div className="bg-[#] mt-[-70px] bgBlur">
                <div className="flex justify-end">
                  <img src={photoFrame} alt="Image" className="w-[550px]" />
                </div>

                <div className="mt-[-730px]">
                  <div className="md:w-2/3 lg:w-[540px] rounded-[28px] px-[30px] 2xl:px-[40px] py-[20px] text-[#000]">
                    <h3 className="text-center lg:text-[22px] xl:text-[25px] 2xl:text-[28px] mb-5 lg:leading-[33px] lg:tracking-[2.8px]">SNAX PRESALE IS NOW LIVE!</h3>

                    {/* Dynamic Timer */}
                    <div className="relative bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[20px] h-[110px]">
                      <div className="flex justify-between font-semibold px-5 md:px-[25px] lg:px-3 xl:px-[25px] 2xl:px-[30px] pt-[10px] pb-2 text-[#FFF4E7]">
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Days</p>

                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Hours</p>

                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Minutes</p>
                        
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Second</p>
                      </div>

                      {/* <div className="flex justify-between font-semibold px-5 md:px-[25px] lg:px-3 xl:px-[25px] 2xl:px-[30px] pt-[10px] pb-2 text-[#FFF4E7]">
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Days</p>
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Hours</p>
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Minutes</p>
                        <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] lg:tracking-[1.98px] -mb-2">Second</p>
                      </div> */}

                      <h2 className="absolute -left-[11px] md:left-0 lg:-left-[27px] xl:-left-[10px] 2xl:left-0">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                      </h2>
                    </div>

                    <p className="text-center text-[17px] 2xl:text-[20px] lg:leading-[24px] lg:tracking-[1.8px] my-4">USDT RAISED: $520,320.46 / $543,440</p>
                    <Progress value={92} />

                    <div className="flex justify-center items-center mb-1 mt-4">
                      <p className="tracking-[1px] lg:leading-[24px] lg:tracking-[1.44px] mr-2">YOUR PURCHASED $SNAX= 0</p>
                      {/* <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" /> */}
                      <img src={faqIcon} alt="Image" />
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="tracking-[1px] lg:leading-[24px] lg:tracking-[1.44px] mr-2">YOUR STAKEABLE $SNAX= 0</p>
                      {/* <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" /> */}
                      <img src={faqIcon} alt="Image" />
                    </div>

                    <div className="flex justify-center items-center my-4">
                      <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
                      <p className="2xl:text-[18px] lg:leading-[19.2px] lg:tracking-[4.92px] px-2">1 $SNAX - $0.000445</p>
                      <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
                    </div>

                    {/* Ethereum button */}
                    <div className="flex justify-between gap-x-6">
                      <div className="flex items-center gap-3 2xl:gap-5 border border-[#F8B515] bg-gradient-to-l from-[#f8b515b3] to-[#0fc1c7b3] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                        <img src={icon1} alt="Image" className="w-[22px] md:w-[31px] lg:w-[23px] xl:w-[25px] 2xl:w-[31px]" />
                        <p className="text-[17px] lg:text-[15px] xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">ETH</p>
                      </div>

                      <div className="flex items-center gap-3 2xl:gap-5 border border-[#F8B515] bg-gradient-to-l from-[#f8b515b3] to-[#0fc1c7b3] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                        <img src={icon2} alt="Image" className="w-[22px] md:w-[31px] lg:w-[23px] xl:w-[25px] 2xl:w-[31px]" />
                        <p className="text-[17px] lg:text-[15px] xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">USDT</p>
                      </div>

                      <div className="flex items-center gap-3 2xl:gap-5 border border-[#F8B515] bg-gradient-to-l from-[#f8b515b3] to-[#0fc1c7b3] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                        <img src={icon3} alt="Image" className="w-[22px] md:w-[28px] lg:w-[21px] xl:w-[22px] 2xl:w-[28px]" />
                        <p className="text-[17px] lg:text-[15px] xl:text-[22px] text-start lg:leading-[26.4px] lg:tracking-[1.98px] mr-5 md:mr-0">CARD</p>
                      </div>
                    </div>

                    {/* ETH you pay */}
                    <div className="flex justify-between mt-5 mb-4">
                      <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">ETH you pay</p>
                      <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">Max</p>
                      <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">$SNAX you receive</p>
                    </div>

                    {/* Input field */}
                    <div className="flex justify-between gap-x-6">
                      <div className="relative">
                        <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] border border-[#F8B515] bg-gradient-to-l from-[#ebab18] to-[#0fc1c7ea] placeholder:text-[#000] border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                        <img src={icon1} alt="Image" className="absolute top-[10px] right-4" />
                      </div>

                      <div className="relative">
                        <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] border border-[#F8B515] bg-gradient-to-l from-[#ebab18] to-[#0fc1c7ea] placeholder:text-[#000] border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                        <img src={icon5} alt="Image" className="w-[21px] absolute top-[9px] right-4" />
                      </div>
                    </div>

                    {/* Button */}
                    <div className="xl:flex justify-between gap-x-6 mt-7 mb-8">
                      <button className="text-[#000] text-[18px] lg:text-[16px] xl:text-[15px] 2xl:text-[18px] font-semibold rounded-[30px]  border border-[#F8B515] bg-gradient-to-l from-[#f8b515b3] to-[#0fc1c7b3] tracking-[2px] 2xl:tracking-[3px] w-full xl:w-1/2">Connect Wallet</button>

                      <div className="relative xl:w-1/2">
                        <img src={icon4} alt="Image" className="w-[26px] absolute top-8 xl:top-[12px] 2xl:top-[16px] left-16 md:left-24 lg:left-14 xl:left-2 2xl:left-3 cursor-pointer" />

                        <button className="text-[#000] text-[18px] lg:text-[16px] xl:text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] border border-[#F8B515] bg-gradient-to-l from-[#f8b515b3] to-[#0fc1c7b3] pl-10 2xl:pl-[54px] py-6 2xl:py-[12px] px-[10px] mt-5 xl:mt-0 tracking-[2px] 2xl:tracking-[3px] w-full xl:w-auto">Buy with BNB</button>
                      </div>
                    </div>

                    <p className="tracking-[1.44px] text-center w-[55%] mx-auto">You do not have enough SOL to pay for this transaction.</p>
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
