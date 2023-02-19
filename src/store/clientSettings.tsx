import { atomWithStorage } from 'jotai/utils';

export type ThemeSettings = 'light' | 'dark';

export const themeAtom = atomWithStorage<ThemeSettings>('themeSettings', 'light');
