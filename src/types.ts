import type { ReactNode } from 'react';

export const Difficulty = {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
} as const;

export type Difficulty = typeof Difficulty[keyof typeof Difficulty];

export type SheetType = 'Language' | 'Framework' | 'Database' | 'Tool';

export interface Snippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string; // e.g., 'javascript', 'python'
  tags: string[];
  difficulty: Difficulty;
}

export interface Category {
  id: string;
  title: string;
  snippets: Snippet[];
}

export interface CheatSheet {
  id: string;
  name: string;
  slug: string;
  iconName: string; // Map to Lucide icons
  type: SheetType;
  description: string;
  categories: Category[];
}

export interface UserNote {
  snippetId: string;
  content: string;
}