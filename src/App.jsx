import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NotesViewer from './components/NotesViewer';
import FormulaSheet from './components/FormulaSheet';
import PYQExplorer from './components/PYQExplorer';
import QuizArena from './components/QuizArena';
import BookmarksModal from './components/BookmarksModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Persistent Bookmarks
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('chem12_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persistent Chapter Completion
  const [completedChapters, setCompletedChapters] = useState(() => {
    try {
      const saved = localStorage.getItem('chem12_completed_chapters');
      return saved ? JSON.parse(saved) : [1];
    } catch (e) {
      return [1];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('chem12_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {}
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('chem12_completed_chapters', JSON.stringify(completedChapters));
    } catch (e) {}
  }, [completedChapters]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleToggleBookmark = (item) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id);
      if (exists) {
        return prev.filter(b => b.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveBookmark = (id) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const isBookmarked = (id) => {
    return bookmarks.some(b => b.id === id);
  };

  const toggleChapterComplete = (id) => {
    setCompletedChapters(prev => {
      if (prev.includes(id)) {
        return prev.filter(c => c !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectChapter = (id) => {
    setSelectedChapterId(id);
    setActiveTab('notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarks.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isOnline={isOnline}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 pt-4">
        {activeTab === 'home' && (
          <Dashboard
            onSelectChapter={handleSelectChapter}
            onOpenNotes={() => setActiveTab('notes')}
            onOpenFormulas={() => setActiveTab('formulas')}
            onOpenPYQ={() => setActiveTab('pyq')}
            onOpenQuiz={() => setActiveTab('quiz')}
            completedChapters={completedChapters}
            toggleChapterComplete={toggleChapterComplete}
          />
        )}

        {activeTab === 'notes' && (
          <NotesViewer
            selectedChapterId={selectedChapterId}
            onSelectChapter={setSelectedChapterId}
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {activeTab === 'formulas' && (
          <FormulaSheet />
        )}

        {activeTab === 'pyq' && (
          <PYQExplorer
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizArena />
        )}
      </main>

      {/* Modals */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onRemoveBookmark={handleRemoveBookmark}
        onSelectChapter={setSelectedChapterId}
        setActiveTab={setActiveTab}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectChapter={setSelectedChapterId}
        setActiveTab={setActiveTab}
      />

      {/* Bottom Mobile Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
