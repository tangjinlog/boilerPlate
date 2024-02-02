import axios, { AxiosInstance } from 'axios';
import type { QueryClientConfig } from '@tanstack/query-core';

const createInstance = (): AxiosInstance => {
	const customAxios = axios.create({
		baseURL: `http://localhost:3001`,
	});

	return customAxios;
};

const api = createInstance();

export const queryOptions: QueryClientConfig = {
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			throwOnError: true,
		},
		mutations: {
			retry: 0,
			throwOnError: true,
		},
	},
};

export default api;
