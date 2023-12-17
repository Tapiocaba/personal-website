import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Journal from './pages/Journal';
import NotFound from './pages/NotFound';
import Archive from './pages/Archive';
import HanfuPhotos from './pages/journalpages/HanfuPhotos';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import NavBar from './components/NavBar';

import TagManager from 'react-gtm-module';
import { Analytics } from '@vercel/analytics/react';

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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#FFEEE2',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bfd3c1', // a lighter color
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#8CB190', // change color on hover
          },
        },
      },
    },
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
      <Analytics />
      <CssBaseline />
      <Grid container style = {{
          marginTop: '10%', 
          }}>
        <Grid item xs={12} sm={3} style={{
          position: 'fixed', 
          marginLeft: '27%', 
          }}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sm={9} style={{marginLeft: '35%', marginRight: '25%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/archive" element={<Archive /> } />
            <Route path="/hanfu-photos" element={<HanfuPhotos /> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  
    );
}

export default App;