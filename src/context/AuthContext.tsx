import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of auth context
interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
  const navigate = useNavigate();

  const login = (username: string) => {
    setUser(username);
    localStorage.setItem('user', username);
    navigate('/dashboard'); // Redirect to dashboard
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
