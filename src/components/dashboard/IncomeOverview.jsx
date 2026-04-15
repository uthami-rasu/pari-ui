import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const data = [
  { month: 'Jan', income: 45000, trend: 42000 },
  { month: 'Feb', income: 52000, trend: 48000 },
  { month: 'Mar', income: 48000, trend: 52000 },
  { month: 'Apr', income: 61000, trend: 58000 },
  { month: 'May', income: 58000, trend: 64000 },
  { month: 'Jun', income: 68000, trend: 70000 },
  { month: 'Jul', income: 72000, trend: 75000 },
];

const IncomeOverview = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[450px]">
      
      {/* Header section — Poppins Heading */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-slate-800 text-[1.2rem] font-bold font-poppins">Income Overview</h3>
        
        {/* Styled "Last 6 Months" gradient button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#4fb9ff] via-[#3592ff] to-[#1e63ff] text-white px-5 py-2.5 rounded-xl text-[0.88rem] font-bold shadow-lg hover:brightness-110 transition-all font-sans">
          Last 6 Months
          <ExpandMoreRoundedIcon sx={{ fontSize: 20, color: 'white' }} />
        </button>
      </div>

      {/* Recharts Composed Section — 🏆 High-Fidelity Dual Axis Chart */}
      <div className="flex-1 w-full" style={{ minHeight: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: -10, left: -20, bottom: 20 }}>
            <defs>
              <linearGradient id="income-bar-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4fb9ff" />
                <stop offset="50%" stopColor="#3592ff" />
                <stop offset="100%" stopColor="#1e63ff" />
              </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b', fontFamily: 'PT Sans, sans-serif' }}
              dy={15}
            />
            
            <YAxis 
              yAxisId="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fontWeight: 500, fill: '#64748b', fontFamily: 'PT Sans, sans-serif' }}
              tickFormatter={(v) => `${v / 1000}k`}
              domain={[0, 80000]}
              tickCount={5}
            />

            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fontWeight: 500, fill: '#64748b', fontFamily: 'PT Sans, sans-serif' }}
              tickFormatter={(v) => `${v / 1000}k`}
              domain={[40000, 80000]}
              tickCount={5}
            />
            
            <Tooltip 
              contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '0.85rem' }}
            />
            
            <Bar 
              yAxisId="left"
              dataKey="income" 
              fill="url(#income-bar-gradient)" 
              radius={[6, 6, 0, 0]} 
              barSize={40}
            />

            <Line
              yAxisId="right"
              type="linear"
              dataKey="trend"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
              animationDuration={1500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default IncomeOverview;
