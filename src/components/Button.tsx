import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
    disabled?: boolean;
}


export default function Button ({children, ...props}: ButtonProps) {
    return (
        <WrapperButton {...props}>
            {children}
        </WrapperButton>
    )
}

const WrapperButton = styled.button`
background-color: #000000;
width: 100%;
min-width: 156px;
height: 36px;
border: none;
color: white;
text-transform: uppercase;
transition: 0.5s;
cursor: pointer;
&:disabled {
    opacity: 0.5;
    pointer-events: none;
}

&:hover {
    background: transparent;
    border: 2px solid black;
}
`