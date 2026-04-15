import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import logoImg from '../../assets/images/logo.png';

const COLLAPSED_WIDTH = 64;
const EXPANDED_WIDTH  = 240;

const openedMixin = (theme) => ({
  width: EXPANDED_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  width: COLLAPSED_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: open ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    background: 'linear-gradient(180deg, #1565c0 0%, #1a8de9 55%, #29b6f6 100%)',
    border: 'none',
    boxShadow: '4px 0 24px rgba(26, 111, 212, 0.28)',
    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },
}));

const navItems = [
  { label: 'Dashboard',    icon: <DashboardRoundedIcon sx={{ fontSize: 18 }} />,     active: true },
  { label: 'Patients',     icon: <PeopleAltRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Appointments', icon: <CalendarMonthRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Doctors',      icon: <LocalHospitalRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Reports',      icon: <AssessmentRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Settings',     icon: <SettingsRoundedIcon sx={{ fontSize: 18 }} /> },
];

const Sidebar = () => {
  const theme = useTheme();
  // Open by default — expands automatically; click < to collapse
  const [open, setOpen] = useState(true);

  return (
    <div className="relative flex-shrink-0" style={{ width: open ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}>
      <StyledDrawer variant="permanent" open={open}>

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-3.5 py-4 border-b border-white/10">
          <img src={logoImg} alt="Pari Hospital" className="w-8 h-8 object-contain flex-shrink-0" />
          {open && (
            <span className="text-white font-bold text-[0.92rem] tracking-tight whitespace-nowrap">
              Pari Hospital
            </span>
          )}
        </div>

        {/* Nav items */}
        <List disablePadding sx={{ mt: 1, px: 0.8, flexGrow: 1 }}>
          {navItems.map((item) => (
            <Tooltip
              key={item.label}
              title={!open ? item.label : ''}
              placement="right"
              arrow
            >
              <ListItem disablePadding sx={{ display: 'block', mb: 0.4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 42,
                    borderRadius: '10px',
                    px: 1.4,
                    backgroundColor: item.active ? 'rgba(255,255,255,0.20)' : 'transparent',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' },
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1.4 : 'auto',
                      justifyContent: 'center',
                      color: '#fff !important',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.80rem',
                      fontWeight: item.active ? 700 : 500,
                      fontFamily: 'Poppins, sans-serif',
                      className: '!text-white',
                    }}
                    sx={{
                      opacity: open ? 1 : 0,
                      transition: 'opacity 0.2s',
                      '& .MuiTypography-root': { color: '#fff !important' }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </StyledDrawer>

      {/* Collapse / Expand toggle button — positioned on the right edge */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          position: 'fixed',
          top: '50%',
          left: open ? EXPANDED_WIDTH - 14 : COLLAPSED_WIDTH - 14,
          transform: 'translateY(-50%)',
          zIndex: 1300,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#fff',
          border: '1.5px solid #d1d5db',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: 0,
        }}
      >
        {open
          ? <ChevronLeftRoundedIcon sx={{ fontSize: 18, color: '#475569' }} />
          : <ChevronRightRoundedIcon sx={{ fontSize: 18, color: '#475569' }} />
        }
      </button>
    </div>
  );
};

export default Sidebar;
