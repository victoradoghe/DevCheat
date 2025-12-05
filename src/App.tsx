import React, { useState, useEffect, useMemo } from 'react';
import { Menu, Search, Sun, Moon, Download, ArrowRight, Grid, List } from 'lucide-react';
import Sidebar from './components/SideBar';
import SnippetCard from './components/SnippetCard';
import { CHEAT_SHEETS } from '../data';
import type { CheatSheet, SheetType } from '../types';
import * as Icons from 'lucide-react';

function App() {
  const [activeSheetId, setActiveSheetId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  
  // Persistence
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      return newFavs;
    });
  };

  const handleExport = () => {
    const activeSheet = CHEAT_SHEETS.find(s => s.id === activeSheetId);
    if (!activeSheet) return;
    const content = activeSheet.categories.map(cat => 
      `## ${cat.title}\n\n${cat.snippets.map(s => 
        `### ${s.title}\n${s.description}\n\n\`\`\`${s.language}\n${s.code}\n\`\`\`\n`
      ).join('\n')}`
    ).join('\n');
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeSheet.slug}-cheatsheet.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSelectSheet = (id: string) => {
    setActiveSheetId(id);
    setSearchQuery(''); // Clear search when switching context
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveSheetId(null);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- RENDER HELPERS ---

  const renderHome = () => {
    // Group sheets for home display
    const filteredSheets = CHEAT_SHEETS.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const grouped = filteredSheets.reduce((acc, sheet) => {
      if (!acc[sheet.type]) acc[sheet.type] = [];
      acc[sheet.type].push(sheet);
      return acc;
    }, {} as Record<string, CheatSheet[]>);

    const typeOrder: SheetType[] = ['Language', 'Framework', 'Database', 'Tool'];

    return (
      <div className="max-w-6xl mx-auto pb-20">
        <div className="text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">Tech Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            The ultimate interactive cheat sheet collection for developers. <br className="hidden md:inline"/> Clean, searchable, and always up-to-date.
          </p>
          
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-xl flex items-center p-2 shadow-xl">
               <Search className="ml-3 text-slate-400" size={20} />
               <input 
                  type="text" 
                  placeholder="Search for a language, framework, or tool..." 
                  className="w-full p-3 bg-transparent border-none focus:ring-0 outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
               />
            </div>
          </div>
        </div>

        <div className="px-4 space-y-12">
          {filteredSheets.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
               <p className="text-slate-500 text-lg">No cheat sheets found for "{searchQuery}".</p>
               <button onClick={() => setSearchQuery('')} className="mt-4 text-brand-600 font-medium hover:underline">View all</button>
            </div>
          ) : (
             typeOrder.map(type => {
               const sheets = grouped[type as string];
               if (!sheets || sheets.length === 0) return null;
               
               return (
                 <div key={type} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{type}s</h2>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sheets.map(sheet => {
                        const IconComponent = (Icons as any)[sheet.iconName] || Icons.Code;
                        return (
                          <button 
                            key={sheet.id}
                            onClick={() => handleSelectSheet(sheet.id)}
                            className="group flex flex-col items-start text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300"
                          >
                            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                               <IconComponent size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                              {sheet.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                              {sheet.description}
                            </p>
                            <div className="mt-auto flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                               View Cheatsheet <ArrowRight size={16} className="ml-1" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                 </div>
               );
             })
          )}
        </div>
      </div>
    );
  };

  const renderSheet = () => {
    const activeSheet = CHEAT_SHEETS.find(s => s.id === activeSheetId);
    if (!activeSheet) return null;

    // Filter snippets logic
    const filteredCategories = activeSheet.categories.map(cat => ({
      ...cat,
      snippets: cat.snippets.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.snippets.length > 0);

    const IconComponent = (Icons as any)[activeSheet.iconName] || Icons.Code;

    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400">
               <IconComponent size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{activeSheet.name}</h2>
              <p className="text-slate-500 dark:text-slate-400">{activeSheet.description}</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             <input 
               type="text" 
               placeholder={`Search ${activeSheet.name}...`}
               className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-brand-500/20 outline-none transition-all dark:text-white"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
        </div>

        {filteredCategories.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-400 text-lg">No snippets found matching "{searchQuery}"</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-brand-600 hover:underline">Clear search</button>
            </div>
        ) : (
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2 uppercase tracking-wide">
                    <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
                    {category.title}
                </h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {category.snippets.map((snippet) => (
                    <SnippetCard 
                      key={snippet.id} 
                      snippet={snippet}
                      isFavorite={favorites.has(snippet.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-sm pb-10">
            <p>Ready to master another tool?</p>
            <button 
              onClick={handleGoHome}
              className="mt-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              Back to Dashboard
            </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans">
      <Sidebar 
        cheatSheets={CHEAT_SHEETS} 
        activeSheetId={activeSheetId} 
        onSelectSheet={handleSelectSheet}
        onGoHome={handleGoHome}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-full w-full relative">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 z-20 sticky top-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
               <button onClick={handleGoHome} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Home</button>
               {activeSheetId && (
                 <>
                   <span className="mx-2">/</span>
                   <span className="text-slate-900 dark:text-white font-semibold">
                     {CHEAT_SHEETS.find(s => s.id === activeSheetId)?.name}
                   </span>
                 </>
               )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {activeSheetId && (
              <button 
                onClick={handleExport}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                title="Export to Markdown"
              >
                <Download size={14} />
                <span>Export</span>
              </button>
            )}

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
           {activeSheetId ? renderSheet() : renderHome()}
        </main>
      </div>
    </div>
  );
}

export default App;