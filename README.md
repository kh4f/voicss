<div align="center">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kh4f/voicss/refs/heads/assets/logo-dark.png">
		<img alt="logo" src="https://raw.githubusercontent.com/kh4f/voicss/refs/heads/assets/logo-light.png">
	</picture>
	<br>
	Ultra-Light Zero-Runtime <b>CSS-in-TS Toolkit</b> for React
	<br><br>
	<p>
		<a href="https://www.npmjs.com/package/voicss"><img src="https://img.shields.io/npm/v/voicss?style=flat-square&labelColor=D2371B&color=FBDCCB&label=npm&logo=npm" alt="npm"/></a>&nbsp;
		<a href="https://www.npmjs.com/package/voicss"><img src="https://img.shields.io/npm/dy/voicss?style=flat-square&labelColor=D2371B&color=FBDCCB&label=%F0%9F%93%A5%20downloads" alt="downloads"/></a>&nbsp;
		<a href="https://github.com/kh4f/voicss/blob/main/LICENSE"><img src="https://img.shields.io/github/license/kh4f/voicss?style=flat-square&labelColor=D2371B&color=FBDCCB&label=%F0%9F%9B%A1%EF%B8%8F%20license" alt="license"/></a>
	</p>
	<b>
		<a href="#-overview">Overview</a>&nbsp; •&nbsp;
		<a href="#-quick-start">Quick Start</a>&nbsp; •&nbsp;
		<a href="#%EF%B8%8F-setup">Setup</a>&nbsp; •&nbsp;
		<a href="#%EF%B8%8F-usage">Usage</a>
	</b>
	<br><br>
	<img alt="demo" src="https://raw.githubusercontent.com/kh4f/voicss/refs/heads/assets/demo.png">
</div>

## 👀 Overview

**Voicss** */vɔɪs/* is a lightweight zero-runtime CSS-in-TS toolkit for React that extracts `` void `css ...` `` blocks from `.ts(x)` files into native CSS.

- **Zero-Runtime:** styles are extracted at build time, no JS in production
- **Native CSS:** write standard CSS with all modern features
- **Modern Bundlers:** first-class support for Next.js and Vite
- **HMR:** instant style updates during development
- **[VS Code Extension](https://marketplace.visualstudio.com/items?itemName=kh4f.voicss):** syntax highlighting, autocomplete, validation...
- **[ESLint Plugin](https://www.npmjs.com/package/voicss-eslint):** CSS formatting in Voicss blocks

## ⚡ Quick Start

Scaffold a [demo project](templates) for Next.js/Vite/tsdown:

```bash
bun create voicss
```

## ⚙️ Setup

```bash
bun a -d voicss
```

```ts
// vite.config.ts
import type { UserConfig } from 'vite'
import voicss from 'voicss/vite'

export default defineConfig({
	plugins: [voicss()],
})
```

```ts
// next.config.ts
import type { NextConfig } from 'next'
import { voicssTurboRule } from 'voicss/next'

export default {
	turbopack: { rules: { ...voicssTurboRule } },
} satisfies NextConfig
```

## 🕹️ Usage

Write `` void `css ...` `` blocks in your `.ts(x)` files — they are extracted into native CSS at build time:

```tsx
export default function App() {
	return <h1 className='title'>Hello</h1>
}

void `css
.title {
	color: red;
	font-size: 2rem;
}`
```

- Voicss produces **global CSS**
- Voicss blocks can be placed **anywhere in a module**