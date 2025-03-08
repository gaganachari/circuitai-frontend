import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const SidebarItem = ({ label, path, icon }: SidebarItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(path);

  return (
    <Link 
      to={path} 
      className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
        isActive ? 'bg-[#E0E0E0] text-black font-semibold' : 'text-[#202020] hover:bg-[#F6F6F6]'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
