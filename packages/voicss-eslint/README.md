# 🧹 Voicss × ESLint

**CSS Formatting** for Voicss

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