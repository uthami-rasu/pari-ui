import { Avatar } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const appointments = [
  { id: 1, name: 'Robert Smith', type: 'Routine Check-up', time: '10:00 AM', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Lisa Anderson', type: 'ECG Test', time: '11:30 AM', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Tom Williams', type: 'Follow-up Visit', time: '2:00 PM', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60' },
  { id: 4, name: 'Tom Williams', type: 'Follow-up Visit', time: '2:00 PM', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60' },
];

const UpcomingAppointments = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[450px]">
      
      {/* Header section — Poppins Heading */}
      <h3 className="text-slate-800 text-[1.2rem] font-bold mb-8 font-poppins">Today's Appointments</h3>

      {/* Appointment List */}
      <div className="space-y-4 overflow-y-auto pr-2">
        {appointments.map((appt) => (
          <div 
            key={appt.id} 
            className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50 transition-all hover:shadow-md hover:bg-white"
          >
            {/* Patient Info */}
            <div className="flex items-center gap-4">
              <Avatar 
                src={appt.img} 
                variant="rounded" 
                sx={{ width: 56, height: 56, borderRadius: '14px' }}
              />
              <div>
                <h4 className="text-slate-900 text-[1rem] font-bold font-poppins leading-none mb-2">{appt.name}</h4>
                <p className="text-slate-500 text-[0.8rem] font-medium leading-none mb-2">{appt.type}</p>
                <div className="flex items-center gap-1 text-[#64748b]">
                  <AccessTimeRoundedIcon sx={{ fontSize: 16 }} />
                  <span className="text-[0.78rem] font-semibold">{appt.time}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-emerald-500 text-white px-8 py-2.5 rounded-xl text-[0.88rem] font-bold shadow-lg shadow-emerald-500/10 hover:bg-emerald-600 transition-all">
                Accept
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-2.5 rounded-xl text-[0.88rem] font-bold hover:bg-slate-50 transition-all shadow-sm">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UpcomingAppointments;
