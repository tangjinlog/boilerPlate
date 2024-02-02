import ExampleContext, { initialContext } from './context';
import type { ContextType } from './context';

/**
 * Provider
 * ```tsx
 * <ExampleProvider>
 *   <MyApp />
 * </ExampleProvider>
 * ```
 *
 * Provides the ExampleProvider to its child components.
 */
const ExampleProvider = ({
	children,
}: {
	children: React.ReactElement;
}): JSX.Element => {
	const example = () => {};

	const exampleContext: ContextType = {
		...initialContext,
		example,
	};

	console.log('example context', exampleContext);
	return (
		<ExampleContext.Provider value={exampleContext}>
			{children}
		</ExampleContext.Provider>
	);
};

export default ExampleProvider;
