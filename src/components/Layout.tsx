import React from "react";
import styled from "styled-components";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
position: relative;
width: 1280px;
height: 720px;
`;
  
  