// ThemeContext.tsx
"use client";

import { createContext, ReactNode,useContext, useEffect, useState } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        // Verifica o tema armazenado no localStorage ou define como 'light' por padrão
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        // Aplica a classe 'dark' ao elemento <html> com base no tema
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Armazena o tema selecionado no localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
