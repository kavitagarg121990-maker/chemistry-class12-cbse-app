import React, { useState } from 'react';
import { formulaData } from '../data/formulas';
import { Sigma, Search, Copy, Check, Sparkles, HelpCircle } from 'lucide-react';

export default function FormulaSheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [copiedFormula, setCopiedFormula] = useState(null);

  const filteredData = formulaData.filter(chapter => {
    if (selectedChapter !== 'All' && chapter.chapterName !== selectedChapter) {
      return false;
    }
    return true;
  }).map(chapter => {
    if (!searchQuery.trim()) return chapter;
    const matchingFormulas = chapter.formulas.filter(f => 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.notes.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...chapter, formulas: matchingFormulas };
  }).filter(chapter => chapter.formulas.length > 0);

  const handleCopy = (formulaText, name) => {
    navigator.clipboard.writeText(`${name}: ${formulaText}`);
    setCopiedFormula(name);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Formula Sheet Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 p-5 border border-indigo-500/20 shadow-xl">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sigma className="w-4 h-4 text-indigo-400" /> Rapid Formula & Reactions Cheat Sheet
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Class 12 Numerical Formula Master
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Handy handbook of all SI units, sign conventions, reaction formulas and constants for rapid revision.
        </p>

        {/* Search bar */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search formula, e.g., Nernst, Arrhenius, Colligative, Henry..."
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Chapters Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedChapter('All')}
          className={`text-xs px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition ${
            selectedChapter === 'All'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Topics
        </button>
        {formulaData.map(ch => (
          <button
            key={ch.chapterName}
            onClick={() => setSelectedChapter(ch.chapterName)}
            className={`text-xs px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition ${
              selectedChapter === ch.chapterName
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {ch.chapterName}
          </button>
        ))}
      </div>

      {/* Formula Cards */}
      <div className="space-y-6">
        {filteredData.map(ch => (
          <div key={ch.chapterName} className="space-y-3">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 px-1">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              {ch.chapterName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ch.formulas.map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 hover:border-slate-700 transition shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => handleCopy(item.formula, item.name)}
                        className="p-1 rounded-md text-slate-400 hover:text-indigo-300 hover:bg-slate-800 transition"
                        title="Copy formula"
                      >
                        {copiedFormula === item.name ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Formula Display Box */}
                    <div className="rounded-xl bg-slate-950 p-3 border border-slate-800/80 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto text-center my-2 shadow-inner">
                      {item.formula}
                    </div>

                    {/* Units & Context */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
                      <span className="text-slate-500 font-semibold">Units:</span>
                      <span className="text-amber-300/90 font-mono">{item.units}</span>
                    </div>
                  </div>

                  {/* Notes / Tips */}
                  {item.notes && (
                    <div className="mt-3 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 italic">
                      💡 {item.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
