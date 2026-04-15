import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import doctorAvatar from '../../assets/images/doctor.png'; // Using existing asset as placeholder if needed

const EmergencyAlert = () => {
  return (
    <div className="bg-[#ee4036] rounded-xl p-6 text-white shadow-[0_0_25px_rgba(238,64,54,0.2)] flex flex-col h-full min-h-[300px]">
      
      {/* Header section */}
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
          <ReportProblemRoundedIcon sx={{ fontSize: 32 }} />
        </div>
        <div>
          <h3 className="text-[1.3rem] font-bold leading-tight font-poppins">Emergency Alert</h3>
          <p className="text-white/80 text-[0.85rem] font-medium mt-0.5">Immediate attention required</p>
        </div>
      </div>

      {/* Patient Sub-card */}
      <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/10 mt-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200">
            <img 
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60" 
              alt="Michael Chen" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold font-poppins">Michael Chen</h4>
            <p className="text-white/70 text-[0.78rem] font-medium">Room 304 • ICU</p>
          </div>
        </div>
        
        <div className="bg-black/10 rounded-xl p-4">
          <p className="text-white text-[0.88rem] font-medium leading-relaxed">
            Critical vitals detected - BP: 180/120
          </p>
        </div>
      </div>

    </div>
  );
};

export default EmergencyAlert;
