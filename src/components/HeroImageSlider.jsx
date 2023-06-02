import { gaphero, jcrewhero, neimanhero, pacsunhero, nobullhero, lenovohero, expresshero } from '../assets';

const HeroImageSlider = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-10'>
      <img src={gaphero} alt="gap" className='w-[150px]'/>
      <img src={jcrewhero} alt="jscrew" className='w-[200px]'/>
      <img src={neimanhero} alt="neimanmarcus" className='w-[200px]'/>
      <img src={pacsunhero} alt="pacsun" className='w-[200px]'/>
      <img src={nobullhero} alt="nobull" className='w-[200px]'/>
      </div>
    </div>
  );
};

export default HeroImageSlider;
