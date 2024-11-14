import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useSelectedCategories } from "../context/SelectedCategoriesContext";
import { useTheme } from "styled-components";  // Use theme hook

const categories = [
    "android", "apple", "apps", "climate", "crypto",
    "creators", "cybersecurity", "deals", "decoder", "elon-musk",
    "facebook", "film", "gadgets", "gaming", "google",
    "hot-pod", "how-to", "meta", "microsoft", "policy",
    "reviews", "samsung", "science", "space", "streaming",
    "tech", "tesla", "the-vergecast", "tiktok", "transportation",
    "tv-shows", "twitter", "youtube"
];

const TabTwoScreen: React.FC = () => {
    const { selectedCategories, setSelectedCategories } = useSelectedCategories();
    const { text, background } = useTheme(); // Get theme properties

    const toggleCategory = (category: string) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: background }]}>
            <Text style={[styles.header, { color: text }]}>Select Categories</Text>
            {categories.map((category) => (
                <View key={category} style={styles.categoryRow}>
                    <Checkbox
                        status={selectedCategories.includes(category) ? "checked" : "unchecked"}
                        onPress={() => toggleCategory(category)}
                    />
                    <Text style={{ color: text }}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Text>
                </View>
            ))}
            <Button 
                title="Save Selection" 
                onPress={() => {}} 
                color={text} // Button text color based on theme
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    categoryRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
});

export default TabTwoScreen;
