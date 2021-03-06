# Instructions

## Setup Typescript and Jest

Typescript and TS config

- <https://www.typescriptlang.org/>
- <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

`yarn add -D typescript`

Typescript and Jest + Babel

- <https://jestjs.io/>
- <https://jestjs.io/docs/next/getting-started>

`yarn add --dev babel-jest @babel/core @babel/preset-env`

`yarn add --dev @babel/preset-typescript`

`yarn add --dev @types/jest`

  - + `babel.config.js`

⚠️ However, there are some caveats to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ts-jest instead, or just run the TypeScript compiler tsc separately (or as part of your build process).

## 01 Testing functions

- <https://github.com/kentcdodds/react-jest-workshop>
- <https://github.com/fczbkk/webinar-test-tools-js>
- <https://github.com/fczbkk/webinar-testable-js>
- <https://github.com/fczbkk/workshop-testing>

## 02 Testing components

- <https://reactjs.org/docs/testing.html>
- <https://jestjs.io/docs/tutorial-react>
- <https://testing-library.com/docs/react-testing-library/intro/>
- <https://airbnb.io/projects/enzyme/>
- <https://enzymejs.github.io/enzyme/>
- For React 17 is enzyme merely deprecated
- <https://github.com/enzymejs/enzyme/issues/2429>

## 03 Testing Hooks

- <https://react-hooks-testing-library.com/>

## 04 Testing Context

- <https://testing-library.com/docs/recipes>
- <https://testing-library.com/docs/example-codesandbox>

## 06 API Calls

- <https://github.com/nock/nock>

## 07 Graphql

- <https://www.apollographql.com/docs/react/development-testing/testing/>

# Resources

- <https://testingjavascript.com/>
- <https://github.com/kentcdodds/testing-react-apps>
- hooks - <https://github.com/kentcdodds/react-hooks/tree/main/src>
- <https://github.com/kentcdodds/advanced-react-hooks/tree/main/src>
- <https://github.com/kentcdodds/advanced-react-patterns/tree/main/src>
- <https://github.com/kentcdodds/react-testing-library-examples>
- <https://github.com/kentcdodds/js-mocking-fundamentals>
- <https://github.com/kentcdodds/js-testing-fundamentals>
- <https://github.com/kentcdodds/testing-node-apps>
- <https://github.com/kentcdodds/react-testing-library-course>
- <https://github.com/kentcdodds/how-jest-mocking-works>
- <https://github.com/kentcdodds/dom-testing-library-with-anything>
- <https://react-testing-examples.com/>
