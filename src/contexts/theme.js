import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const useTheme = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const toggleTheme = (value) => {
        setTheme(value);
    };

    return { theme, toggleTheme };
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, useTheme };

