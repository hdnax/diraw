import type {
  Linter,
} from 'eslint';
import {
  baseConfig,
} from '@hdnax/nuclint';

const config: Linter.Config[] = [
  ...baseConfig,
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
    ],
  },
];

export default config;
