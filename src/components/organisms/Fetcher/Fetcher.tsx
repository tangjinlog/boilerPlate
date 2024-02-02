import { useFetchExample } from '@queries/query/hooks';

export function ExampleFetcher({
	children,
}: {
	children: React.ReactNode | Function;
}) {
	const { data, isError, isFetching, isPlaceholderData } = useFetchExample();

	if (isError) {
		throw new Error('데이터를 불러오는 도중 에러가 발생했습니다.');
	}

	const toRender = typeof children === 'function' ? children({}) : children;

	return <>{toRender}</>;
}
