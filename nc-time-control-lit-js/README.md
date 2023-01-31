# \<nc-time-control-lit-js>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i nc-time-control-lit-js
```

## Usage

```html
<script type="module">
  import 'nc-time-control-lit-js/nc-time-control-lit-js.js';
</script>

<nc-time-control-lit-js></nc-time-control-lit-js>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
