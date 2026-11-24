import React from 'react';
import { Sparkles, Bookmark, Search, Wifi, CheckCircle2, Moon, Sun } from 'lucide-react';

export default function Header({ 
  activeTab, 
  onOpenBookmarks, 
  bookmarkCount, 
  onOpenSearch, 
  darkMode, 
  setDarkMode,
  isOnline 
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* App Title & Badge */}
        <div className="flex items-center space-x-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-lg">
                ⚗️
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                ChemVault <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Class 12</span>
              </h1>
            </div>
            <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
              <span>CBSE NCERT 2024-25</span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-emerald-400 flex items-center gap-0.5 font-medium">
                <CheckCircle2 className="w-3 h-3 inline" /> Offline Ready
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-1.5">
          {/* Search Trigger */}
          <button 
            onClick={onOpenSearch}
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition active:scale-95"
            title="Search Notes & Questions"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Bookmarks */}
          <button 
            onClick={onOpenBookmarks}
            className="relative p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition active:scale-95"
            title="Saved Revision Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {bookmarkCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
