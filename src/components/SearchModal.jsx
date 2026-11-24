import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Sigma, FileText, ChevronRight } from 'lucide-react';
import { chapters } from '../data/chapters';
import { chapterNotes } from '../data/chapterNotes';
import { formulaData } from '../data/formulas';
import { pyqData } from '../data/pyqData';

export default function SearchModal({ 
  isOpen, 
  onClose, 
  onSelectChapter, 
  setActiveTab 
}) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const q = query.toLowerCase();
    const results = [];

    // Search Chapters
    chapters.forEach(ch => {
      if (ch.name.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q)) {
        results.push({
          type: 'Chapter',
          title: `Ch ${ch.id}: ${ch.name}`,
          desc: ch.summary,
          action: () => {
            onSelectChapter(ch.id);
            setActiveTab('notes');
            onClose();
          }
        });
      }
    });

    // Search Notes Sections
    Object.values(chapterNotes).forEach(cn => {
      cn.sections.forEach(sec => {
        if (sec.heading.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q)) {
          results.push({
            type: 'Note',
            title: `${cn.title} - ${sec.heading}`,
            desc: sec.content.slice(0, 100) + '...',
            action: () => {
              onSelectChapter(cn.chapterNo);
              setActiveTab('notes');
              onClose();
            }
          });
        }
      });
    });

    // Search Formulas
    formulaData.forEach(fGroup => {
      fGroup.formulas.forEach(f => {
        if (f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || f.notes.toLowerCase().includes(q)) {
          results.push({
            type: 'Formula',
            title: `${fGroup.chapterName}: ${f.name}`,
            desc: f.formula,
            action: () => {
              setActiveTab('formulas');
              onClose();
            }
          });
        }
      });
    });

    // Search PYQ
    pyqData.forEach(p => {
      if (p.question.toLowerCase().includes(q) || (typeof p.answer === 'string' && p.answer.toLowerCase().includes(q))) {
        results.push({
          type: 'PYQ',
          title: `${p.year} (${p.marks}M): ${p.chapterName}`,
          desc: p.question.slice(0, 100) + '...',
          action: () => {
            setActiveTab('pyq');
            onClose();
          }
        });
      }
    });

    return results.slice(0, 20); // Top 20 results
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-3 border-b border-slate-800 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400 ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes, formulas, reactions, PYQs (e.g. Raoult, Nernst, Aldol)..."
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto space-y-2 flex-1">
          {query.trim().length < 2 ? (
            <div className="text-center py-10 text-xs text-slate-500">
              Type at least 2 characters to search across all 10 chapters.
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-400">
              No results found for "{query}".
            </div>
          ) : (
            searchResults.map((res, idx) => (
              <div
                key={idx}
                onClick={res.action}
                className="p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer transition flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {res.type}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 font-mono">
                    {res.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
