import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', '.husky/', 'package-lock.json'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
);
