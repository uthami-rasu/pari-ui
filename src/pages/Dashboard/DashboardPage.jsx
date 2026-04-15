import { useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Sidebar       from '../../components/dashboard/Sidebar';
import Topbar        from '../../components/dashboard/Topbar';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import StatsCards    from '../../components/dashboard/StatsCards';
import EmergencyAlert from '../../components/dashboard/EmergencyAlert';
import LiveQueue      from '../../components/dashboard/LiveQueue';
import DoctorAvailability from '../../components/dashboard/DoctorAvailability';
import PatientStatsChart from '../../components/dashboard/PatientStatsChart';
import DepartmentStats   from '../../components/dashboard/DepartmentStats';
import IncomeOverview from '../../components/dashboard/IncomeOverview';
import UpcomingAppointments from '../../components/dashboard/UpcomingAppointments';
import PatientsGrowth from '../../components/dashboard/PatientsGrowth';
import AppointmentAnalytics from '../../components/dashboard/AppointmentAnalytics';
import RecentActivity from '../../components/dashboard/RecentActivity';

const theme = createTheme({
  typography: { fontFamily: 'Poppins, sans-serif' },
});

/* ── Greeting header shown above the blue banner ── */
const GreetingHeader = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  return (
    <div className="mb-2">
      <h2 className="text-slate-800 text-[1.55rem] font-medium tracking-tight">
        {greeting}{' '}
        <span className="text-blue-500 font-bold">Dr. Sarah !</span>
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

            {/* Row 1: Emergency, Queue, and Availability Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pr-4">
              <EmergencyAlert />
              <LiveQueue />
              <DoctorAvailability />
            </div>

            {/* Row 2: Analytics Section — 65/35 split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pr-4">
              <div className="lg:col-span-8">
                <PatientStatsChart />
              </div>
              <div className="lg:col-span-4">
                <DepartmentStats />
              </div>
            </div>

            {/* Row 3: Financial Analytics & Operations — 🏆 High-Fidelity 40/60 Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pr-4">
              <div className="lg:col-span-5">
                <IncomeOverview />
              </div>
              <div className="lg:col-span-7">
                <UpcomingAppointments />
              </div>
            </div>

            {/* Row 4: Growth & Appointment Trends — 🏆 High-Fidelity 50/50 Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-4">
              <div className="lg:col-span-1">
                <PatientsGrowth />
              </div>
              <div className="lg:col-span-1">
                <AppointmentAnalytics />
              </div>
            </div>

            {/* Row 5: Recent Activity Patient Log — 🏆 Full Width High-Fidelity Table */}
            <div className="pr-4 pb-10">
              <RecentActivity />
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardPage;
