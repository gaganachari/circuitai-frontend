import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="h-screen fixed top-0 left-0">

        <Sidebar />
      </div>
      <main className="flex-1 ml-64 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
