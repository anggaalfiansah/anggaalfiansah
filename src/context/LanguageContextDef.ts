import { createContext } from 'react';
import type { LanguageContextType } from '../types';

export const LanguageContext = createContext<LanguageContextType | null>(null);
