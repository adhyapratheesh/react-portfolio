import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './page/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '3rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>This page doesn’t exist.</p>
    <a href="/" style={{ color: '#9f7c60', textDecoration: 'underline' }}>
      Go to Home
    </a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
