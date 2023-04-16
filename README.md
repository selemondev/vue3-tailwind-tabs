# Vue 3 Tailwind Tabs

A collection of Vue 3 components for creating tabs using TailwindCss.

## Usage 

Before you install vue3-tailwind-tabs, ensure that you have TailwindCss installed in your project. If you need to quickly set up a new Vue 3 project with TailwindCss, you can use this [Tailwind CLI](https://github.com/AndrejJurkin/create-tw) tool.

```bash
npm install vue3-tailwind-tabs
```

After installation, you have the option to register the components globally as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import { TabFloatGroup, TabsFloatContent, TabsFloatWrapper, TabFloat, TabOutline, TabsContentOutline, TabsWrapperOutline, TabGroupOutline  } from "vue3-tailwind-tabs";
import App from './App.vue'
const app = createApp(App)
app.component('TabFloatGroup', TabFloatGroup),
app.component('TabsFloatContent', TabsFloatContent),
app.component('TabsFloatWrapper', TabsFloatWrapper),
app.component('TabFloat', TabFloat),
app.component('TabOutline', TabOutline),
app.component('TabsContentOutline', TabsContentOutline),
app.component('TabsWrapperOutline', TabsWrapperOutline),
app.component('TabGroupOutline', TabGroupOutline)
app.mount('#app')
```

or you can import the components in the component where they are required as shown below : 

```ts
<script setup lang='ts'>
import { TabOutline, TabsContentOutline, TabsWrapperOutline, TabGroupOutline, TabFloatGroup, TabsFloatContent, TabsFloatWrapper, TabFloat } from "vue3-tailwind-tabs";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
type Tab = string;
const activeTab = ref("vue");
const clickTab = (name: Tab) => {
  activeTab.value = name;
}
</script>
<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <main class="mt-6 space-y-10 ">
        <section>
          <TabGroupOutline>
            <TabsWrapperOutline>
              <TabOutline activeTitleColor="text-green-500" barColor="border-green-500" title="Vue"
                :isActive="activeTab === 'vue'" @onClick="clickTab('vue')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline activeTitleColor="text-green-500" barColor="border-green-500" title="Vueuse"
                :isActive="activeTab === 'vueuse'" @onClick="clickTab('vueuse')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline activeTitleColor="text-green-500" barColor="border-green-500" title="Nuxt"
                :isActive="activeTab === 'nuxt'" @onClick="clickTab('nuxt')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline activeTitleColor="text-green-500" barColor="border-green-500" title="Gridsome"
                :isActive="activeTab === 'gridsome'" @onClick="clickTab('gridsome')">
                <template #icon>
                  <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
            </TabsWrapperOutline>
            <TabsContentOutline>
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
                reiciendis sequi error laboriosam voluptatem. Nemo aliquam autem delectus incidunt, vitae itaque
                cupiditate doloribus.
              </div>
            </TabsContentOutline>
          </TabGroupOutline>
        </section>

        <section>
          <TabFloatGroup>
            <TabsFloatWrapper>
              <TabFloat floatActiveTitleColor="text-green-500" floatTitle="Vue" :floatIsActive="activeTab === 'vue'"
                @onClick="clickTab('vue')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatActiveTitleColor="text-green-500" floatTitle="Vueuse" :floatIsActive="activeTab === 'vueuse'"
                @onClick="clickTab('vueuse')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatActiveTitleColor="text-green-500" floatTitle="Nuxt" :floatIsActive="activeTab === 'nuxt'"
                @onClick="clickTab('nuxt')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatActiveTitleColor="text-green-500" floatTitle="Gridsome"
                :floatIsActive="activeTab === 'gridsome'" @onClick="clickTab('gridsome')">
                <template #icon>
                  <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
            </TabsFloatWrapper>
            <TabsFloatContent>
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
                reiciendis sequi error laboriosam voluptatem. Nemo aliquam autem delectus incidunt, vitae itaque
                cupiditate doloribus.
              </div>
            </TabsFloatContent>
          </TabFloatGroup>
        </section>
      </main>
    </div>
  </div>
</template>
```

To configure Tailwind to work with the `vue3-tailwind-tabs` library, you can add the following to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", 
  'node_modules/vue3-tailwind-tabs/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This will ensure that the `vue3-tailwind-tabs` library is included in the content to be processed by Tailwind.

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

## Features :sparkles:

- 🗂️ Two types of tabs: TabOutline and TabFloat

- 🎨 Customizable tab properties such as title, active state, color, and width

- 🌗 Light and dark theme compatible

- 🎭 Ability to add icons to the tabs

- 🔌 Global component registration or component import for use in individual components

- 🚀 Uses TailwindCSS for easy customization

## Props

#### TabOutline props:

- `title` - The title of the tab.

- `titleColor` - The color of the title.

- `titleSize` - The size of the title. By default it is `text-base`.

- `isActive` - A boolean value that indicates whether the tab is currently active.

- `activeTitleColor` - The color of the title when the tab is active.

- `barColor` - The color of the tab indicator bar.

- `TabsContentTextColor` - The color of the content text.


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


- `TabFloatBackgroundColor` - The background color of where the float tab resides.

- `TabFloatGroupWidth` - The width of all the float components.


## Contributions

Contributions are welcome and encouraged! If you have any ideas or suggestions for new features, or if you encounter any bugs or issues, please open an issue or submit a pull request on the GitHub repository.



