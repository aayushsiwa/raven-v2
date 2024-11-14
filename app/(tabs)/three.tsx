// screens/SettingsScreen.tsx
import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const TabThreeScreen: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme === "dark" ? "#000" : "#fff" },
            ]}
        >
            <Text
                style={[
                    styles.header,
                    { color: theme === "dark" ? "white" : "black" },
                ]}
            >
                Settings
            </Text>
            <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                Current Theme: {theme === "light" ? "Light" : "Dark"}
            </Text>
            <Button
                title="Toggle Theme"
                onPress={toggleTheme}
                color={theme === "dark" ? "lightblue" : "darkblue"} // Change button color based on theme
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default TabThreeScreen;
