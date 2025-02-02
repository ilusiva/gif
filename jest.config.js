module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/*.spec.ts"],
    coveragePathIgnorePatterns: [
        "./__specs__/integration.ts"
    ]
};