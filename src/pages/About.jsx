import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-slate-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About IT StartUp</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We are a modern engineering collective dedicated to building high-performance software, intuitive mobile architectures, and secure cloud environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
          <div className="p-3 bg-sky-50 text-brandAccent rounded-lg w-fit mx-auto mb-4"><Target /></div>
          <h3 className="font-bold text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-slate-600">To accelerate business evolution through clean, scalable application ecosystems.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg w-fit mx-auto mb-4"><Users /></div>
          <h3 className="font-bold text-lg mb-2">Expert Team</h3>
          <p className="text-sm text-slate-600">Specialist full-stack architects and native iOS/Android developers pushing platform boundaries.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg w-fit mx-auto mb-4"><Shield /></div>
          <h3 className="font-bold text-lg mb-2">Ironclad Delivery</h3>
          <p className="text-sm text-slate-600">Strict version controls, continuous testing loops, and completely safe delivery protocols.</p>
        </div>
      </div>
    </div>
  );
}