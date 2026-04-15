import {
  AreaChart, Area,
  LineChart, Line,
  XAxis,
  Tooltip, ResponsiveContainer,
} from 'recharts';
import TrendingUpRoundedIcon   from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import NorthEastRoundedIcon    from '@mui/icons-material/NorthEastRounded';
import ArrowDropUpIcon        from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon      from '@mui/icons-material/ArrowDropDown';

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

const chartData = [
  { name: 'A', income: 30, outcome: 50 },
  { name: 'B', income: 55, outcome: 35 },
  { name: 'C', income: 35, outcome: 65 },
  { name: 'D', income: 75, outcome: 42 },
  { name: 'E', income: 45, outcome: 75 },
  { name: 'F', income: 85, outcome: 38 },
  { name: 'G', income: 65, outcome: 60 },
];

const StatBadge = ({ up, value }) => (
  <span className={`flex items-center gap-0.5 text-[0.7rem] font-bold ${up ? 'text-green-500' : 'text-red-500'}`}>
    {up ? (
      <ArrowDropUpIcon sx={{ fontSize: 30, mr: -0.5, ml: -0.5 }} />
    ) : (
      <ArrowDropDownIcon sx={{ fontSize: 30, mr: -0.5, ml: -0.5 }} />
    )}
  <span className='text-black'>  {value}%</span>
  </span>
);

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">

      {/* ─────── Total Doctors ─────── */}
      <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[160px]"
      style={{boxShadow:"10px 10px 25px rgba(0,0,0,0.06) !important"}}
      >
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl  flex items-center justify-center">
            <img src={personOutlineImg} alt="" className="w-10 h-10 object-cover" />
          </div>
          <div className="text-red-500 flex items-center  gap-1 text-[1rem] font-bold mt-1">
            <NorthEastRoundedIcon sx={{ fontSize: 20 }} />  <span className='text-black'>80</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-slate-900 text-[0.78rem] font-bold mb-1">Total Doctors</p>
          <div className="flex items-end justify-between">
            <h3 className="text-red-500 text-[1.8rem] font-bold leading-none">500+</h3>
            <div className="flex gap-2">
              <StatBadge up value={95} />
              <StatBadge up={false} value={25} />
            </div>
          </div>
        </div>
      </div>

      {/* ─────── Total Patients ─────── */}
      <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[160px]">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
            <img src={component1Img} alt="" className="w-10 h-10 object-cover" />
          </div>
          <div className="text-blue-500 flex items-center gap-1 text-[1rem] font-bold mt-1">
            <NorthEastRoundedIcon sx={{ fontSize: 20 }} /> <span className='text-black'>80</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-slate-900 text-[0.78rem] font-bold mb-1">Total Patients</p>
          <div className="flex items-end justify-between">
            <h3 className="text-blue-500 text-[1.8rem] font-bold leading-none">800+</h3>
            <div className="flex gap-2">
              <StatBadge up value={65} />
              <StatBadge up={false} value={25} />
            </div>
          </div>
        </div>
      </div>

      {/* ─────── Doctors vs Patients Line Chart ─────── */}
      <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col min-h-[160px]">
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
      <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col min-h-[160px]">
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
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
                type="monotone"
                dataKey="income"
                stroke="#4f46e5"
                strokeWidth={2.5}
                fill="url(#incomeGrad)"
                dot={false}
              />
              <Area
                type="monotone"
                dataKey="outcome"
                stroke="#f43f5e"
                strokeWidth={2.5}
                fill="url(#outcomeGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default StatsCards;
