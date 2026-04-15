import doctorImg from '../../assets/images/doctor.png';
import waveImg from '../../assets/images/wave.png';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

const WelcomeBanner = () => {
  return (
    <div
      className="relative rounded-xl flex items-stretch overflow-hidden mb-6 shadow-lg"
      style={{
        background: 'linear-gradient(130deg, #1a6fd4 0%, #1a96e9 55%, #37c8f5 100%)',
        minHeight: 280
      }}
    >
      {/* Wave texture overlay */}
      <img
        src={waveImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none select-none rounded-xl"
      />

      {/* Left content column */}
      <div className="relative z-10 flex flex-col justify-between p-7 flex-1">

        {/* Visits for today section */}
        <div className="mb-4">
          <p className="text-white/90 text-[1rem] font-medium mb-1">Visits for Today</p>
          <p className="text-white text-[3.8rem] font-extrabold leading-none tracking-tight">104</p>
        </div>

        {/* Glassmorphism Sub-stats row */}
        <div className="flex gap-4 mt-auto">
          {/* New Patients glass card */}
          <div className="bg-white/25 backdrop-blur-2xl rounded-xl px-5 py-4 flex-1 border border-white/30 shadow-xl max-w-[200px]">
            <p className="text-slate-800 text-[0.75rem] font-bold mb-2">New Patients</p>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 text-[1.6rem] font-extrabold leading-none">40</span>
              <span className="flex items-center gap-0.5 text-[0.68rem] font-bold text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded-full shadow-sm">
                51%
                <TrendingUpRoundedIcon sx={{ fontSize: 13 }} />
              </span>
            </div>
          </div>

          {/* Old Patients glass card */}
          <div className="bg-white/25 backdrop-blur-2xl rounded-xl px-5 py-4 flex-1 border border-white/30 shadow-xl max-w-[200px]">
            <p className="text-slate-800 text-[0.75rem] font-bold mb-2">Old Patients</p>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 text-[1.6rem] font-extrabold leading-none">64</span>
              <span className="flex items-center gap-0.5 text-[0.68rem] font-bold text-rose-500 bg-rose-50/80 px-2 py-0.5 rounded-full shadow-sm">
                20%
                <TrendingDownRoundedIcon sx={{ fontSize: 13 }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right column — Doctor image (contained) */}
      <div className="relative z-10 flex items-end justify-end w-[380px] flex-shrink-0 pr-10">
        <img
          src={doctorImg}
          alt="Doctor"
          className="h-[300px] w-auto object-cover object-bottom drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
