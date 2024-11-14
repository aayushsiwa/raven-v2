import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Button,
    StyleSheet,
} from "react-native";
import axios from "axios";
import { useSelectedCategories } from "../context/SelectedCategoriesContext"; // Access context
import Card from "../../components/Card"; // Import Card component
import { useTheme } from "styled-components"; // Import useTheme hook

interface Article {
    title: string;
    link: string;
    author: string;
    published: string;
    content: string;
}

const TabOneScreen: React.FC = () => {
    const { selectedCategories } = useSelectedCategories(); // Access categories from context
    const { cardBackground, text, background } = useTheme(); // Access theme values
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchArticles = async () => {
        if (selectedCategories.length === 0) {
            setLoading(false);
            setError("Please select a category first");
            return;
        } else {
            setError("");
        }

        try {
            const categoryQueries = selectedCategories.map((category) =>
                axios.get(
                    `https://raven-server-as.vercel.app/verge-tech/${category}`
                )
            );
            const responses = await Promise.all(categoryQueries);
            const allArticles = responses.flatMap((res) => res.data);
            setArticles(allArticles);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching articles:", error);
            setError("Failed to fetch articles");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [selectedCategories]);

    if (loading) return <ActivityIndicator size="large" color={text} />;

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            {error ? (
                <View>
                    <Text style={[styles.errorText, { color: text }]}>
                        {error}
                    </Text>
                    <Button
                        title="Retry"
                        onPress={fetchArticles}
                        color={text}
                    />
                </View>
            ) : articles.length === 0 ? (
                <Text style={[styles.noArticlesText, { color: text }]}>
                    No articles available
                </Text>
            ) : (
                <FlatList
                    data={articles}
                    keyExtractor={(item) => item.link}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            author={item.author}
                            published={item.published}
                            onPress={() => {
                                console.log("Card clicked:", item.link);
                            }}
                            theme={{
                                background: cardBackground,
                                textColor: text,
                            }}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    errorText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    noArticlesText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default TabOneScreen;
