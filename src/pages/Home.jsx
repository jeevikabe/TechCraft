import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, CheckCircle, Award, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brandDark text-white py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/40 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brandAccent text-sm font-semibold tracking-wider uppercase bg-sky-950 px-3 py-1.5 rounded-full border border-sky-800">
              Next-Gen IT Architectures
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 leading-tight">
              We Craft Digital <span className="text-brandAccent">Infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              TechCraft designs, deploys, and scales custom cloud platforms, high-performance web systems, and dedicated enterprise operations globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brandAccent text-brandDark px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-sky-400 transition group shadow-lg shadow-sky-500/10">
                Consult Our Engineers <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="border border-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                Explore Core Capabilities
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-full h-96 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center p-8">
              <div className="space-y-4 w-full">
                <div className="h-3 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                <div className="h-20 bg-brandDark/50 rounded border border-slate-800 p-3 flex justify-between items-center">
                  <Cpu className="text-brandAccent animate-spin [animation-duration:8s]" />
                  <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Trust Matrix */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-extrabold text-slate-900">99.99%</h4>
            <p className="text-sm text-slate-500 mt-1">Infrastructure Uptime</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-slate-900">250+</h4>
            <p className="text-sm text-slate-500 mt-1">Platforms Deployed</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-slate-900">15M+</h4>
            <p className="text-sm text-slate-500 mt-1">End Users Managed</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-slate-900">24/7</h4>
            <p className="text-sm text-slate-500 mt-1">DevOps Monitoring</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Blocks */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Engineered for Massive Scale</h2>
          <p className="text-slate-600 mt-3">We eliminate legacy technological technical debt and substitute systems with streamlined, modern automation architectures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-sky-50 text-brandAccent rounded-xl w-fit mb-6"><Globe size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Global Cloud Infrastructure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Multi-region distributed application layers deployed across AWS, GCP, and Azure frameworks.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-6"><ShieldCheck size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Enterprise Data Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">End-to-end operational pipelines fitted with advanced encryption layers and proactive threat containment systems.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-6"><Award size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Service Level Agreements</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Guaranteed deployment cycles with dedicated account engineers providing permanent runtime monitoring support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}