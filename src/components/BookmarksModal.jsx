import React from 'react';
import { Bookmark, X, Trash2, BookOpen, FileText, ChevronRight } from 'lucide-react';

export default function BookmarksModal({ 
  isOpen, 
  onClose, 
  bookmarks, 
  onRemoveBookmark, 
  onSelectChapter, 
  setActiveTab 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">
              Saved Revision Bookmarks ({bookmarks.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          {bookmarks.length === 0 ? (
            <div className="text-center py-10">
              <Bookmark className="w-10 h-10 text-slate-700 mx-auto mb-2" />
              <p className="text-xs text-slate-400">No bookmarks saved yet.</p>
              <p className="text-[11px] text-slate-500 mt-1">Tap the bookmark icon on any chapter or PYQ question to save it here for fast revision.</p>
            </div>
          ) : (
            bookmarks.map(item => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition flex items-center justify-between gap-3"
              >
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    if (item.type === 'chapter') {
                      const chId = Number(item.id.replace('chapter-', ''));
                      onSelectChapter(chId);
                      setActiveTab('notes');
                    } else if (item.type === 'pyq') {
                      setActiveTab('pyq');
                    }
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {item.type === 'chapter' ? 'Chapter Notes' : 'Board PYQ'}
                    </span>
                    {item.year && (
                      <span className="text-[10px] font-semibold text-amber-400">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white hover:text-indigo-300 transition line-clamp-1">
                    {item.title}
                  </h4>
                </div>

                <button
                  onClick={() => onRemoveBookmark(item.id)}
                  className="p-2 text-slate-500 hover:text-rose-400 transition"
                  title="Remove bookmark"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950/50 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-500">
            Stored 100% offline on your device
          </p>
        </div>
      </div>
    </div>
  );
}
