# shopify-quick-theme

shopify-quick-theme is a starter kit for Shopify theme developers. This starter kit supports you to customize a Shopify theme and build a new one from scratch.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2021)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/shopify-quick-theme)

## Features

- Abstracting Shopify CLI command
- Bundle files with webpack
- Transpile SCSS to CSS with dart-sass
- Lint TS files with ESLint
- Lint SCSS files with Stylelint
- Format code with prettier
- Built-in test runner with Jest and Playwright

## Requirements

- [Node v16+](https://nodejs.org/en/)
- [Shopify CLI v2.13.0](https://shopify.dev/themes/tools/cli)

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
- [Playwright](https://playwright.dev/)

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

Use `newTheme` command to create a new theme from scratch. This command creates a copy of Dawn.

```shell
yarn newTheme
```

https://shopify.dev/themes/tools/cli/theme-commands#init

### Customize an existing theme

Use `pull:new` command to customize an existing theme.

```shell
yarn pull:new
```

### Add CSS and JavaScript into your theme files

Add these tags in `<head></head>` section.

```liquid
{{ 'style.css' | asset_url | stylesheet_tag }}
```

```liquid
<script src="{{ 'main.js' | asset_url }}" defer></script>
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

### Pull command

Retrieve theme files from Shopify without deleting local files.

```shell
yarn pull
```

### Push command

Upload your local theme files to Shopify without deleting remote files.

```shell
yarn push
```

Push to your development theme. If you don't have a development theme, then one is created.

```shell
yarn push:dev
```

Upload the theme to the theme library as a new unpublished theme.

```shell
yarn push:upload
```

### Deploy command

Build your local files and upload them to Shopify as production.

```shell
yarn deploy
```

Build your local files and upload them to Shopify as development.

```shell
yarn deploy:dev
```

### Open command
Returns links that let you preview the specified theme.

```shell
yarn open
```

### Cheat command

Open Shopify Cheat Sheet.

```shell
yarn cheat
```

[Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)

### Lint command

Lint this project code.

```shell
yarn lint
```

Fix this project code.

```shell
yarn lint:fix
```

### Test command

Run End-to-end testing and unit testing.

```shell
yarn test
```

Run unit testing.

```shell
yarn unit
```

```shell
yarn unit:watch
```

Run End-to-end testing in a headless.

```shell
yarn e2e
```

Run End-to-end testing with headed browser.

```shell
yarn e2e:headed
```

Generate End-to-end test code.

```shell
yarn e2e:codegen
```

### PostInstall command

Install missing TypeScript typings.

```shell
yarn postInstall
```

## End-to-end test
End-to-end test runner is build in this project.
Please create an env file and run this command if you want to do an End-to-end test.

Install supported browsers.

```shell
yarn e2e:install
```

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/)

## Contributes

Pull requests are always welcome.

## License

MIT
