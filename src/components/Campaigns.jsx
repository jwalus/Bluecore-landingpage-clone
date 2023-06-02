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
        <div className="bg-dblue w-full rounded-2xl flex justify-between xl:flex-row sm:flex-col py-[70px] mt-20">
          <div className="pl-12">
            <h1 className="text-golden text-[40px] font-extrabold">5 <span className="text-golden text-[24px]">billion</span></h1>
            <p className="text-white">shoppers identified</p>
          </div>
          <div>
            <h1 className="text-golden text-[40px] font-extrabold">300 <span className="text-golden text-[24px]">billion</span></h1>
            <p className="text-white">behaviors processed</p>
          </div>
          <div>
            <h1 className="text-golden text-[40px] font-extrabold">500 <span className="text-golden text-[24px]">billion</span></h1>
            <p className="text-white">products cataloged</p>
          </div>
          <div className="pr-12">
            <h1 className="text-golden text-[40px] font-extrabold">$11 <span className="text-golden text-[24px]">billion+</span></h1>
            <p className="text-white">revune driven</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaigns