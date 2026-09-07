# Changelog

## &ensp; ` 🏷️ v0.3.0  `

### &emsp; ✨ Features
- **New `spacing` rule**: added a fixable rule to catch repeated spaces and stray spaces before semicolons. [🡥](https://github.com/voicss/voicss-eslint/commit/4eacb25)
- **New `no-multiple-empty-lines` rule**: added a fixable rule to prevent repeated blank lines. [🡥](https://github.com/voicss/voicss-eslint/commit/9550d28)

### &emsp; 🩹 Fixes
- **Improved multiline indentation**: wrapped declaration values such as `transition:` now use a hanging indent one level deeper than the property line. [🡥](https://github.com/voicss/voicss-eslint/commit/df177f7)

##### &emsp;&emsp; [Commit log](https://github.com/voicss/voicss/compare/voicss-eslint@0.2.0...voicss-eslint@0.3.0) &ensp;•&ensp; Apr 20, 2026

## &ensp; ` 🏷️ v0.2.0  `

### &emsp; ✨ Features
- **New `quote-style` rule**: added the rule to enforce and auto-fix `'single'` and `"double"` string quotes inside Voicss CSS template literals. [🡥](https://github.com/voicss/voicss-eslint/commit/ec1cf81)

### &emsp; 🩹 Fixes
- **Improved `indent` rule**:
  - Ignored strings and comments when calculating brace levels to prevent incorrect formatting. [🡥](https://github.com/voicss/voicss-eslint/commit/c4f0f34)
  - Skipped strict block-level indentation inside method calls (parentheses) to avoid false positives. [🡥](https://github.com/voicss/voicss-eslint/commit/900dac1)
  - The closing backtick now correctly aligns with the outer `void` expression rather than the inner CSS block when placed on its own line. [🡥](https://github.com/voicss/voicss-eslint/commit/a0dc898)

##### &emsp;&emsp; [Commit log](https://github.com/voicss/voicss/compare/voicss-eslint@0.1.0...voicss-eslint@0.2.0) &ensp;•&ensp; Apr 19, 2026

## &ensp; ` 🏷️ v0.1.0  `

### &emsp; 📢 BREAKING CHANGES
- The `Rawstyle ESLint` plugin has been unpublished and replaced by `Voicss ESLint` with a new implementation and release line. [🡥](https://github.com/voicss/voicss-eslint/commit/a9a54e8)

### &emsp; ✨ Features
- **Voicss ESLint plugin**: introduced the first Voicss-focused ESLint plugin with a new implementation aligned with the current CSS-in-TS architecture. [🡥](https://github.com/voicss/voicss-eslint/commit/a9a54e8)

##### &emsp;&emsp; [Commit log](https://github.com/voicss/voicss/commits/voicss-eslint@0.1.0) &ensp;•&ensp; Apr 18, 2026