import { Interpolation, SerializedStyles, Theme, css } from '@emotion/react';
import * as React from 'react';


const input = css`
	border: solid 1px #ccc;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;

	&:focus {
		outline: none;
	}
	&::placeholder {
		color: #ccc;
	}
`;

type Props = {
	placeholder?: string;
	value?: string;
	setValue?: (value: string) => void;
};

export const MgInput: React.FC<Props> = props => {


	return (
		<input
			css={input}
			type="text"
			placeholder={props.placeholder}
			value={props.value}
			onChange={e => props.setValue?.(e.target.value)}
		/>
	);
}
