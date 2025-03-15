import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });

      if (data.success) {
        localStorage.setItem('aToken', data.token);
        setAToken(data.token);
        toast.success('Login successful!');

        // Redirect or navigate (if applicable)
        // navigate('/admin/dashboard'); // Uncomment if using React Router
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log('Received Email:', email);
      console.log('Expected Email:', password);
      toast.error(error.response?.data?.message || password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary"> {state}</span> Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-primary text-white w-full py-2 rounded-md text-base ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading || !email || !password}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p>
          {state === 'Admin' ? (
            <>Doctor Login? <span className="text-primary underline cursor-pointer text-xs" onClick={() => setState('Doctor')}>Click Here</span></>
          ) : (
            <>Admin Login? <span className="text-primary underline cursor-pointer text-xs" onClick={() => setState('Admin')}>Click Here</span></>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
