import React from 'react';

const projects = [
  { id: 1, title: 'E-Commerce Core', category: 'Web Project', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60' },
  { id: 2, title: 'Fitness Tracker Tracker App', category: 'Mobile App', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60' },
  { id: 3, title: 'FinTech Analytics Interface', category: 'Web Project', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60' },
  { id: 4, title: 'Logistics Courier Dashboard', category: 'Mobile App', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60' },
];

export default function Gallery() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Innovation Gallery</h1>
        <p className="text-slate-600">A visual look into the production web solutions and mobile apps we build.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="h-48 overflow-hidden bg-slate-200">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-brandAccent bg-sky-50 px-2 py-1 rounded">{project.category}</span>
              <h3 className="font-bold text-slate-800 mt-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}