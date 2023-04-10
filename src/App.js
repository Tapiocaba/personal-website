import './App.css';
import { Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Journal from './components/pages/Journal';
import NotFound from './components/pages/NotFound';
import NavBar from './components/NavBar';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5NF9KLN'
}
TagManager.initialize(tagManagerArgs)

function App() {
  window.dataLayer.push({
    event: 'pageview'
  });

  const [id, setId] = useState('navbar-side');

  useEffect(() => {
    function handleResize() {
      setId(window.innerWidth < 768 ? 'navbar-top' : 'navbar-side');
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">

      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner">

          <div id="nav-bar">
            <br />
            <NavBar id={id} />
          </div>

          <div class="flex-container" id="content">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
