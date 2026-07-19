import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brandDark/95 backdrop-blur-md text-white border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      {/* Pure Text Brand Label */}
      <Link to="/" className="flex items-center text-xl font-bold tracking-tight">
        <span>Tech<span className="text-brandAccent">Craft</span></span>
      </Link>
      
      <div className="flex gap-6 items-center text-sm font-medium text-slate-300">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/services" className="hover:text-white transition">Services</Link>
        <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
        <Link to="/contact" className="bg-brandAccent text-brandDark px-4 py-2 rounded-lg font-semibold hover:bg-sky-400 transition">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}