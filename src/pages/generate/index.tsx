import * as React from 'react';
import Head from 'next/head';
import { MgLayout } from '@/components/MgLayout';
import { MgProgressBar } from '@/components/ui/MgProgressBar';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { config } from '@/utils/config';

const root = css`
	margin-top: 5rem;
`;

export default function Generate() {
	const [progress, setProgress] = React.useState(0);
	const [message, setMessage] = React.useState('');

	const router = useRouter();

	const query = useRouter().query as {
		target: string;
		id: string;
	};

	const updateLoop = setInterval(() => {
		fetch(`${config.apiEndpoint}/api/v1/status?id=${query.id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				setProgress(data.progress);
				setMessage(data.message);
			});
	}, 1000);

	React.useEffect(() => {
		return () => {
			clearInterval(updateLoop);
		};
	}, []);

	React.useEffect(() => {
		if (progress === 100) {
			router.push(`/result/${query.id}`);
		}
	}, [progress]);

	return (
		<>
			<Head>
				<title>Generate</title>
			</Head>
			<MgLayout>
				<div css={root}>
					<h1>Generating Gyotaku™...</h1>
					<MgProgressBar progress={progress} />
					<div>{`${progress}%`}</div>

					<div>
						{Object.keys(query).map(key => (
							<div key={key}>
								{key}: {query[key as keyof typeof query]}
							</div>
						))}
					</div>
					<div>{message}</div>
				</div>
			</MgLayout>
		</>
	);
}
