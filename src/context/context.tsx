import { createContext } from 'react';

/** Context */
export type ContextType = {
	example: () => void;
};

const stub = (): never => {
	throw new Error('You forgot to wrap your component in <ExampleContext>.');
};

export const initialContext: ContextType = {
	example: stub,
};

const ExampleContext = createContext<ContextType>(initialContext);

export default ExampleContext;
