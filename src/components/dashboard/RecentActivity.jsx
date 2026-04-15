import { Avatar, IconButton } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const activities = [
  { id: 'PT-2847', patient: 'Emma Wilson', doctor: 'Dr. Michael Chen', dept: 'Cardiology', time: '10:30 AM', status: 'Completed', color: 'bg-emerald-50 text-emerald-600', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60' },
  { id: 'PT-2848', patient: 'James Anderson', doctor: 'Dr. Sarah Johnson', dept: 'Neurology', time: '11:00 AM', status: 'In Progress', color: 'bg-blue-50 text-blue-600', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60' },
  { id: 'PT-2849', patient: 'Sophia Martinez', doctor: 'Dr. Robert Lee', dept: 'Pediatrics', time: '11:30 AM', status: 'Waiting', color: 'bg-amber-50 text-amber-600', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60' },
  { id: 'PT-2850', patient: 'William Brown', doctor: 'Dr. Emily Davis', dept: 'Orthopedics', time: '12:00 PM', status: 'Waiting', color: 'bg-amber-50 text-amber-600', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60' },
  { id: 'PT-2851', patient: 'Olivia Taylor', doctor: 'Dr. David Wilson', dept: 'Dermatology', time: '12:30 PM', status: 'Completed', color: 'bg-emerald-50 text-emerald-600', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60' },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col w-full min-h-[500px]">
      
      {/* Header section — Poppins Heading */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-slate-800 text-[1.4rem] font-bold font-poppins">Recent Activity</h3>
        
        {/* View All Button with Project Gradient */}
        <button className="bg-gradient-to-r from-[#4fb9ff] via-[#3592ff] to-[#1e63ff] text-white px-6 py-2 rounded-xl text-[0.85rem] font-bold shadow-md hover:brightness-110 transition-all font-sans">
          View All
        </button>
      </div>

      {/* Table Section — 🏥 High-Fidelity Patient Log */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-50 text-left">
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans">Patient</th>
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans">Doctor</th>
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans">Department</th>
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans">Time</th>
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans text-center">Status</th>
              <th className="pb-4 text-[0.85rem] font-bold text-slate-400 uppercase tracking-wider font-sans text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {activities.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                {/* Patient Info */}
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <Avatar 
                      src={row.img} 
                      sx={{ width: 44, height: 44, borderRadius: '12px', bgcolor: 'slate.100' }}
                    />
                    <div>
                      <h4 className="text-slate-900 text-[0.95rem] font-bold font-poppins leading-tight">{row.patient}</h4>
                      <p className="text-slate-400 text-[0.75rem] font-medium leading-none mt-1">ID: {row.id}</p>
                    </div>
                  </div>
                </td>

                <td className="py-4 text-slate-600 text-[0.9rem] font-semibold">{row.doctor}</td>
                <td className="py-4 text-slate-600 text-[0.9rem] font-medium">{row.dept}</td>
                <td className="py-4 text-slate-600 text-[0.9rem] font-medium">{row.time}</td>

                {/* Status Chip */}
                <td className="py-4 text-center">
                  <span className={`px-4 py-1.5 rounded-xl text-[0.75rem] font-bold inline-block min-w-[100px] ${row.color}`}>
                    {row.status}
                  </span>
                </td>

                {/* Action Icon */}
                <td className="py-4 text-center">
                  <IconButton sx={{ color: '#3592ff', bgcolor: '#3592ff10', p: 1, '&:hover': { bgcolor: '#3592ff20' } }}>
                    <VisibilityRoundedIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Section — 🏆 Pagination & Stats */}
      <div className="mt-auto pt-10 flex items-center justify-between">
        <p className="text-slate-500 text-[0.85rem] font-medium font-sans">
          Showing <span className="font-bold text-slate-800">1-6</span> of <span className="font-bold text-slate-800">24</span> patients
        </p>

        <div className="flex items-center gap-2">
          {/* Pagination Buttons */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
            <ChevronLeftRoundedIcon />
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-[0.85rem] shadow-blue-200 shadow-lg">
            1
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-100 text-slate-500 font-bold text-[0.85rem] hover:bg-slate-50">
            2
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-100 text-slate-500 font-bold text-[0.85rem] hover:bg-slate-50">
            3
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
            <ChevronRightRoundedIcon />
          </button>
        </div>
      </div>

    </div>
  );
};

export default RecentActivity;
