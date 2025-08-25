import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import JobApplications from './pages/JobApplications';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/JobApplications" element={<JobApplications />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
