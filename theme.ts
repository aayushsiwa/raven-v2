// theme.ts

export type Theme = "light" | "dark";

export const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    cardBackground: "#f1f1f1", // Card background for light mode
    buttonBackground: "#007BFF", // Button background for light mode
    buttonText: "#ffffff", // Button text color for light mode
};

export const darkTheme = {
    background: "#000000",
    text: "#ffffff",
    cardBackground: "#333333", // Card background for dark mode
    buttonBackground: "#1e90ff", // Button background for dark mode
    buttonText: "#000000", // Button text color for dark mode
};
