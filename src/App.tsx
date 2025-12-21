
import { useState, useEffect } from 'react';
import { Menu, Search, Sun, Moon, Download, ArrowRight, Github } from 'lucide-react';
import Sidebar from './components/Sidebar';
import SnippetCard from './components/SnippetCard';
import { CHEAT_SHEETS } from './data';
import type { CheatSheet, SheetType } from './types';
import * as LucideIcons from 'lucide-react';

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



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);





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
    setSearchQuery('');
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveSheetId(null);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => {
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
        <div className="text-center py-16 px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">Tech Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            The ultimate interactive cheat sheet collection for developers. <br className="hidden md:inline" /> Clean, searchable, and always up-to-date.
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
            <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 animate-fade-in-up">
              <p className="text-slate-500 text-lg">No cheat sheets found for "{searchQuery}".</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-brand-600 font-medium hover:underline">View all</button>
            </div>
          ) : (
            typeOrder.map((type, index) => {
              const sheets = grouped[type as string];
              if (!sheets || sheets.length === 0) return null;

              return (
                <div
                  key={type}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{type}s</h2>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sheets.map(sheet => {
                      const IconComponent = (LucideIcons as any)[sheet.iconName] || LucideIcons.Code;
                      return (
                        <button
                          key={sheet.id}
                          onClick={() => handleSelectSheet(sheet.id)}
                          className="group flex flex-col items-start text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 w-full"
                        >
                          <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <IconComponent size={28} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {sheet.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 w-full">
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

    const filteredCategories = activeSheet.categories.map(cat => ({
      ...cat,
      snippets: cat.snippets.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.snippets.length > 0);

    const IconComponent = (LucideIcons as any)[activeSheet.iconName] || LucideIcons.Code;

    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">
              <IconComponent size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{activeSheet.name}</h1>
              <p className="text-slate-500 dark:text-slate-400">{activeSheet.description}</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={`Search ${activeSheet.name}...`}
                className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white placeholder:text-slate-400 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 animate-fade-in-up">
            <p className="text-slate-500 text-lg">No snippets found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="space-y-10 pb-20">
            {filteredCategories.map((cat, index) => (
              <div
                key={cat.id}
                className="scroll-mt-20 animate-fade-in-up"
                id={cat.id}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-500 rounded-full"></span>
                  {cat.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {cat.snippets.map(snippet => (
                    <SnippetCard
                      key={snippet.id}
                      snippet={snippet}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      <Sidebar
        cheatSheets={CHEAT_SHEETS}
        activeSheetId={activeSheetId}
        onSelectSheet={handleSelectSheet}
        onGoHome={handleGoHome}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-16 bg-white dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="lg:hidden font-bold text-slate-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600">
              DevCheat
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github size={14} />
              <span>Star on GitHub</span>
            </a>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth custom-scrollbar">
          {activeSheetId ? renderSheet() : renderHome()}
        </main>
      </div>
    </div>
  );
}

export default App;
