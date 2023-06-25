import { Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Journal from './pages/Journal';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5NF9KLN'
};
TagManager.initialize(tagManagerArgs);

const theme = createTheme({
  palette: {
    background: {
      default: '#FFEEE2'
    },
    text: {
      primary: '#4c4852'
    },
  },
  typography: {
    fontFamily: "'IBM Plex Mono'",
    fontWeight: 400,
    fontSize: 18,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#8CB190',
          textDecoration: 'none',
          '&:hover': {
            color: '#bfd3c1',
            cursor: 'pointer',
          },
        },
      },
    },
  },
});

function App() {
  window.dataLayer.push({
    event: 'pageview'
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="App"
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'], // column layout for small screens, row layout for larger screens
        }}
      >
        <Box
          sx={{
            width: ['100%', '25%'], // full width for small screens, 25% width for larger screens
            paddingTop: '12%',
            paddingLeft: ['10%', '30%'], // 10% padding for small screens, 30% for larger screens
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <NavBar />
        </Box>

        <Box
          className="flex-container"
          id="content"
          sx={{
            width: ['100%', '75%'], // full width for small screens, 75% width for larger screens
            paddingTop: ['0', '10%'], // no padding for small screens, 20% padding for larger screens
            paddingLeft: ['0', '10%'], // no padding for small screens, 25% padding for larger screens
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;