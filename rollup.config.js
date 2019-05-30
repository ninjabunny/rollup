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
