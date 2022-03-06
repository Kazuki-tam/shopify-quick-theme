# shopify-quick-theme
shopify-quick-theme is a starter kit for shopify theme developers. You can customize a Shopify theme and also build a new theme from scratch with this starter kit.

Caution: This project is still in development.

## Status
[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2021)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/shopify-quick-theme)

## Features
- Abstracting shopify CLI command
- Bundle files with webpack
- Transpile SCSS to CSS with dart-sass
- Out of the box useful JavaScript libraries
- Out of the box useful SCSS functions and Mixins
- Lint TS files with ESLint
- Lint SCSS files with Stylelint
- Format code with prettier
- Built-in test runner with Jest

## Requirements
- [Node v16+](https://nodejs.org/en/)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)

Note: Please refer to [Install Shopify CLI](https://shopify.dev/themes/tools/cli/installation) if you haven't installed Shopify CLI yet.

## Main dependencies
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Yarn](https://yarnpkg.com/)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## How to use
Clone this repository and install dependencies.

```shell
yarn install
```

### Authenticate
Connect Shopify CLI with the store that you want to work on.

 ```shell
 shopify login --store xxxxxxxxx.myshopify.com
 ```

### Create a new theme
 Use `newTheme` command to create a new theme from scratch. This command create a copy of Dawn.

```shell
yarn newTheme
```

https://shopify.dev/themes/tools/cli/theme-commands#init

### Customize an existing theme
Use `pull:new` command to customize an existing theme.

```shell
yarn pull:new
```

## Available Commands
Recommend you to check out these commands before you get started.

### Start command
Start your project in development mode.

```shell
yarn start
```

### Build command
Build your project for production.

```shell
yarn build
```

Build your project for development.

```shell
yarn build:dev
```

### Cheat command
Open Shopify Cheat Sheet.

```shell
yarn cheat
```

[Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)

### Lint command
Lint project's code.

```shell
yarn lint
```

Lint and fix project's code.

```shell
yarn lint:fix
```

### Test command
Test project's code.

```shell
yarn test
```

```shell
yarn test:watch
```

### PostInstall command
Install missing TypeScript typings.

```shell
yarn postInstall
```

## Recommended IDE
[Visual Studio Code](https://code.visualstudio.com/)

## Contributes
Pull requests are always welcome.

## License
MIT
