import { useContext } from 'react';

import ExampleContext from './context';

/**
 * ```js
 * const {
 *   // Calls state:
 *   user,
 *   calls,
 *   audioInputDeviceInfo,
 *   audioOutputDeviceInfo,
 *   videoInputDeviceInfo,
 *   isAuthenticated,
 *   currentCall,
 *   isBusy,
 *   dispatch,
 *
 *   // Auth methods:
 *   init,
 *   auth,
 *   deauth,
 * } = useSbCalls();
 * ```
 *
 * Use the `useExample` hook in your components to access the calls state and methods.
 */
const useExample = () => useContext(ExampleContext);

export default useExample;
