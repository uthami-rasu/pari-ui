import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

const LoginRightPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('doctor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveUser, setSaveUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bypass auth — navigate to dashboard with role info
    navigate('/dashboard', { state: { role: activeTab, email } });
  };

  return (
    <div className="flex-1 h-full bg-[#f5f7fb] flex flex-col overflow-auto">

      {/* ── Navbar ── */}
      <div className="flex items-center justify-between px-10 py-4 bg-white border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <img src={logoImg} alt="Pari Hospital" className="w-9 h-9 object-contain" />
          <span className="text-[1rem] font-bold text-slate-800 tracking-tight">Pari Hospital</span>
        </div>
        <button
          type="button"
          className="border-[1.8px] border-blue-500 text-blue-500 text-[0.8rem] font-semibold px-5 py-1.5 rounded-full transition-all duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-200 cursor-pointer"
        >
          Register
        </button>
      </div>

      {/* ── Form container ── */}
      <div className="flex-1 flex flex-col justify-center px-14 py-10 max-w-[520px] w-full mx-auto">

        {/* Welcome line */}
        <p className="text-blue-500 text-[0.7rem] font-semibold uppercase tracking-[0.12em] mb-1">
          Welcome Back
        </p>

        {/* Title */}
        <h2 className="text-[2rem] font-extrabold text-slate-900 tracking-tight leading-tight mb-1">
          Login
        </h2>
        <p className="text-slate-400 text-[0.8rem] font-light mb-7">
          Sign in to access your hospital dashboard
        </p>

        {/* ── Tab switcher ── */}
        <div className="flex items-center bg-white border border-slate-200 rounded-[14px] p-1.5 gap-1 mb-7 shadow-sm">
          {['doctor', 'staff'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-[10px] text-[0.82rem] font-semibold transition-all duration-200 cursor-pointer
                ${activeTab === tab
                  ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-500 hover:text-blue-500'
                }`}
            >
              {tab === 'doctor' ? 'Doctor Login' : 'Staff Login'}
            </button>
          ))}
        </div>

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[0.78rem] font-semibold text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-[0.86rem] text-slate-800 bg-white placeholder-slate-300 outline-none shadow-sm transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:bg-[#fafcff]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-[0.78rem] font-semibold text-slate-700">
              Password
            </label>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-[0.86rem] text-slate-800 bg-white placeholder-slate-300 outline-none shadow-sm transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:bg-[#fafcff]"
              />
            </div>
          </div>

          {/* Save User + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={saveUser}
                onChange={(e) => setSaveUser(e.target.checked)}
                className="w-4 h-4 accent-blue-500 cursor-pointer rounded"
              />
              <span className="text-[0.78rem] font-medium text-slate-600">Save User</span>
            </label>
            <a href="#" className="text-[0.78rem] font-semibold text-blue-500 hover:text-blue-700 hover:underline transition-colors">
              Forget Password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3.5 mt-1 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white text-[0.92rem] font-bold tracking-wide shadow-lg shadow-blue-200 hover:from-blue-500 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[0.72rem] text-slate-400 font-medium whitespace-nowrap">Don't have an account?</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Sign up row */}
        <p className="text-center text-[0.78rem] text-slate-500 mt-3">
          Contact your administrator to
          <a href="#" className="text-blue-500 font-bold ml-1 hover:underline">get access</a>
        </p>
      </div>
    </div>
  );
};

export default LoginRightPanel;
