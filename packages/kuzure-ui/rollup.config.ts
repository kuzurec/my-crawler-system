import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "rollup-plugin-babel";
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const libraryName = pkg.name;

const buildCjsPackage = ({ env }) => {
  return {
    input: `src/index.ts`,
    output: [
      {
        dir: 'dist',
        name: libraryName,
        format: 'cjs',
        sourcemap: true,
        strict: false,
        exports: 'named',
        chunkFileNames: `[name].${env}.js`,
        globals: {
          react: 'React',
          'prop-types': 'PropTypes'
        }
      }
    ],
    external: ['react', 'react-dom'],
    plugins: [
      json(),
      typescript(),
      babel(),
      commonjs({ include: /node_modules/ }),
      resolve(),
      env === 'production' && terser()
    ]
  };
};

export default [buildCjsPackage({ env: 'development' }), buildCjsPackage({ env: 'production' })];
