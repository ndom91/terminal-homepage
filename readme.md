# TerminalJS Homepage

Pika/Web + Preact + Typescript Test Project

![screenshot1](https://imgur.com/rV6Kga9.png)

## Getting Started

```bash
npm i
npm start
```

It’ll run a multi-page app at `localhost:5000`.

## Babel Plugin

This example app makes use of [babel-plugin-import-pika-web](https://www.npmjs.com/package/babel-plugin-import-pika-web).
It transforms all absolute imports like so:

```js
import preact from "preact"; // Transforms this 🚫
import preact from "./web_modules/preact.js"; // Into this ✅
```

[Read the docs](https://www.npmjs.com/package/babel-plugin-import-pika-web) to learn more.

### Thanks
[dangodev/pika-web-preact](https://github.com/dangodev/pika-web-preact)   
[@pika/web](https://github.com/pikapkg/web)
