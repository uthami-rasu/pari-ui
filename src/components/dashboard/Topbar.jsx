import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Badge from '@mui/material/Badge';
import doctorImg from '../../assets/images/doctor.png';

const Topbar = ({ name = 'Dr. Sarah Johnson', role = 'Administrator' }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-100 shadow-sm z-10">

      {/* Page title */}
      <h1 className="text-[1.1rem] font-bold text-slate-800 tracking-tight">Dashboard</h1>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 w-52">
          <SearchRoundedIcon sx={{ fontSize: 17, color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Type to search"
            className="bg-transparent text-[0.8rem] text-slate-600 placeholder-slate-400 outline-none w-full font-[Poppins]"
          />
        </div>

        {/* Notification bell */}
        <Badge
          badgeContent={3}
          color="error"
          sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem', minWidth: 16, height: 16 } }}
        >
          <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
            <NotificationsNoneRoundedIcon sx={{ fontSize: 19, color: '#475569' }} />
          </div>
        </Badge>

        {/* User profile */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            src={doctorImg}
            alt={name}
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-blue-100"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[0.8rem] font-bold text-slate-800">{name}</span>
            <span className="text-[0.68rem] text-slate-400 font-medium">{role}</span>
          </div>
          <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
