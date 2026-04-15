import {
  AreaChart, Area,
  LineChart, Line,
  XAxis,
  Tooltip, ResponsiveContainer,
} from 'recharts';
import TrendingUpRoundedIcon   from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import NorthEastRoundedIcon    from '@mui/icons-material/NorthEastRounded';

import personOutlineImg from '../../assets/images/person-outline.png';
import component1Img    from '../../assets/images/Component 1.png';

const weekData = [
  { day: 'Sa', doctors: 32, patients: 45 },
  { day: 'Su', doctors: 48, patients: 35 },
  { day: 'Mo', doctors: 25, patients: 55 },
  { day: 'Tu', doctors: 42, patients: 30 },
  { day: 'We', doctors: 38, patients: 60 },
  { day: 'Th', doctors: 55, patients: 42 },
  { day: 'Fr', doctors: 45, patients: 50 },
];

const incomeData = [
  { v: 30 }, { v: 55 }, { v: 35 }, { v: 75 }, { v: 45 }, { v: 85 }, { v: 65 }
];
const outcomeData = [
  { v: 50 }, { v: 35 }, { v: 65 }, { v: 42 }, { v: 75 }, { v: 38 }, { v: 60 }
];

const StatBadge = ({ up, value }) => (
  <span className={`flex items-center gap-1 text-[0.72rem] font-bold ${up ? 'text-emerald-500' : 'text-rose-500'}`}>
    {up ? <TrendingUpRoundedIcon sx={{ fontSize: 13 }} /> : <TrendingDownRoundedIcon sx={{ fontSize: 13 }} />}
    {value}%
  </span>
);

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">

      {/* ─────── Total Doctors ─────── */}
      <div className="bg-white rounded-[1.8rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between min-h-[160px]">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center">
            <img src={personOutlineImg} alt="" className="w-6 h-6 object-contain" />
          </div>
          <div className="text-rose-400 flex items-center gap-0.5 text-[0.75rem] font-bold mt-1">
            <NorthEastRoundedIcon sx={{ fontSize: 14 }} /> 80
          </div>
        </div>
        <div className="mt-4">
          <p className="text-slate-400 text-[0.78rem] font-medium mb-1">Total Doctors</p>
          <div className="flex items-end justify-between">
            <h3 className="text-rose-400 text-[1.8rem] font-extrabold leading-none">500+</h3>
            <div className="flex gap-2">
              <StatBadge up value={95} />
              <StatBadge up={false} value={25} />
            </div>
          </div>
        </div>
      </div>

      {/* ─────── Total Patients ─────── */}
      <div className="bg-white rounded-[1.8rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between min-h-[160px]">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center">
            <img src={component1Img} alt="" className="w-6 h-6 object-contain ml-0.5" />
          </div>
          <div className="text-sky-400 flex items-center gap-0.5 text-[0.75rem] font-bold mt-1">
            <NorthEastRoundedIcon sx={{ fontSize: 14 }} /> 80
          </div>
        </div>
        <div className="mt-4">
          <p className="text-slate-400 text-[0.78rem] font-medium mb-1">Total Patients</p>
          <div className="flex items-end justify-between">
            <h3 className="text-sky-400 text-[1.8rem] font-extrabold leading-none">800+</h3>
            <div className="flex gap-2">
              <StatBadge up value={65} />
              <StatBadge up={false} value={25} />
            </div>
          </div>
        </div>
      </div>

      {/* ─────── Doctors vs Patients Line Chart ─────── */}
      <div className="bg-white rounded-[1.8rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col min-h-[160px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-slate-700 text-[0.78rem] font-semibold">Doctors</span>
          </div>
          <div className="flex items-center gap-1.5 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-slate-700 text-[0.78rem] font-semibold">Patients</span>
          </div>
        </div>
        <div className="flex-1 mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weekData}>
              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <Tooltip
                contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontSize: '0.75rem' }}
              />
              <Line type="monotone" dataKey="doctors" stroke="#4ade80" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="patients" stroke="#3b82f6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ─────── Income vs Outcome Area Chart ─────── */}
      <div className="bg-white rounded-[1.8rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col min-h-[160px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="text-slate-700 text-[0.78rem] font-semibold">Income</span>
          </div>
          <div className="flex items-center gap-1.5 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="text-slate-700 text-[0.78rem] font-semibold">Outcome</span>
          </div>
        </div>
        <div className="flex-1 mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="outcomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontSize: '0.75rem' }}
              />
              <Area
                data={incomeData}
                type="monotone"
                dataKey="v"
                stroke="#4f46e5"
                strokeWidth={2.5}
                fill="url(#incomeGrad)"
              />
              <Area
                data={outcomeData}
                type="monotone"
                dataKey="v"
                stroke="#f43f5e"
                strokeWidth={2.5}
                fill="url(#outcomeGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default StatsCards;
