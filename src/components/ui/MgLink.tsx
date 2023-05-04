import * as React from 'react';
import styled from '@emotion/styled';
import { Interpolation, SerializedStyles, Theme, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const root = css`
	display: inline-block;

	transition: all 0.1s ease-in-out;

	&:hover {
		opacity: 0.8;
		transform: translateY(-1px);
	}
`;

const link = css`
	color: var(--color-link);
	text-decoration: underline;
	cursor: pointer;
`;

const icon = css`
	display: inline-block;
	height: 1rem;
`;

type Props = {
	href?: string;
	target?: string;
	children?: React.ReactNode;
};

export const MgLink: React.FC<Props> = props => {
	const router = useRouter();

	return (
		<div css={root}>
			{props.href ? (
				<a css={link} href={props.href} target="_blank" rel="noreferrer">
					{props.children}
					<FontAwesomeIcon css={icon} icon={faArrowUpRightFromSquare} />
				</a>
			) : (
				<div css={link} onClick={() => router.push(props.target ?? '')}>
					{props.children}
				</div>
			)}
		</div>
	);
};
