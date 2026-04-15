import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', patients: 120 },
  { day: 'Tue', patients: 145 },
  { day: 'Wed', patients: 135 },
  { day: 'Thu', patients: 168 },
  { day: 'Fri', patients: 152 },
  { day: 'Sat', patients: 185 },
  { day: 'Sun', patients: 178 },
];

const PatientsGrowth = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
      
      {/* Header section — Poppins Heading with toggle */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-slate-800 text-[1.2rem] font-bold font-poppins">Patients Growth</h3>
        
        {/* Styled "Week/Month/Year" toggle group */}
        <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-100">
          <button className="bg-gradient-to-r from-[#4fb9ff] to-[#1e63ff] text-white px-4 py-1.5 rounded-lg text-[0.78rem] font-bold shadow-md transition-all">
            Week
          </button>
          <button className="text-slate-500 px-4 py-1.5 rounded-lg text-[0.78rem] font-bold hover:text-slate-800 transition-all font-sans">
            Month
          </button>
          <button className="text-slate-500 px-4 py-1.5 rounded-lg text-[0.78rem] font-bold hover:text-slate-800 transition-all font-sans">
            Year
          </button>
        </div>
      </div>

      {/* Recharts Area Section — 🏆 High-Fidelity Patient Growth */}
      <div className="flex-1 w-full" style={{ minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <defs>
              <linearGradient id="growth-area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4fb9ff" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#4fb9ff" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeWidth={1} />
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b', fontFamily: 'PT Sans, sans-serif' }}
              dy={15}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b', fontFamily: 'PT Sans, sans-serif' }}
              tickCount={5}
              domain={[0, 200]}
            />
            
            <Tooltip 
              contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '0.85rem' }}
            />
            
            <Area
              type="linear"
              dataKey="patients"
              stroke="#1e63ff"
              strokeWidth={3}
              fill="url(#growth-area-gradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default PatientsGrowth;
