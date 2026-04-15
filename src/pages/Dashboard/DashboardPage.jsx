import { useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Sidebar       from '../../components/dashboard/Sidebar';
import Topbar        from '../../components/dashboard/Topbar';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import StatsCards    from '../../components/dashboard/StatsCards';

const theme = createTheme({
  typography: { fontFamily: 'Poppins, sans-serif' },
});

/* ── Greeting header shown above the blue banner ── */
const GreetingHeader = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  return (
    <div>
      <p className="text-slate-400 text-[0.78rem] font-medium mb-0.5">{greeting}</p>
      <h2 className="text-slate-800 text-[1.3rem] font-extrabold tracking-tight leading-tight">
        {greeting}{' '}
        <span className="text-blue-500">Dr. Sarah !</span>
      </h2>
    </div>
  );
};

const DashboardPage = () => {
  const location  = useLocation();
  const role      = location.state?.role  || 'doctor';
  const roleLabel = role === 'doctor' ? 'Doctor' : 'Staff';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#f5f7fb' }}>

        {/* Sidebar — manages its own open/closed state */}
        <Sidebar />

        {/* Main area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

          {/* Topbar */}
          <Topbar name="Dr. Sarah Johnson" role={`${roleLabel} · Administrator`} />

          {/* Scrollable page content */}
          <div className="flex-1 overflow-y-auto px-8 py-7 flex flex-col gap-8">

            {/* Greeting — sits ABOVE the blue banner */}
            <GreetingHeader />

            {/* Blue banner */}
            <WelcomeBanner />

            {/* Stat cards — slightly narrower */}
            <div className="pr-4">
              <StatsCards />
            </div>

            {/* Added some bottom padding for scroll space */}
            <div className="h-4" />
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardPage;
