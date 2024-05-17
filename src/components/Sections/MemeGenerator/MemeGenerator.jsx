import cloud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import dogSm from '@/assets/meme-Ge4nerator/Rectangle 22433.png';
import dogLg from '@/assets/meme-Ge4nerator/Rectangle 22438.png';
import grass from '@/assets/meme-Ge4nerator/Group.png';
import Container from '../Container/Container';

const MemeGenerator = () => {
  return (
    <div className='bg-[#154a48] -mt-[2px] py-[80px]'>
      <Container>
        <div>
          {/* Meme heading */}
          <div className='flex justify-center'>
            <div className='flex'>
              <img src={cloud} alt="Image" />
              <h1 className='text-white text-[80px] text-center lg:leading-[88px] lg:tracking-[2.4px] mt-10 ml-[-185px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>meme </span> ge4nerator</h1>
            </div>
            <img src={grass} alt="Image" className='h-fit ml-10' />
          </div>

          {/* Meme generator gallery */}
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14'>
              {/* Section One */}
              <div className='space-y-14'>
                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogSm} alt="Image" className='' />
                  </div>
                </div>

                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogLg} alt="Image" className='' />
                  </div>
                </div>
              </div>

              {/* Section Two */}
              <div className='space-y-14'>
                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogLg} alt="Image" className='' />
                  </div>
                </div>

                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogSm} alt="Image" className='' />
                  </div>
                </div>
              </div>

              {/* Section Three */}
              <div className='space-y-14'>
                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogSm} alt="Image" className='' />
                  </div>
                </div>

                <div className='p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] rounded-[30px] w-fit'>
                  <div className='bg-[#18534f] rounded-[30px]'>
                    <img src={dogLg} alt="Image" className='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Grass */}
      <div className='flex justify-between max-w-[1850px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4 mt-[-90px]'>
        <img src={grass} alt="Image" className='' />
        <img src={grass} alt="Image" className='mr-6' />
      </div>
    </div>
  );
};

export default MemeGenerator;
