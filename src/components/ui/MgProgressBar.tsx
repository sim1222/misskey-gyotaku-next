import { css } from '@emotion/react';
import * as React from 'react';


const bar = css`
	height: 10px;
	border-radius: 5px;
	transition: width 0.2s ease;
`;

type Props = {
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
	disabled?: boolean;
	progress?: number;
	unknown?: boolean;
}

export const MgProgressBar: React.FC<Props> = props => {
	return (
		props.unknown ?
			<div className="progress-bar" />
			:
			<div css={bar} style={{
				backgroundColor: props.color ? `var(--color-${props.color})` : `var(--color-primary)`,
				width: props.progress ? `${props.progress}%` : '0%',
			}} />
	)
}
