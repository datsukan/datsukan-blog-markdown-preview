module.exports = {
  presets: [
    ['next/babel', { babel: { compact: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-env',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
