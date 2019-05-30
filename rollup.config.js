import babel from 'rollup-plugin-babel'

export default {
  external: ['react'],
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    // Also note 'es' not 'iife', since a library exports something, unlike an application.
    format: 'es',
  },
  plugins: [
    babel({
      presets: ['react'],
    }),
  ],
}
