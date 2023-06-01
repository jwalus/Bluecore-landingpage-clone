import { headerlogo } from '../assets';

const Navbar = () => {
  return (
    <div className='mt-9 flex'>
      <div>
        <img src={headerlogo} alt="headerlogo" className='w-[164px] h-[]' />
      </div>
      <div className=''>
        <ul className='flex'>
          <li>Solutions</li>
          <li>Platform</li>
          <li>Community</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className=''>
        <ul className='flex'>
          <li>Login</li>
          <button>Request A Demo</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar