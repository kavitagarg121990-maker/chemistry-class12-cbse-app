import React from 'react';
import { Home, BookOpen, Sigma, FileText, Trophy } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'notes', label: 'Notes', icon: BookOpen },
    { id: 'formulas', label: 'Formulas', icon: Sigma },
    { id: 'pyq', label: 'PYQ 2024', icon: FileText },
    { id: 'quiz', label: 'Quiz Arena', icon: Trophy }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 pb-[env(safe-area-inset-bottom,0px)]">
      <div className="max-w-md mx-auto grid grid-cols-5 px-2 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-indigo-400 font-bold scale-105' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-indigo-500/20 text-indigo-300' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'text-indigo-300 font-semibold' : 'text-slate-400 font-normal'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1 rounded-full bg-indigo-400 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
