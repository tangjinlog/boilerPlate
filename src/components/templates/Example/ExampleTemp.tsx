import { ExampleFetcher } from '@organisms/Fetcher';
import { ExampleContainer } from '@organisms/Container';
import { ApiErrorBoundary } from '@templates/ErrorBoundary';

function ExampleTemp() {
	return (
		<ApiErrorBoundary>
			<ExampleFetcher>{(props: any) => <ExampleContainer />}</ExampleFetcher>
		</ApiErrorBoundary>
	);
}

export default ExampleTemp;
