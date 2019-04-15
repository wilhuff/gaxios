'use strict';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace';

export default {
  input: 'build/web/src/index.js',
  output: {
    file: 'dist/gaxios.js',
    format: 'esm'
  },
  plugins: [
    replace({ IS_BROWSER: !!process.env.BROWSER }),
    resolve(),
    commonjs(),
    terser(),
    visualizer()
  ]
}
