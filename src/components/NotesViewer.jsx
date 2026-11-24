import React, { useState } from 'react';
import { chapterNotes } from '../data/chapterNotes';
import { chapters } from '../data/chapters';
import { 
  Bookmark, Share2, Copy, Check, Volume2, VolumeX, 
  ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, 
  Award, Sparkles, BookOpen
} from 'lucide-react';

export default function NotesViewer({ 
  selectedChapterId, 
  onSelectChapter, 
  onToggleBookmark, 
  isBookmarked 
}) {
  const [fontSize, setFontSize] = useState('text-sm');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const chapterInfo = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const notes = chapterNotes[selectedChapterId] || chapterNotes[1];

  const handleCopySection = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const fullText = `${notes.title}. ${notes.overview}. ` + 
          notes.sections.map(s => `${s.heading}. ${s.content}`).join('. ');
        const utterance = new SpeechSynthesisUtterance(fullText.slice(0, 2000));
        utterance.rate = 1.0;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Chapter Selector Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {chapters.map(c => (
          <button
            key={c.id}
            onClick={() => {
              if (isSpeaking) window.speechSynthesis.cancel();
              setIsSpeaking(false);
              onSelectChapter(c.id);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedChapterId === c.id
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30 scale-105'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Ch {c.id}: {c.name}
          </button>
        ))}
      </div>

      {/* Chapter Main Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-5 border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                {chapterInfo.number}
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {chapterInfo.marks} Marks Weightage
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-800 text-slate-300">
                {chapterInfo.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {notes.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {notes.overview}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            {/* Audio Reader */}
            <button
              onClick={handleTextToSpeech}
              className={`p-2.5 rounded-xl border transition active:scale-95 ${
                isSpeaking 
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 animate-pulse' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title={isSpeaking ? "Stop listening" : "Listen to chapter notes"}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'text-sm' ? 'text-base' : 'text-sm')}
              className="px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition active:scale-95"
              title="Toggle font size"
            >
              {fontSize === 'text-sm' ? 'A+' : 'A-'}
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark({
                id: `chapter-${selectedChapterId}`,
                type: 'chapter',
                title: notes.title,
                category: chapterInfo.category
              })}
              className={`p-2.5 rounded-xl border transition active:scale-95 ${
                isBookmarked(`chapter-${selectedChapterId}`)
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Bookmark Chapter"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </div>

      {/* High-Yield NCERT Exam Alerts Banner */}
      {notes.ncertPointers && notes.ncertPointers.length > 0 && (
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4" /> CBSE Board Exam Tips & Frequent Pitfalls
          </div>
          <ul className="space-y-1.5">
            {notes.ncertPointers.map((tip, idx) => (
              <li key={idx} className="text-xs text-amber-200/90 flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Detailed Notes Sections */}
      <div className="space-y-4">
        {notes.sections.map((section, idx) => (
          <div 
            key={idx}
            className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 shadow-lg relative group transition hover:border-slate-700"
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
              <h3 className="text-base sm:text-lg font-bold text-indigo-300">
                {section.heading}
              </h3>

              <button
                onClick={() => handleCopySection(section.heading + '\n' + section.content, idx)}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition active:scale-95"
                title="Copy section text"
              >
                {copiedIndex === idx ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className={`whitespace-pre-line text-slate-300 leading-relaxed font-sans ${fontSize}`}>
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Chapter Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <button
          disabled={selectedChapterId <= 1}
          onClick={() => {
            if (isSpeaking) window.speechSynthesis.cancel();
            setIsSpeaking(false);
            onSelectChapter(selectedChapterId - 1);
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition"
        >
          <ChevronLeft className="w-4 h-4" /> Previous Chapter
        </button>

        <span className="text-xs text-slate-500 font-medium">
          Chapter {selectedChapterId} of 10
        </span>

        <button
          disabled={selectedChapterId >= 10}
          onClick={() => {
            if (isSpeaking) window.speechSynthesis.cancel();
            setIsSpeaking(false);
            onSelectChapter(selectedChapterId + 1);
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-indigo-600/30 transition"
        >
          Next Chapter <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
