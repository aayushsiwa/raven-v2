// components/Card.tsx
import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

interface CardProps {
    title: string;
    author: string;
    published: string;
    onPress: () => void;
    theme: { background: string; textColor: string };
}

const CardContainer = styled(TouchableOpacity)<{ theme: { background: string } }>`
    background-color: ${({ theme }) => theme.background};
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    shadow-color: ${({ theme }) => theme.textColor};
    shadow-opacity: 0.1;
    shadow-radius: 5px;
    elevation: 5;
`;

const Title = styled(Text)<{ theme: { textColor: string } }>`
    color: ${({ theme }) => theme.textColor};
    font-size: 18px;
    font-weight: bold;
`;

const Author = styled(Text)<{ theme: { textColor: string } }>`
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
`;

const PublishedDate = styled(Text)<{ theme: { textColor: string } }>`
    color: ${({ theme }) => theme.textColor};
    font-size: 12px;
    margin-top: 5px;
`;

const Card: React.FC<CardProps> = ({ title, author, published, onPress, theme }) => {
    return (
        <CardContainer theme={theme} onPress={onPress}>
            <Title theme={theme}>{title}</Title>
            <Author theme={theme}>{author}</Author>
            <PublishedDate theme={theme}>
                {new Date(published).toLocaleDateString()}
            </PublishedDate>
        </CardContainer>
    );
};

export default Card;
