import * as React from 'react';
import * as Prism from 'prismjs';
import 'prism-themes/themes/prism-one-dark.min.css';

type Props = {
	code: string;
	language?: string;
	block?: boolean;
};

export const MgCode: React.FC<Props> = props => {
	const lang = Prism.languages[props.language] ? props.language : 'js';

	const code = React.useMemo(() => Prism.highlight(props.code, Prism.languages[lang], lang), [props.code]);

	return (
		<>
			{props.block ? (
				<pre className={`language-${lang}`}>
					<code className={`language-${lang}`}>
						<div dangerouslySetInnerHTML={{ __html: code }} />
					</code>
				</pre>
			) : (
				<code className={`language-${lang}`}>
					<div dangerouslySetInnerHTML={{ __html: code }} />
				</code>
			)}
		</>
	);
};
