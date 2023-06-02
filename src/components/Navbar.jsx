import { headerlogo } from '../assets';

const Navbar = () => {
  return (
<nav className='w-full flex justify-between items-center xl:mt-5 sm:mt-3 xxl:px-72 xl:px-20 md:px-4'>
  <img src={headerlogo} alt="headerlogo" className='xl:w-[164px] sm:w-[115px]' />
  <ul className='hidden xl:flex justify-between gap-14 text-lg text-[17px]'>
    <li className='hover:text-dblue hover:cursor-pointer hover:font-semibold'>Solutions</li>
    <li className='hover:text-dblue hover:cursor-pointer hover:font-semibold'>Platform</li>
    <li className='hover:text-dblue hover:cursor-pointer hover:font-semibold'>Community</li>
    <li className='hover:text-dblue hover:cursor-pointer hover:font-semibold'>Resources</li>
  </ul>
  <ul className='flex justify-end items-center gap-6'>
    <li className='hidden xl:flex hover:font-semibold hover:text-dblue hover:cursor-pointer'>Login</li>
    <button className='bg-dblue text-white uppercase xl:px-6 xl:py-3.5 xl:text-[16px] sm:px-3 sm:py-2 sm:text-[13.5px] sm:my-2 sm:mr-5 font-semibold rounded-full tracking-wide'>Request A Demo</button>
  </ul>
</nav>

  )
}

export default Navbar