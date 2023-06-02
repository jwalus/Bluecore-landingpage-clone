const Campaigns = () => {
  return (
    <div className="w-full bg-lblue mt-20">
      <div className="px-[190px]">
        <h1 className="text-[40px] pt-20 text-center">
          Campaigns fueled by the 
          <span className="text-dblue font-semibold">
            most powerful dataset in<br /> retail.
          </span>
          </h1>

        <div className="bg-dblue w-full rounded-2xl flex justify-between xl:flex-row sm:flex-col py-[80px] mt-20">
          <div className="pl-12">
            <h1 className="text-golden">5 <span className="text-golden">billion</span></h1>
            <p className="text-white">shoppers identified</p>
          </div>
          <div>
            <h1 className="text-golden">300 <span className="text-golden">billion</span></h1>
            <p className="text-white">behaviors processed</p>
          </div>
          <div>
            <h1 className="text-golden">500 <span className="text-golden">billion</span></h1>
            <p className="text-white">products cataloged</p>
          </div>
          <div className="pr-12">
            <h1 className="text-golden">$11 <span className="text-golden">billion+</span></h1>
            <p className="text-white">revune driven</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Campaigns