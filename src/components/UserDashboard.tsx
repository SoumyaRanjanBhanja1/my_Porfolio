// UserDashboard.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const drawerWidth = 240;

export default function UserDashboard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    setTimeout(() => navigate('/'), 1000);
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get('/api/user/analytics', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAnalyticsData(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        toast.error('Failed to load analytics');
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ToastContainer />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            User Dashboard
          </Typography>
          <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <AccountCircleIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {['Home', 'Orders', 'Account Settings'].map((text) => (
            <ListItem key={text} button component="div">
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}
      >
        <Toolbar />
        <Typography variant="h4" sx={{ mb: 3 }}>Welcome Back!</Typography>

        <Grid container spacing={3} component="div">
          <Grid item xs={12} md={6} component="div">
            <Card>
              <CardContent>
                <Typography variant="h6">Spending Overview</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="spend" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} component="div">
            <Card>
              <CardContent>
                <Typography variant="h6">Profile Summary</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>Name: Soumya Ranjan Bhanja</Typography>
                <Typography variant="body1">Email: user@example.com</Typography>
                <Typography variant="body1">Member since: Jan 2024</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}