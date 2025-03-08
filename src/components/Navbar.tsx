import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Telescope  } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='w-full h-[60px] bg-white flex justify-between items-center px-4 '>
      <Logo/>
      <div className="w-auto flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/explores" className="flex items-center gap-2 bg-[#F6F6F6] px-3 py-1 rounded-full"><Telescope strokeWidth={1.5}/> Explore</Link>
        <Link to="/pricing"> Pricing</Link>
        <Link to="/about"> About Us</Link>
        <Link to="/contact"> Contact Us</Link>
        <Link to="/docs"> Docs</Link>
      </div>
      <Link to="/login" className="flex items-center gap-2 bg-[#F6F6F6] px-3 py-1 rounded-full">Login</Link>
    </nav>
  );
};

export default Navbar;
