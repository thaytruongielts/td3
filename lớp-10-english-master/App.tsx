import React, { useState, useMemo, useEffect } from 'react';
import { VOCABULARY_DATA } from './constants';
import { UserProgress } from './types';

// Icons
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);

function App() {
  const [progress, setProgress] = useState<UserProgress>({});
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  // Calculate scores
  const totalQuestions = useMemo(() => {
    return VOCABULARY_DATA.reduce((acc, item) => acc + item.exercises.length, 0);
  }, []);

  const correctAnswersCount = useMemo(() => {
    return Object.values(progress).filter((p: any) => p.isCorrect).length;
  }, [progress]);

  const currentScore = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return (correctAnswersCount / totalQuestions) * 10;
  }, [correctAnswersCount, totalQuestions]);

  const completionPercentage = useMemo(() => {
    const answeredCount = Object.keys(progress).length;
    return Math.round((answeredCount / totalQuestions) * 100);
  }, [progress, totalQuestions]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckAnswer = (exerciseId: string, answer: string, correctAnswers: string[]) => {
    const normalizedInput = answer.trim().toLowerCase().replace(/\s+/g, ' ');
    const isCorrect = correctAnswers.some(ca => ca.toLowerCase() === normalizedInput);
    
    setProgress(prev => ({
      ...prev,
      [exerciseId]: {
        attempted: true,
        isCorrect: isCorrect,
        userInput: answer
      }
    }));
  };

  const resetAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn làm lại từ đầu không?")) {
      setProgress({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 pb-20">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-10 pb-20 px-4 md:px-8 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            English Master <span className="text-yellow-300">Grade 10</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Luyện tập từ vựng, Collocations và ngữ cảnh. Điền vào chỗ trống để kiểm tra kiến thức của bạn.
          </p>
          
          {/* Big Score Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 mx-auto">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-1">Điểm số hiện tại</div>
              <div className="text-5xl font-bold text-white tabular-nums">
                {currentScore.toFixed(1)}<span className="text-2xl text-blue-200">/10</span>
              </div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-1">Tiến độ</div>
              <div className="text-4xl font-bold text-white tabular-nums">
                {completionPercentage}%
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Quick Stats Header */}
      <div className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transform transition-transform duration-300 ${showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-slate-700">English Master Gr.10</div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-slate-500 hidden sm:block">
              Correct: <span className="text-green-600 font-bold">{correctAnswersCount}</span>/{totalQuestions}
            </div>
            <div className="bg-indigo-600 text-white px-4 py-1 rounded-full font-bold shadow-sm">
              {currentScore.toFixed(1)}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 space-y-8">
        
        {VOCABULARY_DATA.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl shadow-sm bg-white p-2 rounded-xl border border-slate-100">{item.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-indigo-600">#{item.id}</span> {item.word}
                  </h2>
                  <p className="text-slate-500 font-medium italic">{item.meaning}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              {/* Examples Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                  Ví dụ & Collocations
                </h3>
                <ul className="space-y-3">
                  {item.examples.map((ex, idx) => (
                    <li key={idx} className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 text-sm leading-relaxed">
                      <span className="block font-bold text-indigo-700 mb-1">{ex.phrase}</span>
                      <span className="text-slate-700">"{ex.sentence}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exercises Section */}
              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-orange-500 rounded-full"></span>
                  Bài tập vận dụng
                </h3>
                <div className="space-y-4">
                  {item.exercises.map((ex) => {
                    const status = progress[ex.id];
                    const parts = ex.question.split('___');
                    const isAnswered = status?.attempted;
                    const isCorrect = status?.isCorrect;

                    return (
                      <div key={ex.id} className={`relative p-4 rounded-xl border-2 transition-colors duration-300 ${isAnswered ? (isCorrect ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50') : 'border-slate-100 bg-white'}`}>
                        <div className="text-slate-800 leading-relaxed font-medium mb-3">
                          {parts[0]}
                          <span className="inline-block border-b-2 border-slate-300 w-16 mx-1"></span>
                          {parts[1]}
                        </div>
                        
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Điền cụm từ..."
                            className={`flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-offset-1 transition-all outline-none text-sm
                              ${isAnswered 
                                ? (isCorrect ? 'border-green-300 bg-green-100 text-green-800' : 'border-red-300 bg-red-100 text-red-800') 
                                : 'border-slate-300 bg-slate-50 focus:border-indigo-500 focus:ring-indigo-200'
                              }
                            `}
                            defaultValue={status?.userInput || ''}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleCheckAnswer(ex.id, e.currentTarget.value, ex.correctAnswers);
                              }
                            }}
                            onBlur={(e) => {
                                if(e.target.value.trim() !== '') {
                                    handleCheckAnswer(ex.id, e.target.value, ex.correctAnswers);
                                }
                            }}
                            disabled={isCorrect} // Lock if correct
                          />
                          {isAnswered && (
                            <div className="flex items-center justify-center w-10 shrink-0">
                                {isCorrect ? <CheckCircleIcon /> : <XCircleIcon />}
                            </div>
                          )}
                        </div>
                        
                        {/* Feedback Message */}
                        {isAnswered && !isCorrect && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-red-600 font-medium animate-pulse">
                            <AlertCircleIcon />
                            <span>Sai rồi, hãy thử lại! (Gợi ý: Xem phần ví dụ bên trái)</span>
                          </div>
                        )}
                        {isAnswered && isCorrect && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-green-700 font-bold">
                            <CheckCircleIcon />
                            <span>Chính xác! +10 điểm kỹ năng.</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Footer Actions */}
        <div className="flex justify-center pt-8 pb-12">
            <button 
                onClick={resetAll}
                className="px-6 py-3 bg-white text-red-500 border border-red-200 font-semibold rounded-full hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm"
            >
                Làm lại tất cả
            </button>
        </div>

      </main>
    </div>
  );
}

export default App;