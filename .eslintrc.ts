module.exports = {
  overrides: [
    {
      files: ['./src/app/generated/prisma/wasm.js'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
};