import * as React from 'react';
import { MgHeader } from './global/MgHeader';
import { MgFooter } from './global/MgFooter';
import { css } from '@emotion/react';

const slot = css`
	max-width: 70rem;
	margin: 0 auto;
	margin-bottom: auto;
	@media screen and (max-width: 71rem) {
		padding: 0 1rem;
	}
`;

const footer = css`
	margin-top: 2rem;
	text-align: center;
`;

type Props = {
	children?: React.ReactNode;
};

export const MgLayout: React.FC<Props> = props => {
	return (
		<>
			<MgHeader />
			<div css={slot}>{props.children}</div>
			<div css={footer}>
				<MgFooter />
			</div>
		</>
	);
};
