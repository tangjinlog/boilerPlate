import { css } from '@emotion/react';
import { Inter, Roboto } from 'next/font/google';

/* Fonts */
export const inter = Inter({
	subsets: ['latin'],
});

export const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400'],
});

/* Fonts Style */
const common = css`
	-webkit-font-smoothing: antialiased;
`;

export const fontMid = css`
	${common};
	font-size: 18px;
`;

export const fontBig = css`
	${common};
	font-size: 25px;
`;
