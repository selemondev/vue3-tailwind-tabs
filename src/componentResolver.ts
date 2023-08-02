import type { ComponentResolver } from 'unplugin-vue-components'

export function TabsUIComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^V[A-Z]/))
        return { name, from: 'vue3-tailwind-tabs' }
    },
  }
}
