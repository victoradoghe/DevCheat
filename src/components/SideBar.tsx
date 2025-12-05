import React, { useState } from 'react';
import type { CheatSheet } from '../../types';
import * as Icons from 'lucide-react';
import { Home, Search } from 'lucide-react';

interface SidebarProps {
  cheatSheets: CheatSheet[];
  activeSheetId: string | null;
  onSelectSheet: (id: string) => void;
  onGoHome: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cheatSheets, activeSheetId, onSelectSheet, onGoHome, isOpen, onClose }) => {
  const [filter, setFilter] = useState('');

  const filteredSheets = cheatSheets.filter(s => 
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedSheets = filteredSheets.reduce((acc, sheet) => {
    const type = sheet.type || 'Other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(sheet);
    return acc;
  }, {} as Record<string, CheatSheet[]>);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 
          transform transition-transform duration-300 ease-in-out lg:transform-none flex flex-col shadow-2xl lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
           <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
             <Icons.Code2 size={20} />
           </div>
           <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
             DevCheat
           </h1>
        </div>

        <div className="p-4">
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             <input 
               type="text" 
               placeholder="Find technology..."
               className="w-full pl-9 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-500/50 outline-none transition-all dark:text-white placeholder:text-slate-500"
               value={filter}
               onChange={(e) => setFilter(e.target.value)}
             />
           </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-6 custom-scrollbar">
          
          {/* Home Link */}
          <button
            onClick={() => {
              onGoHome();
              onClose();
            }}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
              ${activeSheetId === null
                ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }
            `}
          >
            <Home size={18} />
            Home Dashboard
          </button>

          {Object.entries(groupedSheets).map(([type, sheets]) => (
             <div key={type}>
                <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                  {type}
                </div>
                <div className="space-y-0.5">
                  {sheets.map((sheet) => {
                    const IconComponent = (Icons as any)[sheet.iconName] || Icons.Code;
                    return (
                      <button
                        key={sheet.id}
                        onClick={() => {
                          onSelectSheet(sheet.id);
                          onClose();
                        }}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent
                          ${activeSheetId === sheet.id 
                            ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border-slate-200 dark:border-slate-700' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                          }
                        `}
                      >
                        <IconComponent size={16} className={activeSheetId === sheet.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'} />
                        {sheet.name}
                      </button>
                    );
                  })}
                </div>
             </div>
          ))}

          {Object.keys(groupedSheets).length === 0 && (
             <p className="text-sm text-slate-400 text-center py-4">No results found.</p>
          )}
        </nav>
        
        {/* <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Pro Version 2.0</span>
              <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">v1.0.0</span>
            </div>
        </div> */}
      </aside>
    </>
  );
};

export default Sidebar;