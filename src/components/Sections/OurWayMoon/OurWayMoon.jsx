import cloud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import grass from '@/assets/meme-Ge4nerator/Group.png';
import shape from '@/assets/ourWayToTheMoon/Group 1171275272.png';
import Container from '../Container/Container';

const OurWayMoon = () => {
  return (
    <div className='mt-[80px] mb-[109px]'>
      <Container>
        {/* Meme heading */}
        <div className='flex justify-center'>
          <div className='flex'>
            <img src={cloud} alt="Image" className='w-[70px] md:w-[170px] lg:w-[200px] xl:w-auto h-[95px] md:h-auto' />
            <h1 className='text-white text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px] text-center lg:leading-[88px] lg:tracking-[2.4px] mt-3 md:mt-5 lg:mt-5 xl:mt-10 ml-[-50px] md:ml-[-105px] lg:ml-[-140px] xl:ml-[-145px]'>our way to the<span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'> moon</span></h1>
          </div>
          <img src={grass} alt="Image" className='h-fit ml-4 md:ml-10 w-[45px] lg:w-[80px] xl:w-auto' />
        </div>

        {/* Moon section contents */}
        <div className='relative'>
          {/* PHASE One */}
          <div className='absolute top-10 right-[420px]'>
            <h3 className='text-white text-[34px] lg:leading-[47.6px] tracking-[1.02px] mb-[15px]'>PHASE 1</h3>

            <div className='text-[#B6D4D4] lg:leading-[25.6px] lg:tracking-[0.64px] space-y-[15px]'>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-white rounded-full mr-[10px]'/>
                <p>PancakeSwap Listing</p>
              </div>

              <div className='flex items-center'>
                <div className='w-3 h-3 bg-white rounded-full mr-[10px]'/>
                <p>CoinMarketCap Listing</p>
              </div>

              <div className='flex items-center'>
                <div className='w-3 h-3 bg-white rounded-full mr-[10px]'/>
                <p>Trending in BSC</p>
              </div>

              <div className='flex items-center'>
                <div className='w-3 h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]'/>
                <p>Coincecko isung</p>
              </div>

              <div className='flex items-center'>
                <div className='w-3 h-3 bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-full mr-[10px]'/>
                <p>Coincecko isung</p>
              </div>
            </div>
          </div>

          <img src={shape} alt="Image" />
          
        </div>
      </Container>
    </div>
  );
};

export default OurWayMoon;
