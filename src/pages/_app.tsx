import '@styles/globals.css';
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import Layout from '@templates/Layout';
import { GlobalErrorBoundary } from '@templates/ErrorBoundary';
import ExampleProvider from 'context/provider';
import { queryOptions } from '@queries/config';
import { useState } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(queryOptions));

	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={pageProps.dehydratedState}>
				<GlobalErrorBoundary>
					<ExampleProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ExampleProvider>
				</GlobalErrorBoundary>
			</HydrationBoundary>
		</QueryClientProvider>
	);
}
