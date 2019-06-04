import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'index.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
    ],
    external: ['react', 'prop-types', 'styled-components'],
    globals: {
      react: 'React',
      'styled-components': 'styled',
    },
  },
]
