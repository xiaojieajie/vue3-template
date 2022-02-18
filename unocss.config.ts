import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  rules: [
    ['p-c', { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }],
    ['p-x', { position: 'absolute', left: '50%', transform: 'translateX(-50%)' }],
    ['p-y', { position: 'absolute', top: '50%', transform: 'translateY(-50%)' }],
    ['fixed-x', { position: 'fixed', left: '50%', transform: 'translateX(-50%)' }],
    ['f-c', { 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' }],
    ['f-a', { 'display': 'flex', 'align-items': 'center' }],
    ['f-j', { 'display': 'flex', 'justify-content': 'center' }]
    // [/^custom-(.+)$/, ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
    //   console.log(variantHandlers, '我是name');
    //   return {
    //     'display': 'flex'
    //   }
    // }]
  ]
})
