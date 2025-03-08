import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const LandingLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;
