import './App.css';
import { Routes, Route} from 'react-router-dom';
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

  return (
    <div className="App">

      <div class="flex-container" id="outer">

        <div class="flex-container" id="nav-bar">
          <br />
          <NavBar />
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
  );
}

export default App;
