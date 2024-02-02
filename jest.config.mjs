import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/(.)/$': '<rootDir>/src/$1',
		'^@components/(.)$': '<rootDir>/src/components/$1',
		'^@pages/(.)$': '<rootDir>/src/pages/$1',
		'^@styles/(.)$': '<rootDir>/src/styles/$1',
		'^@public/(.*)$': '<rootDir>/public/$1',
		'^@test/(.*)$': '<rootDir>/src/test/$1',
	},
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
};

export default createJestConfig(customJestConfig);
