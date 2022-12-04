![image](https://user-images.githubusercontent.com/31235308/201514264-80aeaa07-515c-4549-9f50-abc6b309e945.png)

<h1 align="center">Expenses</h1>

<p align="center" margin-top="25px" >
  <img src="https://img.shields.io/badge/Status-Development-red" alt="Status: Development" />
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub" src="https://img.shields.io/github/license/viniciusanchieta/expenses?color=blueviolet">
</p>

## About

This project is a simple expenses manager, where you can add, edit and delete expenses.

## Status

-   [x] Create the project with Next.JS v.13
-   [x] Create structure of the project
-   [x] Create the components with styles
    -   [x] Common components
-   [ ] Create the pages
    -   [ ] Page postings
    -   [ ] Page login
-   [ ] Create the routes
-   [ ] Create the tests
-   [ ] Deploy the project on Vercel

## Structure

The structure of the project is based on the DDD (Domain Driven Design) pattern, where the domain is divided into layers, each with its own responsibility.
Layers:

-   Application: responsible for the application's business rules.
-   Domain: responsible for creating the domain entities.
-   Infra: responsible for the data access layer.
-   Main: responsible for the application's entry point.
-   Presentation: responsible for the application's presentation layer.

## Technologies

This project was developed with the following technologies:

-   [React](https://reactjs.org)
-   [Next.js](https://nextjs.org)
-   [TypeScript](https://www.typescriptlang.org)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Jest](https://jestjs.io)
-   [Testing Library](https://testing-library.com)
-   [Yarn](https://yarnpkg.com) or [NPM](https://www.npmjs.com)
-   [Husky](https://typicode.github.io/husky/#/)
-   [Storybook](https://storybook.js.org)

## Getting started

Clone the project and access the folder.

```bash
$ cd expenses
```

Follow the steps below:

```bash
# Install the dependencies
$ yarn install
# or
$ npm install
```

```bash
# Start the project
$ yarn dev
# or
$ npm run dev
```

Extra step for running tests:

```bash
# Run the tests
$ yarn test
# or
$ npm run test
```

Coverages:

```bash
# Run the tests
$ yarn test:ci
# or
$ npm run test:ci
```

Components documentation:

```bash
$ yarn storybook
# or
$ npm run storybook
```

## Contributors

[![](https://contrib.rocks/image?repo=viniciusanchieta/generate-component-and-style)](https://github.com/viniciusanchieta/generate-component-and-style/graphs/contributors)

## License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
