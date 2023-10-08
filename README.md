# shopify-quick-theme

shopify-quick-theme is a starter kit for Shopify theme developers. This starter kit supports you to customize a Shopify theme and build a new one from scratch.

Please refer to [shopify-quick-theme-mix](https://github.com/Kazuki-tam/shopify-quick-theme-mix) if you want to use Shopify GitHub integration.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/shopify-quick-theme)](https://github.com/Kazuki-tam/shopify-quick-theme/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/shopify-quick-theme)

## Features

- Abstracting Shopify CLI command
- Bundle TS files with Rspack
- Transpile SCSS to CSS with dart-sass
- Lint TS files with ESLint
- Lint SCSS files with Stylelint
- Format code with prettier
- Built-in test runner with Jest and Playwright

## Requirements

- [Node v18 or higher](https://nodejs.org/en/)
- [Shopify CLI v3.49.6 or higher](https://shopify.dev/themes/tools/cli)

Note: Please refer to [Install Shopify CLI](https://shopify.dev/themes/tools/cli/installation) if you haven't installed Shopify CLI yet.

[📖 Upgrade or uninstall Shopify CLI](https://shopify.dev/themes/tools/cli/upgrade-uninstall)
## Main dependencies

- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [pnpm](https://pnpm.io/)
- [Rspack](https://www.rspack.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Playwright](https://playwright.dev/)

## How to use

Clone this repository and install dependencies.

```bash
pnpm install
```

Create a .env file at the root directory, and then add your SHOPIFY_FLAG_STORE value at least. Replace the placeholder YOUR_STORE_NAME with your actual store name.

```
SHOPIFY_FLAG_STORE=YOUR_STORE_NAME
```

### Create a new theme

Use `newTheme` command to create a new theme from scratch. This command creates a copy of Dawn.

```bash
pnpm newTheme
```

[📖 Shopify CLI commands for themes - init](https://shopify.dev/themes/tools/cli/commands#init)

### Customize an existing theme

Use `pull:new` command to customize an existing theme.

```bash
pnpm pull:new
```

### Add CSS and JavaScript into your theme files

Add these tags in `<head></head>` section.

```liquid
{{ 'custom-style.css' | asset_url | stylesheet_tag }}
```

```liquid
<script src="{{ 'custom-script.js' | asset_url }}" defer></script>
```

## Available Commands

Recommend you to check out these commands before you get started.

### Start command

Start your project in development mode.

```bash
pnpm dev
```

### Build command

Build your project for production.

```bash
pnpm release
```

Build your project for development.

```bash
pnpm build
```

<details>
<summary>Other support commands</summary>

### Pull command

Retrieve theme files from Shopify without deleting local files.

```bash
pnpm pull
```

### Push command

Upload your local theme files to Shopify without deleting remote files.

```bash
pnpm push
```

Push to your development theme. If you don't have a development theme, then one is created.

```bash
pnpm push:dev
```

Upload the theme to the theme library as a new unpublished theme.

```bash
pnpm push:upload
```

### Deploy command

Build your local files and upload them to Shopify as production.

```bash
pnpm deploy
```

Build your local files and upload them to Shopify as development.

```bash
pnpm deploy:dev
```

### Preview command
Returns links that let you preview the specified theme.

```bash
pnpm preview
```

### Cheat command

Open Shopify Cheat Sheet.

```bash
pnpm cheat
```

[Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)

### Lint command

Lint this project code.

```bash
pnpm lint
```

Fix this project code.

```bash
pnpm lint:fix
```

### Test command

Run End-to-end testing and unit testing.

```bash
pnpm test
```

Run unit testing.

```bash
pnpm unit
```

```bash
pnpm unit:watch
```

Run End-to-end testing in a headless.

```bash
pnpm e2e
```

Run End-to-end testing with headed browser.

```bash
pnpm e2e:headed
```

Generate End-to-end test code.

```bash
pnpm e2e:codegen
```

### Share command
Uploads your theme as a new, unpublished theme in your theme library.

```bash
pnpm share
```

### Package command
Packages your local theme files into a ZIP file that can be uploaded to Shopify.

```bash
pnpm package
```

### PostInstall command

Install missing TypeScript typings.

```bash
pnpm postInstall
```

</details>

## End-to-end test
Please create an env file and run this command if you want to do an End-to-end test.

Install supported browsers.

```bash
pnpm e2e:install
```

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/)


## Contributes

Pull requests are always welcome.

## Support
I'll be trying to keep this starter kit as up-to-date as possible.
I hope you buy me a coffee if this starter kit is helpful for you.

<!-- BADGES/ -->
<p>
    <a href="https://buymeacoffee.com/ricebookspk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" width="130"></a>
</p>
<!-- /BADGES -->

## License

MIT
