import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextValue {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: React.ReactNode; // Define the type of children prop
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
