# Vue 3 Tailwind Tabs :rocket:

A collection of Vue 3 components for creating customizable tabs using TailwindCss.

## Features :sparkles:

- 🗂️ Two types of tabs: TabOutline and TabFloat

- 🎨 Customizable tab properties such as title, active state, color, and width

- 🌗 Light and dark theme compatible

- 🎭 Ability to add icons to the tabs

- 🔌 Global component registration or component import for use in individual components

- 🔥 - On Demand Component Import

- 🚀 Uses TailwindCSS for easy customization.

## Usage with Vue 3

Before you install vue3-tailwind-tabs, ensure that you have TailwindCss installed in your project. If you need to quickly set up a new Vue 3 project with TailwindCss, you can use this [Tailwind CLI](https://github.com/AndrejJurkin/create-tw) tool.

```bash
npm install vue3-tailwind-tabs
```

### Auto Importing Components With Tree Shaking

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) lets you auto import components on demand, meaning you don't have to write any import statements.

- 1. Install unplugin-vue-components by running one of the commands below:

```bash

# pnpm

pnpm add -D unplugin-vue-components

# yarn
yarn add -D unplugin-vue-components

# npm
npm i -D unplugin-vue-components

```

- 2. Add the following in your `vite.config.ts` file: 

```ts
// other imports
import { TabsUIComponentResolver } from 'vue3-tailwind-tabs'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    // other plugins
    Components({
      resolvers: [
        TabsUIComponentResolver()
      ]
    }),
  ],

  // other config
})
```

3. Add the following in your `main.ts` or `main.js` file: 

```ts
import { createApp } from 'vue'
// your stylesheet
import './style.css'
import App from './App.vue'

import 'vue3-tailwind-tabs/dist/build.css'

const app = createApp(App)
app.mount('#app')
```
4. Go ahead and use the components as shown below: 

```ts
<script setup lang='ts'>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const activeTab = ref("vue");
const clickTab = (name: string) => {
  activeTab.value = name;
};
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <main class="mt-6 space-y-10">
        <section>
          <VTabGroupOutline>
            <VTabsWrapperOutline>
              <VTabOutline title="Vue" :isActive="activeTab === 'vue'" @onClick="clickTab('vue')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="Vueuse" :isActive="activeTab === 'vueuse'" @onClick="clickTab('vueuse')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="Nuxt" :isActive="activeTab === 'nuxt'" @onClick="clickTab('nuxt')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="Gridsome" :isActive="activeTab === 'gridsome'" @onClick="clickTab('gridsome')">
                <template #icon>
                  <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
            </VTabsWrapperOutline>
            <VTabsContentOutline>
              <div v-if="activeTab === 'vue'">
                Vue is a framework. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda, maiores
                recusandae sunt neque ab officia consectetur officiis nesciunt sapiente adipisci. Sapiente, exercitationem
                impedit. Eum fuga amet commodi, voluptatibus ab expedita aliquam ipsa minima sit! Voluptatum eveniet
                provident fuga velit suscipit cupiditate sed laboriosam libero corrupti id cum, nesciunt tenetur alias
                ullam itaque minima reiciendis maiores! Fuga omnis voluptate nam quasi adipisci iste consequatur facilis,
                officia exercitationem libero accusamus saepe, id ratione alias quos? Eaque eum, cum deserunt corporis
                ipsa, modi fuga incidunt reiciendis recusandae delectus illo a nobis dolorum repellendus aspernatur
                nesciunt eligendi, dicta consectetur labore obcaecati? Debitis, velit.
              </div>
              <div v-if="activeTab === 'vueuse'">
                VueUse is a collection of utility functions based on Composition API. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aliquam ad provident optio hic error odio dolorum nisi neque, nemo amet quam
                a repellat itaque! Esse eveniet repellat fugit soluta, commodi molestiae iure? Maxime beatae, illum enim
                perferendis nobis quae architecto corporis itaque recusandae eaque minus! Quisquam eaque ratione ex aut
                voluptas id ullam est rerum cumque, obcaecati qui sunt perferendis reprehenderit quia illo ut architecto
                esse minus ipsum excepturi iste nulla maiores recusandae? Voluptas nemo necessitatibus neque pariatur
                iusto saepe natus quod corporis. Deleniti voluptate sunt aliquam veniam quisquam, inventore numquam
                quidem! Qui, modi cupiditate? Dignissimos eveniet expedita accusamus itaque!
              </div>
              <div v-if="activeTab === 'nuxt'">
                Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe,
                performant and production-grade full-stack web applications and websites with Vue.js. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Quia quasi earum doloribus asperiores suscipit exercitationem
                cupiditate eligendi, esse sit optio itaque illum nesciunt nemo eius repudiandae sapiente dolor dolores
                veniam! Aspernatur sint non ad in laborum consectetur quas eligendi molestias voluptates blanditiis
                eveniet illum soluta voluptate pariatur nihil magnam dolorum perspiciatis id beatae recusandae enim,
                obcaecati placeat! Tenetur consequatur, ipsa porro ab in veritatis placeat officiis! Et minima repudiandae
                vel? Vero ad nam asperiores pariatur rem consequatur. Asperiores nihil ducimus impedit, exercitationem,
                autem vero, beatae tenet.
              </div>
              <div v-if="activeTab === 'gridsome'">
                Gridsome is a Vue.js powered Jamstack framework for building static generated websites & apps that are
                fast by default 🚀. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus illum deleniti
                sint nobis alias sit velit. Ipsa voluptas at harum debitis. Commodi quo cupiditate voluptate, quos aperiam
                accusantium, minima consequatur id odio asperiores quas saepe nulla quisquam inventore, reiciendis
                eligendi dolores voluptas delectus ea autem ut nam corrupti consequuntur possimus! Veritatis, accusamus!
                Veniam, incidunt ad. Illo, voluptate voluptatem corrupti tenetur dolore alias rem ut maxime amet porro est
                explicabo nostrum consectetur non ex odit, in, illum atque deserunt expedita fugiat praesentium sunt. Quo
                reiciendis sequi error laboriosam voluptatem. Nemo aliquam autem delectus incidunt, vitae itaque.
              </div>
            </VTabsContentOutline>
          </VTabGroupOutline>
        </section>
      </main>
    </div>
  </div>
</template>

```

You can choose to use the `TabOutline` components, `TabFloat` components or use both of them together as shown in the example above.

For the icons you can choose to use an `SVG` or install `iconify/vue` to use over 100K+ icons from [Iconify](https://iconify.design). For the example above I have used the `iconify/vue` package for displaying the icons.

You can install `iconify/vue` using the following command: 

With Npm:

```bash
npm install --save-dev @iconify/vue
```

With Yarn:

```bash
yarn add --dev @iconify/vue
```
Congratulations 🎉. You can now use `vue3-tailwind-tabs` with Vue 3.

## Props

#### TabOutline props:

- `title` - The title of the tab.

- `titleColor` - The color of the title.

- `titleSize` - The size of the title. By default it is `text-base`.

- `isActive` - A boolean value that indicates whether the tab is currently active.

- `activeTitleColor` - The color of the title when the tab is active.

- `barColor` - The color of the tab indicator bar.

- `TabsContentTextColor` - The color of the content text.

- `TabOutlineCenter` - To place the tab in the center.

- `TabOutlineStart` - To place the tab at the start.

- `TabOutlineEnd` - To place the tab at the end.

- `TabsContentBackgroundColor` - The background color of the content area.

- `TabGroupWidth` - The width of all the outline components.


#### TabFloat props:

- `floatTitle` - The title of the float tab.

- `floatTitleColor` - The color of the float title.

- `floatTitleSize` - The size of the title. By default it is `text-base`.

- `floatIsActive` - A boolean value that indicates whether the float tab is currently active.

- `floatActiveTitleColor` - The color of the title when the float tab is active.

- `floatBarColor` - The color of the float tab indicator bar.

- `TabsFloatContentTextColor` - The color of the float content text.

- `TabsFloatContentBackgroundColor` - The background color of the float content area.

- `TabFloatCenter` - To place the tab in the center.

- `TabFloatStart` - To place the tab at the start.

- `TabFloatEnd` - To place the tab at the end.

- `TabFloatBackgroundColor` - The background color of where the float tab resides.

- `TabFloatGroupWidth` - The width of all the float components.


## Contributions

Contributions are welcome and encouraged! If you have any ideas or suggestions for new features, or if you encounter any bugs or issues, please open an issue or submit a pull request on the GitHub repository.



