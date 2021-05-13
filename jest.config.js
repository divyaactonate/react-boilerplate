const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

const SRC_PATH = '<rootDir>/src'
const resolvedPath = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
  modulePaths: ['<rootDir>'],
  roots: [SRC_PATH],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    ...resolvedPath,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
  modulePaths: ['<rootDir>'],
  // moduleNameMapper: {
  //   '@components/(.*)': '<rootDir>/src/components/$1',
  //   '@providers': '<rootDir>/src/providers',
  //   '@layouts/(.*)': '<rootDir>/src/layouts/$1',
  //   '@pages/(.*)': '<rootDir>/src/pages/$1',
  //   '@libs/(.*)': '<rootDir>/src/libs/$1',
  //   '@config/(.*)': '<rootDir>/src/config/$1',
  //   '@shared/(.*)': '<rootDir>/src/shared/$1',
  //   '@hoc/(.*)': '<rootDir>/src/hoc/$1',
  //   '@api/(.*)': '<rootDir>/src/api/$1',
  //   '@models': '<rootDir>/src/models',
  //   '@utils/(.*)': '<rootDir>/src/utils/$1',
  //   '@store/(.*)': '<rootDir>/src/store/$1',
  //   '@src/(.*)': '<rootDir>/src/$1',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__mocks__/fileMock.js',
  //   '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  // },
}
