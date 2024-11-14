// components/StyledCard.tsx
import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Card = styled.View`
    background-color: ${({ theme }) => theme.cardBackground};
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    shadow-color: ${({ theme }) => theme.text};
    shadow-opacity: 0.1;
    shadow-radius: 5px;
    elevation: 5;
`;

const CardTitle = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    font-weight: bold;
`;

const CardContent = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    margin-top: 5px;
`;

const StyledCard = ({ title, content }: { title: string; content: string }) => {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </Card>
    );
};

export default StyledCard;
