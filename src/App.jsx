import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import ProgressBar from './partials/dashboard/ProgressBar'
import ProgressBar2 from './partials/dashboard/ProgressBar2'
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<ProgressBar />} />
        <Route exact path="/login2" element={<ProgressBar2 />} />
      </Routes>
    </>
  );
}

export default App;
