import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '8px', width: '100%' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
