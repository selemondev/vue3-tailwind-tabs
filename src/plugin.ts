import type { App } from 'vue'
import * as components from '@/components/build'

export const plugin = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  install(app: App, options: Record<string, never>) {
    for (const prop in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const component = components[prop]
      app.component(component.name, component)
    };
  },
}
