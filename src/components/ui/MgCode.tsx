import * as React from 'react';
import * as Prism from 'prismjs';
import 'prism-themes/themes/prism-one-dark.min.css';

type Props = {
	code: string;
	language?: string;
	block?: boolean;
};

export const MgCode: React.FC<Props> = props => {
	const lang = props.language ?? 'js';
	const prismLang = Prism.languages[lang] ? lang : 'js';

	const code = React.useMemo(() => Prism.highlight(props.code, Prism.languages[prismLang], prismLang), [props.code]);

	return (
		<>
			{props.block ? (
				<pre className={`language-${prismLang}`}>
					<code className={`language-${prismLang}`}>
						<div dangerouslySetInnerHTML={{ __html: code }} />
					</code>
				</pre>
			) : (
				<code className={`language-${prismLang}`}>
					<div dangerouslySetInnerHTML={{ __html: code }} />
				</code>
			)}
		</>
	);
};
