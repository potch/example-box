import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    output: {
      file: "bundle.js",
      sourcemap: true,
      format: "iife"
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: true,
      }),
      terser(),
    ]
  }
]
