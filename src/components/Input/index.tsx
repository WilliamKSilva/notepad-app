import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

type Props = TextInputProps 

export function Input({...rest}: Props) {
    const { colors } = useTheme();
    
    return (
        <Container {...rest} placeholderTextColor="#FFFFFF"/>
    );
}