import { create } from 'zustand';
import { Platform } from 'react-native';

interface ColorScheme {
  isDark: boolean;
  toggleColorScheme: () => void;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

export const useColorScheme = create<ColorScheme>((set) => ({
  isDark: false,
  toggleColorScheme: () =>
    set((state) => ({ isDark: !state.isDark })),
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    card: '#F2F2F7',
    text: '#000000',
    border: '#C6C6C8',
    notification: '#FF3B30',
  },
}));

// Update colors when theme changes
useColorScheme.subscribe((state) => {
  if (state.isDark) {
    state.colors.background = '#000000';
    state.colors.card = '#1C1C1E';
    state.colors.text = '#FFFFFF';
    state.colors.border = '#38383A';
  } else {
    state.colors.background = '#FFFFFF';
    state.colors.card = '#F2F2F7';
    state.colors.text = '#000000';
    state.colors.border = '#C6C6C8';
  }
});