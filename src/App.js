import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Example page components
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <div className="App">
      {/* Navigation Links */}
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </div>
  );
}

export default App;