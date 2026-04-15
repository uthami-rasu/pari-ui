import waveImg from '../../assets/images/wave1.png';
import doctorImg from '../../assets/images/login_doctor.png';

const LoginLeftPanel = () => {
  return (
    <div className="relative w-[48%] h-full flex-shrink-0 overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(160deg, #1a5fb4 0%, #1a8de9 55%, #3aafe0 100%)' }}
    >
      {/* Wave overlay */}
      <img
        src={waveImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay pointer-events-none select-none"
      />

      {/* Decorative + signs */}
      <span className="absolute top-16 right-9 text-white/60 text-2xl font-light z-10 select-none">+</span>
      <span className="absolute top-1/2 left-7 -translate-y-1/2 text-white/60 text-2xl font-light z-10 select-none">+</span>

      {/* Heading */}
      <div className="relative z-10 pt-12 px-10">
        <h1 className="text-white text-[1.45rem] font-bold leading-[1.45] tracking-tight">
          Protect Yourself and Your Family —<br />Easy Online Appointments
        </h1>
      </div>

      {/* Doctor image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[78%] max-w-[370px] z-10 flex items-end justify-center">
        <img
          src={doctorImg}
          alt="Doctor"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* Badge — Users */}
      <div className="absolute bottom-[38%] left-4 z-20 flex items-center gap-2.5 bg-white/97 rounded-2xl px-3.5 py-2.5 shadow-xl backdrop-blur-md">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 flex-shrink-0">
          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        </span>
        <span className="text-[0.75rem] font-semibold text-slate-800 whitespace-nowrap">6.3 Million users registered</span>
      </div>

      {/* Badge — Recovery */}
      <div className="absolute bottom-[18%] right-4 z-20 flex items-center gap-2.5 bg-white/97 rounded-2xl px-3.5 py-2.5 shadow-xl backdrop-blur-md">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 flex-shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </span>
        <span className="text-[0.75rem] font-semibold text-slate-800 whitespace-nowrap">98% recovery rate</span>
      </div>
    </div>
  );
};

export default LoginLeftPanel;
