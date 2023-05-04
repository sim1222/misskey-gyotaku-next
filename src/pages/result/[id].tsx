import { MgCode } from '@/components/ui/MgCode';
import { MgLink } from '@/components/ui/MgLink';
import { config } from '@/utils/config';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import * as React from 'react';

const image = css`
	display: block;
	max-width: 100%;
`;

const pdfLink = css`
	display: block;
`;

const code = css`
	display: block;
`;

export default function Result() {
	const router = useRouter();
	const { id } = router.query as { id: string };

	const [image, setImage] = React.useState('');
	const [pdf, setPdf] = React.useState('');
	const [json, setJson] = React.useState({});

	React.useEffect(() => {
		fetch(`${config.apiEndpoint}/api/v1/result`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
			}),
		})
			.then(res => res.json())
			.then(data => {
				setImage(data.png);
				setPdf(data.pdf);
				setJson(data.note);
			});
	}, []);

	return (
		<>
			<div>
				{image ? (
					<>
						<h1>{id}</h1>
						<img css={image} src={image} />
						<div css={pdfLink}>
							<MgLink href={pdf} target="_blank">
								Download PDF
							</MgLink>
						</div>
						<div css={code}>
							<MgCode code={JSON.stringify(json, null, 2)} block />
						</div>
					</>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</>
	);
}
