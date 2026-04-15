import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const data = [
  { day: 'Mon', completed: 32, cancelled: 8 },
  { day: 'Tue', completed: 28, cancelled: 12 },
  { day: 'Wed', completed: 35, cancelled: 6 },
  { day: 'Thu', completed: 42, cancelled: 10 },
  { day: 'Fri', completed: 38, cancelled: 14 },
  { day: 'Sat', completed: 25, cancelled: 5 },
  { day: 'Sun', completed: 18, cancelled: 4 },
];

const AppointmentAnalytics = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
      
      {/* Header section — Poppins Heading */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-800 text-[1.2rem] font-bold font-poppins">Appointment Analytics</h3>
        
        {/* Styled "Last 7 days" gradient button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#4fb9ff] via-[#3592ff] to-[#1e63ff] text-white px-5 py-2.5 rounded-xl text-[0.85rem] font-bold shadow-lg hover:brightness-110 transition-all font-sans">
          Last 7 days
          <ExpandMoreRoundedIcon sx={{ fontSize: 20, color: 'white' }} />
        </button>
      </div>

      {/* Recharts Bar Section — 🏆 High-Fidelity Grouped Analytics */}
      <div className="flex-1 w-full relative" style={{ minHeight: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 20 }}>
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
              domain={[0, 50]}
            />
            
            <Tooltip 
              contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '0.85rem' }}
              cursor={{ fill: '#f8fafc' }}
            />
            
            <Legend 
              verticalAlign="top" 
              align="right"
              iconType="square"
              iconSize={12}
              formatter={(value) => (
                <span style={{ color: '#475569', fontWeight: '600', fontSize: '12.5px', marginLeft: '6px', fontFamily: 'PT Sans, sans-serif' }}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              )}
              wrapperStyle={{ paddingBottom: '30px', top: 0 }}
            />
            
            <Bar 
              dataKey="completed" 
              fill="#22c55e" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
            
            <Bar 
              dataKey="cancelled" 
              fill="#ef4444" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AppointmentAnalytics;
