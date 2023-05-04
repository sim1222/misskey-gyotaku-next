import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const root = css`
	background-color: #fff;
	border-bottom: 1px solid #eaeaea;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 0 2rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const title = css`
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: -0.05rem;
	color: var(--color-black);
`;

export const MgHeader: React.FC = () => {
	const router = useRouter();

	return (
		<header css={root}>
			<div css={title}>
				<div onClick={() => router.push("/")}>Misskey Gyotaku™</div>
			</div>
		</header>
	);
}
