// AdminDashboard.tsx

import { useEffect, useRef, useState, MouseEvent } from 'react';
import {
  AppBar, Toolbar, Typography, CssBaseline, Drawer,
  List, ListItem, ListItemText, Box, IconButton,
  Menu, MenuItem, CircularProgress
} from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

interface Message {
  _id?: string;
  name: string;
  email: string;
  message: string;
}

// 3D Rotating Cube
function RotatingCube(): JSX.Element {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      mesh.current.rotation.x = time / 2;
      mesh.current.rotation.y = time / 1.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

// Neon Glow Animation
const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  }
  50% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 50px #00ffff;
  }
`;

export default function AdminDashboard(): JSX.Element {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    setTimeout(() => navigate('/'), 1000);
  };

  const handleAvatarClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Message[]>('http://localhost:5000/api/admin/messages', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessages(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      toast.error('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <ToastContainer />

      {/* Top AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
          <IconButton onClick={handleAvatarClick} color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
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
          {['Dashboard', 'Users', 'Settings'].map((text) => (
            <ListItem key={text} button component="li">
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Dashboard Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#121212',
          color: '#00ffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />

        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            animation: `${glow} 3s ease-in-out infinite`,
            textAlign: 'center',
            letterSpacing: '0.1em',
          }}
        >
          Welcome, Soumya Ranjan Bhanja!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 4,
            maxWidth: 600,
            mx: 'auto',
            color: '#00ffffaa',
            fontStyle: 'italic',
          }}
        >
          I have built a modern, full-stack <strong>eShopping project</strong> with seamless user experience and powerful features.
        </Typography>

        {/* Search Input */}
        <Box sx={{ mb: 2 }}>
          <input
            type="text"
            placeholder="Search by name, email or message"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #00ffff33',
              backgroundColor: '#1e1e1e',
              color: '#00ffff',
            }}
          />
        </Box>

        {/* Messages List */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            User Messages
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CircularProgress color="info" />
            </Box>
          ) : filteredMessages.length === 0 ? (
            <Typography>No messages found.</Typography>
          ) : (
            filteredMessages.map((msg) => (
              <Box
                key={msg._id ?? `${msg.name}-${msg.email}`}
                sx={{
                  mb: 2,
                  p: 2,
                  border: '1px solid #00ffff33',
                  borderRadius: 2,
                }}
              >
                <Typography variant="subtitle1"><strong>Name:</strong> {msg.name}</Typography>
                <Typography variant="subtitle2"><strong>Email:</strong> {msg.email}</Typography>
                <Typography variant="body1"><strong>Message:</strong> {msg.message}</Typography>
              </Box>
            ))
          )}
        </Box>

        {/* 3D Canvas */}
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 5,
          }}
        >
          <Canvas
            camera={{ position: [5, 5, 5], fov: 50 }}
            style={{ width: '100%', height: '100%', background: '#000' }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <RotatingCube />
          </Canvas>
        </Box>
      </Box>
    </Box>
  );
}
