import React, { useState } from 'react';
import { pyqData } from '../data/pyqData';
import { chapters } from '../data/chapters';
import { 
  FileText, Search, Filter, Bookmark, Check, Eye, EyeOff, 
  Award, Sparkles, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';

export default function PYQExplorer({ onToggleBookmark, isBookmarked }) {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMarks, setSelectedMarks] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedIds, setRevealedIds] = useState({});

  const years = ['All', 'CBSE 2024', 'CBSE 2023', 'CBSE 2022', 'CBSE 2020'];
  const marksList = ['All', 1, 2, 3, 5];

  const filteredPYQs = pyqData.filter(item => {
    if (selectedYear !== 'All' && item.year !== selectedYear) return false;
    if (selectedMarks !== 'All' && item.marks !== Number(selectedMarks)) return false;
    if (selectedChapter !== 'All' && item.chapterId !== Number(selectedChapter)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inQuestion = item.question.toLowerCase().includes(q);
      const inChapter = item.chapterName.toLowerCase().includes(q);
      const inAnswer = (typeof item.answer === 'string' ? item.answer : '').toLowerCase().includes(q);
      if (!inQuestion && !inChapter && !inAnswer) return false;
    }
    return true;
  });

  const toggleReveal = (id) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 p-5 border border-amber-500/20 shadow-xl">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" /> CBSE Board Previous Year Questions
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Board PYQ Bank (2019 - 2024)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Authentic board questions with official CBSE step-by-step marking scheme solutions.
        </p>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword, topic or reaction..."
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Filter Bars */}
      <div className="space-y-2.5">
        {/* Year Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Year:</span>
          {years.map(yr => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap transition ${
                selectedYear === yr
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Marks & Chapter Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-medium">Marks:</span>
            {marksList.map(m => (
              <button
                key={m}
                onClick={() => setSelectedMarks(m)}
                className={`px-2 py-0.5 rounded-md font-semibold text-xs transition ${
                  selectedMarks === m 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m === 'All' ? 'All' : `${m}M`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-medium">Chapter:</span>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer"
            >
              <option value="All" className="bg-slate-900 text-white">All Chapters</option>
              {chapters.map(c => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                  Ch {c.id}: {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredPYQs.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-slate-900/50 border border-slate-800">
            <p className="text-sm text-slate-400">No previous year questions match your selected filters.</p>
            <button
              onClick={() => { setSelectedYear('All'); setSelectedMarks('All'); setSelectedChapter('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-400 underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPYQs.map((item) => {
            const isRevealed = !!revealedIds[item.id];
            const bookmarked = isBookmarked(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 hover:border-slate-700 transition shadow-lg"
              >
                {/* Meta Badges */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.year}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-slate-800 text-slate-300">
                      {item.marks} {item.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                    <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                      {item.chapterName}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleBookmark({
                      id: item.id,
                      type: 'pyq',
                      title: item.question.slice(0, 60) + '...',
                      year: item.year,
                      marks: item.marks
                    })}
                    className={`p-1.5 rounded-lg border transition ${
                      bookmarked 
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' 
                        : 'border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                    title="Bookmark question"
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                {/* Question Text */}
                <div className="whitespace-pre-line text-sm sm:text-base font-medium text-white leading-relaxed my-2">
                  {item.question}
                </div>

                {/* Optional MCQ Options */}
                {item.options && (
                  <div className="space-y-1.5 my-3 pl-2">
                    {item.options.map((opt, oIdx) => (
                      <div key={oIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="font-bold text-amber-400">({String.fromCharCode(65 + oIdx)})</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reveal Answer Accordion Button */}
                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => toggleReveal(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" /> Hide Model Solution
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" /> View Model Answer & Marking Scheme
                      </>
                    )}
                  </button>

                  {/* Answer Box */}
                  {isRevealed && (
                    <div className="mt-3 rounded-xl bg-slate-950 p-4 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans shadow-inner">
                      <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Official Marking Scheme Solution:
                      </div>
                      <div className="whitespace-pre-line">
                        {item.answer}
                      </div>

                      {item.explanation && (
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 italic">
                          💡 **Key Concept Explanation:** {item.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
