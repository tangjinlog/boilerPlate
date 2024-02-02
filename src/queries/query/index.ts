import api from 'queries/config';

const getExample = async (): Promise<any> => {
	try {
		const res = await api.get(`/`);
		return res.data;
	} catch (error) {
		throw error;
	}
};

const postExample = async (): Promise<any> => {
	try {
		const res = await api.post(``, {});
		return res.data;
	} catch (error) {
		throw error;
	}
};

export const exampleHandlers = {
	getExample,
	postExample,
};
