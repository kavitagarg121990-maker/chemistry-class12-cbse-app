import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';
import { chapters } from '../data/chapters';
import confetti from 'canvas-confetti';
import { 
  Trophy, Clock, CheckCircle2, XCircle, RotateCcw, 
  ArrowRight, Award, Sparkles, AlertCircle, HelpCircle
} from 'lucide-react';

export default function QuizArena() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState([]);

  // Questions set based on filter
  const questions = selectedFilter === 'All' 
    ? quizData 
    : quizData.filter(q => q.chapterId === Number(selectedFilter));

  const currentQ = questions[currentIdx] || questions[0];

  // Timer countdown
  useEffect(() => {
    if (!timerEnabled || isAnswered || quizFinished) return;

    if (timeLeft <= 0) {
      handleOptionSelect(-1); // Time out
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, timerEnabled, isAnswered, quizFinished]);

  const handleOptionSelect = (idx) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ.question,
        chosen: idx,
        correct: currentQ.correctIndex,
        explanation: currentQ.explanation
      }
    ]);
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(30);
    } else {
      setQuizFinished(true);
      triggerCelebration();
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(30);
    setUserAnswers([]);
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-6 pb-28">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-5 border border-emerald-500/20 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-emerald-400" /> Interactive Timed Test Arena
            </span>
          </div>
          <button
            onClick={() => setTimerEnabled(!timerEnabled)}
            className={`text-xs px-2.5 py-1 rounded-full font-semibold border transition ${
              timerEnabled 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Timer: {timerEnabled ? '30s On' : 'Off'}
          </button>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
          Class 12 Chemistry Mock Challenge
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
          Test your conceptual clarity, reaction mechanisms and board exam readiness.
        </p>

        {/* Chapter Filter */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => { setSelectedFilter('All'); restartQuiz(); }}
            className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap transition ${
              selectedFilter === 'All'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Full Mock (All 10 Chapters)
          </button>
          {chapters.map(c => (
            <button
              key={c.id}
              onClick={() => { setSelectedFilter(c.id.toString()); restartQuiz(); }}
              className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap transition ${
                selectedFilter === c.id.toString()
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Ch {c.id}: {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Container */}
      {!quizFinished ? (
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-xl">
          {/* Top Bar: Progress and Timer */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400">
              Question <span className="text-indigo-400 text-sm">{currentIdx + 1}</span> of {questions.length}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Score: {score}
              </span>

              {timerEnabled && (
                <div className={`flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                  timeLeft <= 10 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                    : 'bg-slate-800 text-slate-300'
                }`}>
                  <Clock className="w-3.5 h-3.5" /> {timeLeft}s
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full my-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Tag & Text */}
          <div className="my-4">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              {currentQ.chapterName}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2.5 my-5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              let btnClass = "bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-600";

              if (isAnswered) {
                if (isCorrect) {
                  btnClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200";
                } else if (isSelected) {
                  btnClass = "bg-rose-950/80 border-rose-500 text-rose-200";
                } else {
                  btnClass = "bg-slate-950/50 border-slate-900 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between ${btnClass} ${
                    !isAnswered ? 'active:scale-[0.99]' : ''
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation Box */}
          {isAnswered && (
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 my-4 text-xs text-slate-300 leading-relaxed shadow-inner">
              <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> Explanation:
              </div>
              <div>{currentQ.explanation}</div>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:opacity-95 active:scale-95 transition"
              >
                {currentIdx + 1 < questions.length ? 'Next Question' : 'Complete Quiz'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Quiz Completed!
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Your Score: {score} / {questions.length}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {percentage >= 80 ? '🌟 Outstanding performance! Board 70/70 ready!' :
               percentage >= 50 ? '👍 Good attempt! Review weak concepts to score higher.' :
               '💪 Keep revising NCERT notes and try again.'}
            </p>
          </div>

          {/* Metric badge */}
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-lg font-bold text-emerald-400 font-mono">
            {percentage}% Accuracy
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <button
              onClick={restartQuiz}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-md"
            >
              <RotateCcw className="w-4 h-4" /> Retake Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
