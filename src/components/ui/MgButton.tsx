import * as React from 'react';
import styled, { Interpolation } from '@emotion/styled';
import { SerializedStyles, Theme } from '@emotion/react';

const Button = styled.button`
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.2s ease, box-shadow 0.2s ease, transform 0.6s cubic-bezier(0, 0.87, 0.15, 1.02);
	box-sizing: border-box;
	user-select: none;
	color: #fff;

	background-color: var(--color-${props => props.color ?? 'primary'});

	&:hover {
		opacity: 0.8;
		box-shadow: 0 0 0 1px var(--color-info);
	}

	&:active {
		transition-duration: 5s;
		opacity: 0.1;
		box-shadow: 0 0 0 1px var(--color-info);
		transform: scale(0.6);
	}
`;

type Props = {
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
	children?: React.ReactNode;
	onClick?: () => void;
};

export const MgButton: React.FC<Props> = props => {
	const handleOnClick = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<Button color={props.color ?? 'primary'} onClick={() => handleOnClick()}>
			{props.children}
		</Button>
	);
};
