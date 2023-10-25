import React from "react";
import styled, {css} from 'styled-components';
import { Link } from "react-router-dom";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function PhoneButton ({children, ...props}: ButtonProps) {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>

    )
}

const Wrapper = styled.button`
position: relative;
min-width: 88px;
max-width: 186px;
height: 52px;
border: 2px solid black;
padding: 12px 30px;
background: transparent;
cursor: pointer;
text-align: center;

  &:hover {
    background: black;
    color: white;
  }
`;


