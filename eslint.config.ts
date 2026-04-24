import tseslint from 'typescript-eslint';
import angular from '@angular-eslint/eslint-plugin';
import template from '@angular-eslint/eslint-plugin-template';

export default tseslint.config(
  { ignores: ['projects/**/*'] },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angular,
    },
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    rules: {
      '@angular-eslint/component-class-suffix': [
        'error',
        { suffixes: ['Page', 'Component'] },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
    },
  },

  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': template,
    },
    rules: {},
  },
);
