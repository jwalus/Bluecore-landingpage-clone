import { campaignslider1, campaignslider2, campaignslider3 } from '../assets';

const CampaignSlider = () => {
  return (
    <div className="mx-[375px] pt-20">
      <div className="bg-white w-full rounded-xl h-[50rem] shadow-lg">
        <div>
          <ul>
            <li>IDENTIFY AND CONVERT</li>
            <li>EXECUTE 1:1 CAMPAIGNS</li>
            <li>INCREASE REPEAT PURCHASES</li>
          </ul>
          <div className='bg-yellow-gradient h-[2px]'></div>
        </div>
        <div>
          <div><img src={campaignslider1} alt="campaignslider1" /></div>
          <div>
            <h1>Shorten the path to conversion — with better identification and triggers.</h1>
            <p>Track shopper behavior before identification, and launch triggers without campaign delays, to increase shopper list growth and conversion.</p>
            <button>See How</button>
          </div>
        </div>
        <div>
          <div><img src={campaignslider2} alt="campaignslider2" /></div>
          <div>
            <h1>Build and automate one-to-one campaigns — in minutes.</h1>
            <p>Cut out manual processes and weeks of development work to quickly execute and scale one-to-one campaigns in 90% less time.</p>
            <button>See How</button>
          </div>
        </div>
        <div>
          <div><img src={campaignslider3} alt="campaignslider3" /></div>
          <div>
            <h1>Predict what shoppers will buy — and never miss out on revenue.</h1>
            <p>Keep shoppers buying with retail-specific predictive models that accelerate decision-making and reach — and increase repeat purchase rates.</p>
            <button>See How</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignSlider