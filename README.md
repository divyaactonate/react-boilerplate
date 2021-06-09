<img src="https://www.carlrippon.com/static/9d15c1b7d155ac0ced0ca045c275950d/14e05/banner.png" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react project in seconds</strong></div>
<div align="center">A highly scalable, configurable, performant with best practices</div>

<br />

# Table of contents
  - [Quick-start](#quick-start)
  - [Features](#features)
  - [Configuration](#configuration)
  - [Scripts](#scripts)
  - [Git-Publish-Changes](#Git-Publish-Changes)
  - [React-CLI-Commands](#React-CLI-Commands)
  - [Project structure](#project-structure)
  - [Dependencies](#dependencies)
  - [DevDependencies](#devdependencies)
  - [Authors](#authors)

## Quick-start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/kaushalshah-98/react-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run install` in order to install dependencies.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:8090`._

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**!. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.
    

>You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured so that you can focus on the code.


## Features
<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, pages, stores and services - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and TS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Scalable and Simple state management</dt>
  <dd>Unidirectional data flow allows for change logging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS in css, scss or utiltity tailwind classes. Tailwind CSS A utility-first CSS framework for rapidly building custom user interfaces</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>Industry-standard Testing</dt>
  <dd>Allows to create tests in typescript and you can use enzume, jest and react-test-renderer all to simplify your testing, It also provides you with coverage report</dd>

  <dt>Ready for any Environment</dt>
  <dd>It is ready to work with any environment such as Development, Production and staging and all can have their different <span style="color: #e8cb7b">`.env`</span> files</dd>

   <dt>Path alias</dt>
  <dd>Create a path alias in <span style="color: #e8cb7b">`tsconfig.json`</span> and it will allow to find a file or resource located in a different directory or folder from the place where the shortcut is located.</dd>
</dl>

## Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* `webpack/webpack.dev.js` config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTests.ts` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Jest config `/jest.config.js`.
* Tailwind config `/tailwind.config.js`.
* Postcss config `/postcss.config.js`.
* Typescript config `/tsconfig.json`.
* React CLI config `/internals/generators/`.
* ESLint config `/.eslintrc.js`.
* Babel config `/.babelrc`.

## Scripts
* `npm run analyze:clean` - To remove previous stats created.
* `npm run analyze` - To generate the stats report.
* `npm run security-audit` - To scan your project for vulnerabilities.
* `npm run security-audit:json` - To get the detailed audit report in JSON format.
* `npm run security-audit:prod` - To scan your project for vulnerabilities skipping devDependencies.
* `npm run security-audit:dev` - To scan your project for vulnerabilities skipping dependencies.
* `npm run start` - To start in development mode.*
* `npm run start` - To start in development mode.
* `npm run build` - To build the code.
* `npm run build-tailwind` - To build tailwind css.
* `npm run test:clean` - To remove previous coverage created.
* `npm run test` - To run tests.
* `npm run test:coverage` - To run tests with coverage.
* `npm run open:coverage` - To open coverage report.
* `npm run prettify` - To prettify code.
* `npm run lint` - To check lint erros.
* `npm run lint-fix` - To fix auto fixable lint erros.
* `npm run commit` - To commit your changes.
* `npm run storybook` - To start Storybook locally.
* `npm run build-storybook` - To build Storybook as a static web application.

## Git-Publish-Changes

Step 1 (Only first time)
  
  ```
  npm install -g commitizen cz-conventional-changelog git-cz
  ```
Step 2 
  ```
npm run commit
  ```
Step 3
  ```
git push
  ```

## React-CLI-Commands

- To generate a new component, run the following command 
```bash 
  npm run g c
  OR
  npm run generate component
  OR
  npm run generate component <ComponentName>
```
- To generate a new page, run the following command 
```bash 
  npm run g p
  OR
  npm run generate page
  OR
  npm run generate page <PageName>
```
- To generate a new store, run the following command 
```bash 
  npm run g store
  OR
  npm run generate store
  OR
  npm run generate store <StoreName>
```
- To generate a new service, run the following command 
```bash 
  npm run g service
  OR
  npm run generate service
  OR
  npm run generate service <ServiceName>
```

<!-- 
## Scripts
>There are total 12 Scripts in total


### Webpack  
To start in development mode, run the following command 

```bash 
  npm run start
```
To build the code, run the following command 

```bash 
  npm run build
```

### Tailwind   
To build tailwind css, run the following command 

```bash 
  npm run build-tailwind
```


### Running Tests

To run tests, run the following command

```bash
  npm run test
```
To run tests with coverage, run the following command

```bash
  npm run test:coverage
```
To open coverage report, run the following command

```bash
  npm run open:coverage
```

### Linting and Prettifying 

To prettify code, run the following command 

```bash 
  npm run prettify
```
To check lint erros, run the following command 
```bash 
  npm run lint
```
To fix auto fixable lint erros, run the following command 
```bash 
  npm run lint-fix
```     


### Component Generation 

To generate a new component, run the following command 
```bash 
  npm run gen-comp <ComponentName>
```
To generate a new page, run the following command 
```bash 
  npm run gen-page <PageName>
```     
### Commitization 

To commit your changes, run the following command 
```bash 
npm install -g commitizen cz-conventional-changelog git-cz
npm run commit
```    -->


## Project structure

````

│───__mocks__
│   └──────────────────────────────────────────────────────── # Mocks  
├───.husky
│   └──────────────────────────────────────────────────────── # Husky hooks 
├───.vscode
│   └──────────────────────────────────────────────────────── # VS Code Settings 
│   └───extensions.json
│   └───launch.json
│   └───settings.json
├───config
│   └──────────────────────────────────────────────────────── # Global configs    
├───dist
│   └──────────────────────────────────────────────────────── # Production Build
├───coverage
│   └──────────────────────────────────────────────────────── # Coverage Report
├───env
│   └──────────────────────────────────────────────────────── # Environment files
│   └───.env.production
│   └───.env.staging
│   └───.env.local
│   └───.env.development
│    
├───public
│   └──────────────────────────────────────────────────────── # Public
│   └───assets
│ 
├───webpack
│   ├──────────────────────────────────────────────────────── # webpack Configs 
│   ├─── paths.js
│   ├───webpack.common.js 
│   ├───webpack.dev.js 
│   └───webpack.prod.js
├───src
│   │───api
│   │    │─────────────────────────────────────────────────── # All api's 
│   │    │───api1
│   │    │   └───.index.ts
│   │    │───api1
│   │    │   └───.index.ts
│   │    │───apicaller.ts
│   │    └───index.ts
│   │
│   ├───components
│   │   ├──────────────────────────────────────────────────── # All Components      
│   │   ├───ComponentName
│   │   │   ├───index.tsx
│   │   │   ├───ComponentName.css
│   │   │   └───ComponentName.test.tsx
│   │   │   
│   ├───config
│   │   ├───────────────────────────────────────────────────── # Config       
│   │   ├───constant.ts
│   │   └───globals.ts
│   │      
│   ├───layouts
│   │   └───────────────────────────────────────────────────── # Layout       
│   ├───libs
│   │   └───────────────────────────────────────────────────── # Libs      
│   │   └───logger.ts
│   │ 
│   ├───pages
│   │   └───────────────────────────────────────────────────── # pages      
│   │   └───PageName
│   │       └───index.tsx
│   ├───providers
│   │   └───────────────────────────────────────────────────── # providers      
│   │   └───index.tsx
│   ├───routes
│   │   └───────────────────────────────────────────────────── # routes       
│   │   ├───Protected.tsx
│   │   └───UnProtected.tsx
│   ├───shared
│   │   └──────────────────────────────────────────────────────# shared comonents       
│   └───store
│   │    └──────────────────────────────────────────────────── # Store setup       
│   │    ├───store1.ts
│   │    ├───store2.ts
│   │    ├───createStore.tsx
│   │    └───index.ts
│   │───utils
│   │    └───────────────────────────────────────────────────── # utils 
│   ├───styles
│   │    └───────────────────────────────────────────────────── # Global styles         
│   ├───setupTests.ts
│   │    └───────────────────────────────────────────────────── # Testsetup file         

````
## Dependencies

### React
- [`react`](https://reactjs.org/) - JavaScript library for building user interfaces.
- [`react-dom`](https://reactjs.org/docs/react-dom.html) - React package for working with the DOM.
- [`react-router-dom`](https://reactrouter.com/) - DOM bindings for React Router

### Mobx
- [`mobx`](https://mobx.js.org/) - Simple, scalable state management.
- [`mobx-react`](https://mobx.js.org/react-integration.html) - React bindings for MobX. Create fully reactive components.

### Form Handling
- [`formik`](https://formik.org/) - Build forms in React, without the tears
- [`yup`](https://www.npmjs.com/package/yup) - Dead simple Object schema validation
- [`react-select`](https://react-select.com/) - A Select control built with and for ReactJS

### Internationalization
- [`i18next`](https://www.npmjs.com/package/i18next) - I18next internationalization framework
- [`i18next-browser-languagedetector`](https://www.npmjs.com/package/i18next-browser-languagedetector) - Language detector used in browser environment for i18next
- [`i18next-http-backend`](https://www.npmjs.com/package/i18next-http-backend) - I18next-http-backend is a backend layer for i18next using in Node.js, in the browser and for Deno.
- [`react-i18next`](https://www.npmjs.com/package/react-i18next) - Internationalization for react done right. Using the i18next i18n ecosystem.

### UI Library
- [`react-hot-toast`](https://react-hot-toast.com/) - Smoking hot Notifications for React.
- [`react-contexify`](https://fkhadra.github.io/react-contexify/) - Add contextmenu to your react component with ease
- [`react-laag`](https://www.react-laag.com/) - A Hooks for positioning tooltips & popovers
- [`framer-motion`](https://www.framer.com/motion/) - A simple and powerful React animation library
- [`emotion/react`](https://emotion.sh/docs/introduction) - Simple styling in React.
- [`emotion/styled`](https://emotion.sh/docs/styled) - Styled API for emotion
- [`@headlessui/react`](https://headlessui.dev/) - React components for heroicons.
- [`@heroicons/react`](https://heroicons.com/) - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
- [`clsx`](https://www.npmjs.com/package/clsx) - A tiny (228B) utility for constructing className strings conditionally. Also serves as a faster & smaller drop-in replacement for the classnames module.
- [`twin.macro`](https://www.npmjs.com/package/twin.macro) - Twin blends the magic of Tailwind with the flexibility of css-in-js.
### Others
- [`Logatim`](http://sospedra.github.io/logatim/) - Isomorphic logger which implements log levels and ANSI styles
- [`axios`](https://axios-http.com/) - Promise based HTTP client for the browser and node.js


## DevDependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/runtime`](https://babeljs.io/docs/en/babel-preset-env) - Babel's modular runtime helpers
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-env) - Babel preset for all React plugins.
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-env) - Babel preset for TypeScript
<!-- - [`@emotion/babel-plugin`](https://babeljs.io/docs/en/babel-preset-env) - Recommended for TypeScript use -->

### UI Libraries
- [`tailwindcss`](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
### Jest and Enzyme and ReactTesting

- [`jest`](https://jestjs.io/) - Delightful JavaScript Testing
- [`enzyme`](https://jestjs.io/) - Delightful JavaScript Testing
- [`react-test-renderer`](https://jestjs.io/) - React package for snapshot testing.
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom#readme) - Custom jest matchers to test the state of the DOM
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities
- [`@testing-library/user-event`](https://github.com/testing-library/user-event#readme) - Fire events the same way the user does
- [`wojtekmaj/enzyme-adapter-react-17`](https://github.com/testing-library/user-event#readme) - Unofficial adapter for enzyme for React17


### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Loader to process CSS with PostCSS
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### StoryBook

- [`@storybook/addon-actions`](https://www.npmjs.com/package/@storybook/addon-actions) - Get UI feedback when an action is performed on an interactive element
- [`@storybook/addon-essentials`](https://www.npmjs.com/package/@storybook/addon-essentials) - Curated addons to bring out the best of Storybook
- [`@storybook/addon-links`](https://www.npmjs.com/package/@storybook/addon-links) - Link stories together to build demos and prototypes with your UI components
- [`@storybook/builder-webpack5`](https://www.npmjs.com/package/@storybook/builder-webpack5) - Storybook framework-agnostic API
- [`@storybook/react`](https://www.npmjs.com/package/@storybook/react) - Storybook for React: Develop React Component in isolation with Hot Reloading.

### Eslint
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript) -TypeScript .ts .tsx module resolver for `eslint-plugin-import`.
- [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint.
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Enforces the Rules of React Hooks.
- [`eslint-plugin-eslint-comments`](https://www.npmjs.com/package/eslint-plugin-eslint-comments) - Additional ESLint rules for ESLint directive comments.
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements.
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - TypeScript plugin for ESLint.
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) - An ESLint custom parser which leverages TypeScript ESTree.

### Plugins

<!-- - [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory -->
<!-- - [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets -->
<!-- - [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript -->
<!-- - [`@svgr/webpack`](https://github.com/mrsteele/dotenv-webpack) - SVGR can be used as a webpack loader, this way you can import your SVG directly as a React Component. -->
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`circular-dependency-plugin`](https://www.npmjs.com/package/circular-dependency-plugin) - Detect modules with circular dependencies when bundling with webpack.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - HMR using React Fast Refresh
- [`dotenv-webpack`](https://github.com/mrsteele/dotenv-webpack) - Supports dotenv and other environment variables
- [`babel-jest`](https://www.npmjs.com/package/babel-jest) - Jest plugin to use babel for transformation.
- [`ts-jest`](https://www.npmjs.com/package/babel-jest) - A preprocessor with source maps support to help use TypeScript with Jest







## Authors

<!-- Authors:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/kaushalshah98">
      <img src="https://avatars.githubusercontent.com/u/78411438?v=4" style="border-radius: 50%" width="80px;" alt="Kaushal Shah"/>
      <br />
      <sub><b>Kaushal Shah</b></td><td align="center">
    </td>
     <td align="center">
      <a href="https://github.com/prpateldev">
      <img src="https://avatars.githubusercontent.com/u/25995704?v=4"style="border-radius: 50%" width="80px;" alt="Piyush Patel"/>
      <br />
      <sub><b>Piyush Patel</b></td><td align="center">
    </td>
     <td align="center">
      <a href="https://github.com/shoaibmerchant">
      <img src="https://avatars.githubusercontent.com/u/4598631?v=4" style="border-radius: 50%" width="80px;" alt="Shoaib Merchant"/>
      <br />
      <sub><b>Shoaib Merchant</b></td><td align="center">
    </td>
  </tr>
  </table>
