# 🧹 Voicss × ESLint

<a href="https://www.npmjs.com/package/voicss-eslint"><img alt="release" src="https://img.shields.io/npm/v/voicss-eslint?style=flat-square&labelColor=EB2700&color=FFDDD6&label=npm&logo=npm"></a>&nbsp;
<a href="https://www.npmjs.com/package/voicss-eslint"><img alt="downloads" src="https://img.shields.io/npm/dy/voicss-eslint?style=flat-square&labelColor=EB2700&color=FFDDD6&label=%F0%9F%93%A5%20downloads"></a>&nbsp;
<a href="https://github.com/kh4f/voicss/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/kh4f/voicss?style=flat-square&labelColor=EB2700&color=FFDDD6&label=%F0%9F%9B%A1%EF%B8%8F%20license"></a>

**CSS Formatting for Voicss Blocks**

## ⚙️ Setup

```bash
bun a -d voicss-eslint
```

```ts
// eslint.config.ts
import voicss from 'voicss-eslint'

export default defineConfig([
	{
		name: 'Voicss',
		files: ['**/*.tsx'],
		extends: [voicss.configs.recommended], // enables all rules
		// plugins: { voicss }, // not necessary when using the recommended config
		rules: { 'voicss/indent': 'off' }, // can override rules here
	},
	// or just
	voicss.configs.recommended,
])
```

## 🧩 Rules

💼 – included in the `recommended` config  
🔧 – auto-fixable

| Name | Description | 💼 | 🔧 |
|-|-|-|-|
| `indent` | Enforce consistent indentation | ✔️ | ✔️ |
| `quote-style` | Enforce consistent string quotes | ✔️ | ✔️ |
| `no-multiple-empty-lines` | Disallow multiple empty lines | ✔️ | ✔️ |
| `spacing` | Disallow extra spaces | ✔️ | ✔️ |