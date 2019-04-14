'use strict';

import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'build/web/src/index.js',
  output: {
    file: 'dist/gaxios.js',
    format: 'esm'
  },
  plugins: [
    serve('dist'),
    resolve(),
    commonjs(),
    terser(),
    visualizer()
  ]
}
