import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View, ActivityIndicator, Text } from "react-native";

import { SelectedCategoriesProvider } from "./context/SelectedCategoriesContext";
import ThemeContextProvider from "./context/ThemeContext";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
    initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
        if (error) {
            console.error("Error loading fonts", error);
            setLoadingError(true);
        }
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded && !loadingError) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (loadingError) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "red" }}>
                    Error loading fonts. Please try again later.
                </Text>
            </View>
        );
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <ThemeContextProvider>
            {" "}
            {/* Wrap your app with ThemeContextProvider to provide the theme */}
            <SelectedCategoriesProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="modal"
                        options={{ presentation: "modal" }}
                    />
                </Stack>
            </SelectedCategoriesProvider>
        </ThemeContextProvider>
    );
}
