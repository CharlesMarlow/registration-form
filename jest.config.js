/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/mocks/'],
};
