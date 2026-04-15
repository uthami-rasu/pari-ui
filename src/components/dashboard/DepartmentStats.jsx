import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Cardiology', value: 32, color: '#103e8e' },
  { name: 'Neurology', value: 24, color: '#22c55e' },
  { name: 'Orthopedics', value: 10, color: '#f59e0b' },
  { name: 'Pediatrics', value: 18, color: '#8b5cf6' },
  { name: 'Others', value: 16, color: '#ec4899' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  // Precision centering logic — using Poppins font as per latest update
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="central" 
      className="text-[0.75rem] font-bold"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DepartmentStats = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
      
      {/* Header section — Poppins Heading */}
      <h3 className="text-slate-800 text-[1.2rem] font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Department Distribution
      </h3>

      {/* Recharts Donut Section — 🏆 Precision Refinement with new Poppins font */}
      <div className="flex-1 w-full relative" style={{ minHeight: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius="60%" // Thinner ratio for a modern look
              outerRadius="95%"
              paddingAngle={0}
              dataKey="value"
              stroke="#fff"
              strokeWidth={1}
              labelLine={false}
              label={renderCustomizedLabel}
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            
            <Tooltip 
              contentStyle={{ 
                border: 'none', 
                borderRadius: '12px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                fontSize: '0.85rem',
                fontFamily: 'Poppins, sans-serif'
              }}
            />
            
            <Legend 
              verticalAlign="bottom" 
              align="center"
              layout="horizontal"
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ color: '#64748b', fontWeight: '600', fontSize: '13px', marginLeft: '6px', fontFamily: 'Poppins, sans-serif' }}>
                  {value}
                </span>
              )}
              wrapperStyle={{ paddingBottom: '0px', paddingTop: '10px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default DepartmentStats;
