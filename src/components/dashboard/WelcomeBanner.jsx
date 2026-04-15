import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import doctorImg from '../../assets/images/doctor.png';

const WelcomeBanner = () => {
  return (
    <div className="relative mb-12"> {/* High-fidelity spacing to allow for doctor overflow */}
      
      {/* ── Main Banner Card ── */}
      <div 
        className="relative rounded-[2rem] min-h-[290px] flex items-center overflow-visible shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #a5f3fc 0%, #38bdf8 50%, #0284c7 100%)',
        }}
      >
        {/* Elegant Waveform Background Overlay (SVG) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-[2rem]">
          <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path 
              d="M0,150 Q250,50 500,150 T1000,150" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              className="opacity-40"
            />
            <path 
              d="M0,170 Q250,70 500,170 T1000,170" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.5"
              className="opacity-30"
            />
            <path 
              d="M0,190 Q250,90 500,190 T1000,190" 
              fill="none" 
              stroke="white" 
              strokeWidth="1"
              className="opacity-20"
            />
          </svg>
        </div>

        {/* Left Content Column */}
        <div className="relative z-10 flex flex-col justify-center p-10 flex-1">
          <div className="mb-8">
            <h4 className="text-slate-800 text-[1.2rem] font-bold mb-1 font-poppins">Visits for Today</h4>
            <h2 className="text-slate-900 text-[3rem] font-black leading-none font-medium tracking-tight font-poppins">104</h2>
          </div>

          {/* White Glass Sub-cards Section */}
          <div className="flex gap-6">
            
            {/* New Patients Glass Card */}
            <div className="bg-white/45 backdrop-blur-2xl rounded-2xl p-5 border border-white/40 shadow-xl min-w-[190px]">
              <p className="text-slate-700 text-[0.85rem] font-bold mb-2 font-sans">New Patients</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-900 text-[1.8rem] font-black leading-none font-medium font-poppins">40</span>
                <span className="flex items-center gap-0.5 text-[0.75rem] font-bold text-emerald-600 bg-emerald-400/20 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  51% <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
                </span>
              </div>
            </div>

            {/* Old Patients Glass Card */}
            <div className="bg-white/45 backdrop-blur-2xl rounded-2xl p-5 border border-white/40 shadow-xl min-w-[190px]">
              <p className="text-slate-700 text-[0.85rem] font-bold mb-2 font-sans">Old Patients</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-900 text-[1.8rem] font-black font-medium leading-none font-poppins">64</span>
                <span className="flex items-center gap-0.5 text-[0.75rem] font-bold text-rose-500 bg-rose-400/20 px-2.5 py-1 rounded-full border border-rose-400/20">
                  20% <TrendingDownRoundedIcon sx={{ fontSize: 14 }} />
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section — 🤵 THE OVERFLOW DOCTOR */}
        <div className="relative flex-shrink-0 w-[450px] self-stretch pointer-events-none ">
          <img 
            src={doctorImg}
            alt="Doctor"
            className="absolute -top-24 right-0 h-[385px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] "
          />
        </div>

      </div>
    </div>
  );
};

export default WelcomeBanner;
