import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    })
  ],

  shortcuts: [
    ['p-c', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
    ['p-x', 'absolute left-1/2 -translate-x-1/2'],
    ['p-y', 'absolute top-1/2 -translate-y-1/2'],
    ['f-c', 'flex justify-center items-center'],
    ['f-col', 'flex flex-col'],
    ['f-a', 'flex items-center'],
    ['f-j', 'flex justify-center']
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
