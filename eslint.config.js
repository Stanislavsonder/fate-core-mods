import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'
import globals from 'globals'
import security from './eslint-rules/no-minified-source.js'

// prettier-ignore
const ignores = [
	'**/.DS_Store',
	'**/dist/',
	'**/node_modules/',
	'**/.pnpm-store/'
]

/**
 * Two tiers, per docs/REVIEW_CHECKLIST.md and README's security-lint step:
 *  - errors (auto-reject a PR): eval/new Function/implied eval (core rules),
 *    non-literal dynamic import(), document.write, minified/obfuscated source.
 *  - warnings (require a human sign-off comment in the PR description):
 *    network access, direct storage access, cookies. Not banned outright —
 *    a mod that legitimately needs them (e.g. a weather-dice mod calling an
 *    API) is allowed, but must be justified and re-reviewed.
 */
export default tsEslint.config(
	{ ignores },
	{
		extends: [eslint.configs.recommended, ...tsEslint.configs.recommended, ...vue.configs['flat/recommended']],
		files: ['**/*.{js,ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				parser: tsEslint.parser
			}
		},
		rules: {
			'vue/multi-word-component-names': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }]
		}
	},
	{
		files: ['mods/*/src/**/*.{js,ts,vue}', 'mods/*/bundle.ts'],
		plugins: { security },
		rules: {
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-new-func': 'error',
			'security/no-minified-source': 'error',
			'no-restricted-syntax': [
				'error',
				{
					selector: "ImportExpression[source.type!='Literal']",
					message: 'Dynamic import() with a non-literal specifier is not allowed in mod source (auto-reject per review checklist).'
				},
				{
					selector: "CallExpression[callee.object.name='document'][callee.property.name='write']",
					message: 'document.write() is not allowed in mod source (auto-reject per review checklist).'
				},
				{
					selector: "NewExpression[callee.name='ActiveXObject']",
					message: 'ActiveXObject is not allowed in mod source (auto-reject per review checklist).'
				}
			]
		}
	},
	{
		files: ['mods/*/src/**/*.{js,ts,vue}', 'mods/*/bundle.ts'],
		rules: {
			'no-restricted-globals': [
				'warn',
				{ name: 'fetch', message: 'Network access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).' },
				{ name: 'XMLHttpRequest', message: 'Network access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).' },
				{ name: 'WebSocket', message: 'Network access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).' },
				{ name: 'localStorage', message: 'Direct storage access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).' },
				{ name: 'indexedDB', message: 'Direct storage access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).' }
			],
			'no-restricted-syntax': [
				'warn',
				{
					selector: "MemberExpression[object.name='document'][property.name='cookie']",
					message: 'document.cookie access needs justification in the PR description and re-review (see REVIEW_CHECKLIST.md).'
				},
				{
					selector: "MemberExpression[object.name='navigator'][property.name='sendBeacon']",
					message: 'navigator.sendBeacon is network access — needs justification in the PR description and re-review.'
				}
			]
		}
	},
	eslintConfigPrettier
)
