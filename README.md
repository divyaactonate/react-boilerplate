
# React Awesome Boilerplate

![Logo](https://www.carlrippon.com/static/9d15c1b7d155ac0ced0ca045c275950d/14e05/banner.png)

    

> 🚀 This project is built with WEBPACK 5 and latest version of react 
- 12 Dependencies
- 66 Dev-dependencies

<br />

### Table of contents
[Installation](#installation)

[Authors](#Authors)

[Features](#Features)

[Scripts](#scripts)

[Project-Structure](#project-structure)

<br/>

---
<br/>

## Installation 

Install my-project with npm

```bash 
  npm install 
```

<br/>

---
<br/>
    
## Authors

- [@kaushalshah-98](https://github.com/kaushalshah98)
- [@prpateldev](https://github.com/prpateldev)

<br/>

---
<br/>
## Features

- TypeScript                                   
- Javascript                                   
- Router                                       
- Sentry                                       
- Logger (logatiim)                            
- Router (react-router)                   
- Mobx             
- Styled components
- Css,Scss         
- Webpack 5       
- HMR             
- Tailwind        
- Different env variables support                                           
- Optimized prod build (chunks,minifycss,terser)     
- Shorctur paths                                     
- Cli support for genearatioon of components         
- EsLint                                             
- Prettier
- Husky
- Jest
- Enzyme
- Code Coverage Report
- Git commitization
  
<br/>

---
<br/>

## Scripts
>There are total 12 Scripts in total

<br/>

### Webpack  
To start in development mode, run the following command 

```bash 
  npm run start
```
To build the code, run the following command 

```bash 
  npm run build
```
<br/>

### Tailwind   
To build tailwind css, run the following command 

```bash 
  npm run build-tailwind
```
To build the code, run the following command 

```bash 
  npm run build
```
<br/>

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
  npm run oepn:coverage
```
<br/>

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
<br/>

### Component Generation 

To generate a new component, run the following command 
```bash 
  npm run gen-comp <ComponentName>
```
To generate a new page, run the following command 
```bash 
  npm run gen-page <PageName>
```     

<br/>

### Commitization 

To commit your changes, run the following command 
```bash 
npm install -g commitizen cz-conventional-changelog git-cz
npm run commit
```   

<br/>

---
<br/>


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

