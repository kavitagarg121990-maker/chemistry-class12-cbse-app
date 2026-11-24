import React, { useState } from 'react';
import { chapters } from '../data/chapters';
import { 
  Flame, Award, CheckCircle2, ChevronRight, BookOpen, 
  Clock, Zap, Compass, Sparkles, Filter, Check, ArrowRight
} from 'lucide-react';

export default function Dashboard({ 
  onSelectChapter, 
  onOpenNotes, 
  onOpenFormulas, 
  onOpenPYQ, 
  onOpenQuiz,
  completedChapters,
  toggleChapterComplete
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'];

  const filteredChapters = selectedCategory === 'All' 
    ? chapters 
    : chapters.filter(c => c.category === selectedCategory);

  const completedCount = completedChapters.length;
  const progressPercent = Math.round((completedCount / chapters.length) * 100);

  return (
    <div className="space-y-6 pb-24">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/60 via-slate-900 to-slate-950 p-5 border border-indigo-500/20 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> CBSE Board Target 70/70
            </span>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              <Flame className="w-3.5 h-3.5" /> 7-Day Streak
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Master Class 12 Chemistry
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Complete NCERT theory notes, formula memory maps, 2019-2024 board PYQs and timed quizzes.
          </p>

          {/* Progress Tracker */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-400 font-medium">Syllabus Completion</span>
              <span className="text-indigo-300 font-bold">{completedCount} of 10 Chapters ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Launch Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={onOpenFormulas}
          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/40 text-left transition active:scale-95 group shadow-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
            ⚡
          </div>
          <h4 className="text-xs font-bold text-slate-200 group-hover:text-indigo-300">Formula Sheets</h4>
          <p className="text-[10px] text-slate-400 mt-0.5">Quick Revision Cards</p>
        </button>

        <button
          onClick={onOpenPYQ}
          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/40 text-left transition active:scale-95 group shadow-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
            🎯
          </div>
          <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-300">Board PYQ 2024</h4>
          <p className="text-[10px] text-slate-400 mt-0.5">With Marking Schemes</p>
        </button>

        <button
          onClick={onOpenQuiz}
          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/40 text-left transition active:scale-95 group shadow-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
            🏆
          </div>
          <h4 className="text-xs font-bold text-slate-200 group-hover:text-emerald-300">Mock Quiz</h4>
          <p className="text-[10px] text-slate-400 mt-0.5">Timed 15 Questions</p>
        </button>

        <button
          onClick={() => onSelectChapter(1)}
          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/40 text-left transition active:scale-95 group shadow-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2 group-hover:scale-110 transition">
            📖
          </div>
          <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">Start Chapter 1</h4>
          <p className="text-[10px] text-slate-400 mt-0.5">Solutions (7 Marks)</p>
        </button>
      </div>

      {/* Chapters Section Header & Filters */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" /> NCERT Class 12 Syllabus
            </h3>
            <p className="text-xs text-slate-400">All 10 chapters arranged by CBSE exam blueprint</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All (10)' : cat.replace(' Chemistry', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredChapters.map((chapter) => {
            const isCompleted = completedChapters.includes(chapter.id);
            return (
              <div 
                key={chapter.id}
                className="group relative bg-slate-900/80 hover:bg-slate-800/80 rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all shadow-md duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {chapter.number}
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${chapter.badgeColor}`}>
                      {chapter.marks} Marks
                    </span>
                  </div>

                  {/* Toggle Complete Checkbox */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleChapterComplete(chapter.id);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isCompleted 
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-sm' 
                        : 'border-slate-700 hover:border-slate-500 text-transparent'
                    }`}
                    title={isCompleted ? "Mark as in-progress" : "Mark as completed"}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>

                <h4 className="text-base font-bold text-white mt-1.5 group-hover:text-indigo-300 transition">
                  {chapter.name}
                </h4>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {chapter.summary}
                </p>

                {/* Key Topics List Preview */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {chapter.keyTopics.slice(0, 2).map((topic, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50">
                      • {topic}
                    </span>
                  ))}
                  {chapter.keyTopics.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-500 font-medium">
                      +{chapter.keyTopics.length - 2} more
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {chapter.category}
                  </span>

                  <button
                    onClick={() => onSelectChapter(chapter.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition"
                  >
                    Open Notes <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
