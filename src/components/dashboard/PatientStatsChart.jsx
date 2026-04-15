import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const data = [
  { day: 'Mon', patients: 185 },
  { day: 'Tue', patients: 210 },
  { day: 'Wed', patients: 248 },
  { day: 'Thu', patients: 210 },
  { day: 'Fri', patients: 235 },
  { day: 'Sat', patients: 190 },
  { day: 'Sun', patients: 248 },
];

const PatientStatsChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
      
      {/* Header section */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-slate-800 text-[1.2rem] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Patient Statistics
        </h3>
        
        {/* Styled "Last 7 days" three-color gradient button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#4fb9ff] via-[#3592ff] to-[#1e63ff] text-white px-5 py-2.5 rounded-xl text-[0.88rem] font-bold shadow-lg hover:brightness-110 transition-all font-sans">
          Last 7 days
          <ExpandMoreRoundedIcon sx={{ fontSize: 20, color: 'white' }} />
        </button>
      </div>

      {/* Recharts Section — 🏆 High-Fidelity Glass Chart with Poppins font */}
      <div className="flex-1 w-full" style={{ minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <defs>
              <linearGradient id="area-glass-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeWidth={1} />
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b', fontFamily: 'Poppins, sans-serif' }}
              dy={15}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b', fontFamily: 'Poppins, sans-serif' }}
              tickCount={6}
            />
            
            <Tooltip 
              contentStyle={{ 
                border: 'none', 
                borderRadius: '12px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                fontSize: '0.85rem',
                fontFamily: 'Poppins, sans-serif'
              }}
              cursor={{ stroke: '#38bdf8', strokeWidth: 1.5, strokeDasharray: '4 4' }}
            />
            
            <Area
              type="linear"
              dataKey="patients"
              stroke="#1e63ff"
              strokeWidth={3}
              fill="url(#area-glass-gradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default PatientStatsChart;
