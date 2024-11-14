// components/StyledButton.tsx
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

const StyledButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.buttonBackground};
    padding: 12px;
    border-radius: 8px;
    align-items: center;
`;

const ButtonText = styled(Text)`
    color: ${({ theme }) => theme.buttonText};
    font-size: 16px;
    font-weight: bold;
`;

const ThemedButton = ({
    title,
    onPress,
}: {
    title: string;
    onPress: () => void;
}) => {
    return (
        <StyledButton onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </StyledButton>
    );
};

export default ThemedButton;
