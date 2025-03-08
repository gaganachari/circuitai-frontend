import { SIDEBAR_ITEMS, SIDEBAR_BOTTOM_ITEMS } from '../constants/sidebarItems';
import SidebarItem from './SidebarItem';
import LogoutButton from './LogoutButton';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-[250px] flex flex-col justify-between p-4">
      <Logo />
      <div className="flex flex-col gap-4">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {SIDEBAR_BOTTOM_ITEMS.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
