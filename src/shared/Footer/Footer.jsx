import img1 from '@/assets/footer/Dinosaur-art.png';
import img2 from '@/assets/footer/Dinosaur-bone.png';
import logo from '@/assets/banner/Frame 431.png';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <img src={img2} alt="Image" className='w-[100px] lg:w-[180px] xl:w-[250px] opacity-80 md:-mb-24 lg:-mb-10 xl:mb-0 hidden md:block' />

        {/* Social media action buttons */}
        <div className='mb-7'>
          <img src={logo} alt="Image" className='mx-auto'/>

          {/* Social media action button */}
          <div className='flex justify-center items-center space-x-7 lg:space-x-7 xl:space-x-12 my-5 lg:mt-7 lg:mb-10'>
            <a href="" target='_blank' className='text-white'>
              <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 rounded-full duration-300'>
                <FaTelegramPlane className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 rounded-full duration-300'>
                <FaXTwitter className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 rounded-full duration-300'>
                <FaInstagram className='text-[25px]' />
              </div>
            </a>

            <a href="" target='_blank' className='text-white'>
              <div className='bg-gradient-to-l from-[#F8B515] hover:from-[#f8b415ec] to-[#0FC1C7] hover:to-[#0fc1c7e8] p-2 xl:p-4 rounded-full duration-300'>
                <FaRedditAlien className='text-[25px]' />
              </div>
            </a>
          </div>

          <p className='text-[#E7D7CB] lg:text-[18px] text-center lg:leading-[28.8px] tracking-[0.54px] w-[80%] md:w-full mx-auto md:mx-0'>© {new Date().getFullYear()} by snax. All rights reserved! Powered by Tenset</p>
        </div>

        <img src={img1} alt="Image" className='w-[100px] lg:w-[180px] xl:w-[250px] opacity-80 md:-mb-24 lg:-mb-10 xl:mb-0 hidden md:block' />
      </div>
    </div>
  );
};

export default Footer;