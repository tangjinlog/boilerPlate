import {
	useQueryClient,
	useQuery,
	useMutation,
	keepPreviousData,
} from '@tanstack/react-query';
import { exampleKey } from '@queries/queryKeys';
import { exampleHandlers } from '..';

export const useFetchExample = () => {
	const { data, isError, isFetching, isPlaceholderData } = useQuery<any>({
		queryKey: [...exampleKey.list(), ''],
		queryFn: () => exampleHandlers.getExample(),
		placeholderData: keepPreviousData,
		staleTime: 5000,
	});
	return {
		data: data,
		isError,
		isPlaceholderData,
		isFetching,
	};
};

export const usePostExample = () => {
	const queryClient = useQueryClient();
	const { data, mutateAsync, isPending } = useMutation<any>({
		mutationKey: [...exampleKey.post()],
		mutationFn: () => exampleHandlers.postExample(),
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: [...exampleKey.list()] });
		},
	});
	return { data, mutateAsync, isPending };
};
