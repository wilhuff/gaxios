'use strict';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'build/web/src/index.js',
  output: {
    file: 'dist/gaxios.js',
    format: 'esm'
  },
  plugins: [
    replace({ 'process.env.IS_BROWSER': !!process.env.IS_BROWSER }),
    resolve(),
    commonjs(),
    terser(),
    visualizer(),
    filesize()
  ]
}
