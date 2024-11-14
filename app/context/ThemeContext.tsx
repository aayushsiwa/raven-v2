// context/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme, Theme } from "../../theme";  // Import themes from theme.ts

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

interface ThemeContextProviderProps {
    children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const themeStyles = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
