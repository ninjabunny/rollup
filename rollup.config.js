<<<<<<< HEAD
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
=======
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'bundle.js',
      format: 'cjs',
    },
    plugins: [
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
    ],
    external: ['react', 'prop-types'],
    globals: {
      react: 'React',
    },
  },
]
>>>>>>> rollup
