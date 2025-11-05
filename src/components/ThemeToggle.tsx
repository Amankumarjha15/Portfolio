import React from 'react';
import { VscColorMode } from 'react-icons/vsc';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`rounded-full p-3 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${className}`}
            aria-label="Toggle theme"
        >
            <VscColorMode
                size={20}
                className={theme === 'dark' ? 'text-yellow-300' : 'text-blue-600'}
            />
        </button>
    );
};
