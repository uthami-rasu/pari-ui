import doctorImg from '../../assets/images/doctor.png';
import waveImg from '../../assets/images/wave.png';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

const WelcomeBanner = ({ name = 'Dr. Sarah' }) => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex items-stretch"
      style={{ background: 'linear-gradient(130deg, #1a6fd4 0%, #1a96e9 55%, #37c8f5 100%)', minHeight: 220 }}
    >
      {/* Wave texture */}
      <img
        src={waveImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none select-none"
      />

      {/* Left content */}
      <div className="relative z-10 flex flex-col justify-between p-7 flex-1">

        {/* Visits for today */}
        <div className="mb-4">
          <p className="text-white text-[1.1rem] font-medium mb-2 opacity-95">Visits for Today</p>
          <p className="text-white text-[4rem] font-extrabold leading-none tracking-tight">104</p>
        </div>

        {/* Sub-stats row */}
        <div className="flex gap-5 mt-1">
          {/* New Patients card */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl px-6 py-5 flex-1 shadow-[0_8px_32px_rgba(0,0,0,0.1) max-w-[250px]">
            <p className="text-slate-900 text-[0.85rem] font-bold mb-3">New Patients</p>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 text-[1.8rem] font-extrabold leading-none">40</span>
              <span className="flex items-center gap-1 text-[0.75rem] font-bold text-emerald-600 bg-[#e6f4ea] px-3 py-1.5 rounded-2xl shadow-sm">
                51%
                <TrendingUpRoundedIcon sx={{ fontSize: 16 }} />
              </span>
            </div>
          </div>
          {/* Old Patients card */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl px-6 py-5 flex-1 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-[250px]">
            <p className="text-slate-900 text-[0.85rem] font-bold mb-3">Old Patients</p>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 text-[1.8rem] font-extrabold leading-none">64</span>
              <span className="flex items-center gap-1 text-[0.75rem] font-bold text-rose-500 bg-[#fce8e6] px-3 py-1.5 rounded-2xl shadow-sm">
                20%
                <TrendingDownRoundedIcon sx={{ fontSize: 16 }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right — Doctor image */}
      <div className="relative z-10 flex items-end justify-end w-[280px] flex-shrink-0 pr-4">
        <img
          src={doctorImg}
          alt="Doctor"
          className="h-[210px] w-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
