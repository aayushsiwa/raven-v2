// context/SelectedCategoriesContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedCategoriesContextProps {
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create the context
const SelectedCategoriesContext = createContext<SelectedCategoriesContextProps | undefined>(undefined);

// Provider component
export const SelectedCategoriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return (
        <SelectedCategoriesContext.Provider value={{ selectedCategories, setSelectedCategories }}>
            {children}
        </SelectedCategoriesContext.Provider>
    );
};

// Custom hook to use the context
export const useSelectedCategories = (): SelectedCategoriesContextProps => {
    const context = useContext(SelectedCategoriesContext);
    if (!context) {
        throw new Error("useSelectedCategories must be used within a SelectedCategoriesProvider");
    }
    return context;
};
