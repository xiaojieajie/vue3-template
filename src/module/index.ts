import type { App, Plugin } from 'vue'

const fileInfo = import.meta.globEager('./**/*.ts')
const needRegisterModules = Object.entries(fileInfo).filter(([filePath]) => !filePath.includes('axios'))

export const registerModules = (app: App) => {
  needRegisterModules.forEach(([_, md]) => {
    const module = md.default
    if (!module.install) throw new Error('导出的不是一个可以注册的插件')
    app.use(module as Plugin)
  })

  return app
}
