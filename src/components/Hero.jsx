import { herovideo } from '../assets';

const Hero = () => {
  return (
    <div className='mb-20 xxl:px-72 xl:px-20 md:px-4'>
      <div className='mt-20 flex xl:flex-row sm:flex-col'>
        <div className='flex flex-col mx-16'>
          <h1 className='text-[60px] mt-6 mb-6 leading-[65px]'>
            Drive <br />
            <span className='text-dblue font-extrabold'>conversion 4x</span> <br />
            faster.
          </h1>
          <p className='text-[18px] leading-[40px]'>
          Turn your untapped retail data into one-to-one campaigns that <br />
          make an immediate impact on revenue.
          </p>
          <button className='uppercase flex bg-yellow-gradient px-3 py-3 w-[170px] justify-center rounded-full mt-[32px] font-semibold'>Talk To Us</button>
        </div>
        <div className='ml-12 mt-6'>
          <video muted playsInline src={herovideo} type="video/mp4" className="w-[600px]" loop autoPlay></video>
        </div>
      </div>
      <div className='mt-24'>
        <div className='xl:mx-20 bg-yellow-gradient h-[2px]'></div>
        <div className='mt-16 flex justify-center'>
          <h1 className='text-[30.5px] leading-[40px]'>
            The worlds leading retailers trust Bluecore to turn data into <span className='text-dblue font-semibold'>revenu-</span><br />
            <span className='text-dblue font-semibold flex justify-center'>generating campaigns — in minutes.</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero