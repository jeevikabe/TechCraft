import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        
        {/* Professional Enterprise Footer */}
        <footer className="bg-brandDark text-slate-400 py-12 border-t border-slate-800 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="text-slate-500 text-sm">
              © {new Date().getFullYear()} TechCraft. All rights reserved.
            </span>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <Link to="/privacy" className="hover:text-brandAccent transition">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-brandAccent transition">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}