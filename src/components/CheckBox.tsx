import React from 'react';
import styled from 'styled-components';

export default function CheckBox(props: React.InputHTMLAttributes<HTMLInputElement>) {
	const { checked, ...rest } = props;
	return (
		<Container>
			<CheckBoxInput type="checkbox" checked={checked} {...rest} />
			<CheckBoxContent isChecked={!!checked} />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
`;

const CheckBoxInput = styled.input`
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	cursor: pointer;
	opacity: 0;
`;

const CheckBoxContent = styled.div<{ isChecked: boolean }>`
	position: absolute;
	pointer-events: none;
	top: 0;
	left: 0;
	width: 40px;
	height: 40px;
	background: transparent;
    border: 2px solid black;

	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		right: 1px;
		bottom: 1px;
		transition: 0.5s;
		background: url(${process.env.PUBLIC_URL+ '/images/icons8.svg'}) no-repeat center center;
		opacity: ${({ isChecked }) => (isChecked ? '0' : '1')};
	}

	&:after {
		position: absolute;
		content: '';
		width: 40px;
		height: 40px;
		flex-shrink: 0;
	}
`;
