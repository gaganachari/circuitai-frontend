import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className='flex items-center gap-3 text-[#202020] hover:bg-[#F6F6F6] p-2 rounded-lg'>
        <LogOut size={20}/>
      Logout
    </button>
  );
};

export default LogoutButton;
