import { Home, Search, Library, Folder, BarChart, Bell, Settings, User } from 'lucide-react';

export const SIDEBAR_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
  { label: 'Explore', path: '/explore', icon: <Search size={20} /> },
  { label: 'My APIs', path: '/my-apis', icon: <Library size={20} /> },
  { label: 'My Projects', path: '/my-projects', icon: <Folder size={20} /> },
  { label: 'Usage & Analytics', path: '/usage-analytics', icon: <BarChart size={20} /> },
  { label: 'Notifications', path: '/notifications', icon: <Bell size={20} /> },
];

export const SIDEBAR_BOTTOM_ITEMS = [
  { label: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  { label: 'Account', path: '/account', icon: <User size={20} /> },
];
