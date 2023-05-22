import * as React from 'react';
import styled from '@emotion/styled';
import { Interpolation, SerializedStyles, Theme, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { IconExternalLink } from '@tabler/icons-react';

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
	display: inline;
	height: 1rem;
	width: 1rem;
	vertical-align: text-bottom;
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
					<IconExternalLink css={icon} />
				</a>
			) : (
				<div css={link} onClick={() => router.push(props.target ?? '')}>
					{props.children}
				</div>
			)}
		</div>
	);
};
