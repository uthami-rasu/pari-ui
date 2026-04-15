const queueData = [
  { id: 1, name: 'John Martinez', type: 'Cardiology Check-up', time: 'Now', color: 'bg-blue-500' },
  { id: 2, name: 'Emily Chen', type: 'ECG Test', time: '10:30', color: 'bg-slate-500' },
  { id: 3, name: 'David Wilson', type: 'Follow-up', time: '11:00', color: 'bg-slate-500' },
];

const LiveQueue = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col h-full min-h-[300px]">
      
      {/* Header section */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-slate-800 text-[1.2rem] font-bold font-poppins">Live Queue</h3>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-slate-500 text-[0.82rem] font-semibold">Live</span>
        </div>
      </div>

      {/* Queue list */}
      <div className="space-y-4">
        {queueData.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${item.time === 'Now' ? 'bg-blue-50/50 border border-blue-100' : 'bg-slate-50/50 border border-slate-100 opacity-60'}`}
          >
            <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-[0.9rem]`}>
              {item.id}
            </div>
            
            <div className="flex-1">
              <h4 className="text-slate-900 text-[0.95rem] font-bold leading-none mb-1.5 font-poppins">{item.name}</h4>
              <p className="text-slate-500 text-[0.78rem] font-medium leading-none">{item.type}</p>
            </div>
            
            <div className={`text-[0.82rem] font-bold ${item.time === 'Now' ? 'text-blue-600' : 'text-slate-700'}`}>
              {item.time}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LiveQueue;
