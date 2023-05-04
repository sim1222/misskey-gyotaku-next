import * as React from 'react';
import { MgLink } from '../ui/MgLink';
import { Interpolation, SerializedStyles, Theme, css } from '@emotion/react';

const link = css`
	display: inline-block;
`

export const MgFooter: React.FC = () => {
	return (
		<footer>
			© {new Date().getFullYear()}{' '}
			<div css={link}>
				<MgLink href="https://github.com/sim1222">sim1222</MgLink>
			</div>
			. View on{' '}
			<div css={link}>
				<MgLink href="https://github.com/sim1222/misskey-gyotaku-next">GitHub</MgLink>
			</div>
		</footer>
	);
}
