import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/enums/index.ts', 'src/schemas/index.ts', 'src/utils/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true
})