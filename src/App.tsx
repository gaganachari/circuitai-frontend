import { Routes, Route } from 'react-router-dom';
import LandingLayout from './pages/landing/LandingLayout';
import Home from './pages/landing/Home';
import Explore from './pages/landing/Explores';
import Pricing from './pages/landing/Pricing';
import About from './pages/landing/About';
import Contact from './pages/landing/Contact';
import Docs from './pages/landing/Docs';
import Login from './pages/landing/Login';
import Register from './pages/landing/Register';
import MainLayout from './pages/main/MainLayout';
import Dashboard from './pages/main/Dashboard';
import MyAPIs from './pages/main/MyAPIs';
import MyProjects from './pages/main/MyProjects';
import UsageAnalytics from './pages/main/UsageAnalytics';
import Notifications from './pages/main/Notifications';
import Settings from './pages/main/Settings';
import Account from './pages/main/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Explores from './pages/landing/Explores';

function App() {
  return (
    <Routes>
      {/* Landing Page (Public) */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="explores" element={<Explores />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="docs" element={<Docs />} />
      </Route>

      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="my-apis" element={<MyAPIs />} />
          <Route path="my-projects" element={<MyProjects />} />
          <Route path="usage-analytics" element={<UsageAnalytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
