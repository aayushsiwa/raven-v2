import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useTheme } from "styled-components/native"; // Import useTheme hook
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useSelectedCategories } from "../context/SelectedCategoriesContext"; // Import context

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const { selectedCategories } = useSelectedCategories(); // Only use selectedCategories if needed
    const theme = useTheme(); // Access the current theme

    return (
        <View style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    // Use theme values for active tab tint color
                    tabBarActiveTintColor: theme.buttonBackground, // Active tab color from theme
                    // Optionally apply inactive tab color if you have a specific theme for it
                    tabBarInactiveTintColor: theme.text, // Inactive tab text color based on theme text
                    headerShown: useClientOnlyValue(false, false),
                    tabBarStyle: { backgroundColor: theme.background }, // Tab bar background color based on theme
                    tabBarLabelStyle: { color: theme.text }, // Label text color based on theme
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Feed",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="feed" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="two"
                    options={{
                        title: "Subscriptions",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="heart" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="three"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="gear" color={color} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
