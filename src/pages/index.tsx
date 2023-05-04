import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { MgButton } from '@/components/ui/MgButton';
import { MgLayout } from '@/components/MgLayout';
import { css } from '@emotion/react';
import { MgInput } from '@/components/ui/form/MgInput';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { config } from '@/utils/config';

const inter = Inter({ subsets: ['latin'] });

const $style = {
	desc: css``,
	input: css`
		display: inline-block;
		margin-right: 0.5rem;
	`,
	button: css`
		display: inline-block;
	`,
};

export default function Home() {
	const [target, setTarget] = useState<string>('');

	const router = useRouter();

	const submit = () => {
		if (!target) return;
		fetch(`${config.apiEndpoint}/api/v1/generate`, {
			method: 'POST',
			body: JSON.stringify({
				url: target,
			}),
		})
			.then(res => res.json())
			.then(res => {
				if (res.id) {
					router.push(`/generate?id=${res.id}&target=${res.target}`);
				}
			});
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MgLayout>
				<div>
					<div css={$style.desc}>
						<h1>Misskey Gyotaku™</h1>
						<p>Misskey Gyotaku™ is a service that allows you to easily create a Gyotaku™ of any Misskey content.</p>

						<h2>Supported content</h2>
						<h3>Misskey</h3>
						<ul>
							<li>Notes</li>
							<li>Users</li>
						</ul>

						<h3>Mastodon</h3>
						<ul>
							<li>Toots</li>
						</ul>
					</div>
					<div css="$style.ui">
						<div css={$style.input}>
							<MgInput value={target} setValue={setTarget} placeholder="Misskey Instance URL" />
						</div>
						<div css={$style.button}>
							<MgButton onClick={submit}>
								<>Go</>
							</MgButton>
						</div>
						{/* <UiMgAccordion>
							<template #header>
								<div>Advanced</div>
							</template>
							<div>
								<UiFormMgInput v-model="input" placeholder="Misskey Instance URL" />
								<UiMgButton>Go</UiMgButton>
							</div>
						</UiMgAccordion> */}
					</div>
				</div>
			</MgLayout>
		</>
	);
}
