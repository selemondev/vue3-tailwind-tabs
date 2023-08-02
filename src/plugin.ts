import type { App } from 'vue'
import * as components from '@/components/build'

export const plugin = {
  install(app: App, options: {}) {
    for (const prop in components) {
      // @ts-expect-error
      const component = components[prop]
      app.component(component.name, component)
    };
  },
}
