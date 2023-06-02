import { stat1, stat2, stat3, stat4 } from '../assets';
import CampaignSlider from './CampaignSlider';

const Campaigns = () => {
  return (
    <div className="w-full h-[70rem] bg-lblue mt-20">
      <div className="px-[375px]">
        <h1 className="text-[40px] pt-20 text-center">
          Campaigns fueled by the <span className="text-dblue font-semibold">most powerful dataset in<br /> retail.</span>
          </h1>
        {/* blue box component */}
        <div className="bg-dblue w-full rounded-2xl flex justify-between xl:flex-row sm:flex-col py-4 mt-20">
          {/* #1 */}
          <div className="xl:pl-12 relative flex">
          <img src={stat1} alt="stat1" className='z-5 relative'/>
            <h1 className="text-golden text-[40px] font-extrabold z-10 absolute top-5 left-15 flex flex-row justify-center text-center items-center gap-2">5 
              <span className="text-golden text-[24px]">billion</span>
            </h1>
            <p className="text-white text-[19px] z-10 absolute top-[50%] left-10">
              shoppers identified
            </p>
          </div>
          {/* #2 */}
          <div className='relative flex xl:justify-center'>
          <img src={stat2} alt="stat3" className='z-5 relative' />
            <h1 className="text-golden text-[40px] font-extrabold z-10 absolute top-5 left-15 flex flex-row justify-center text-center items-center gap-2">300 
              <span className="text-golden text-[24px]">billion</span>
            </h1>
            <p className="text-white text-[19px] z-10 absolute top-[50%] left-1/2 transform -translate-x-1/2 w-[200px] text-center">
              behaviors processed
            </p>
          </div>
          {/* #3 */}
          <div className='relative flex xl:justify-center'>
          <img src={stat3} alt="stat3" className='z-5 relative'/>
            <h1 className="text-golden text-[40px] font-extrabold z-10 absolute top-5 left-15 flex flex-row justify-center text-center items-center gap-2">500 
              <span className="text-golden text-[24px]">billion</span>
            </h1>
            <p className="text-white text-[19px] z-10 absolute top-[50%] left-10">
              products cataloged
            </p>
          </div>
          {/* #4 */}
          <div className="xl:pr-16 relative flex">
          <img src={stat4} alt="stat4" className='z-5 relative'/>
            <h1 className="text-golden text-[40px] font-extrabold z-10 absolute top-5 left-15 flex flex-row justify-center text-center items-center gap-2">$11 
              <span className="text-golden text-[24px]">billion+</span>
            </h1>
            <p className="text-white text-[19px] z-10 absolute top-[50%] left-10">
              revenue driven
            </p>
          </div> 
        </div>
        {/* end of blue box component */}
      </div>
      <div>
        <h1 className="text-[40px] pt-20 text-center">How Bluecore drives billions in revenue for retailers — <br />
          <span className="text-dblue font-semibold">with faster, easier personalization.</span>
        </h1>
      </div>
      <CampaignSlider />
    </div>
  )
}

export default Campaigns