import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { TextLink } from "../../components/TextLink";
import { Container, Logo, WrapperLogo, Title, WrapperContent } from "./styles";

export function Login() {
    const { control, formState: { errors } } = useForm();
    
    return (
        <Container>                
            <WrapperContent>
                <WrapperLogo>
                    <Logo name="notebook"/>
                    <Title>Notepad</Title>
                </WrapperLogo>                
                <InputForm 
                    placeholder="Login"
                    control={control}
                    name="login"
                    required
                    error={errors.login?.message}                    
                    autoCapitalize="none"
                />
                <InputForm 
                    placeholder="Senha"
                    control={control}
                    name="password"
                    required
                    error={errors.password?.message}
                    autoCapitalize="none"
                />
                <Button 
                    title="LogIn"
                />
                <TextLink 
                    title="Esqueci minha senha!"
                />
            </WrapperContent>            
        </Container>
    );
}