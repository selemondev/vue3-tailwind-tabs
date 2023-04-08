<script setup lang='ts'>
import { Tab, TabsContent, TabsWrapper } from "./components/VueTailwindOutlineTabs";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
type Tab = string;
const activeTab = ref("vue");
const clickTab = (name: Tab) => {
  activeTab.value = name;
}
</script>

<template>
  <main class="grid place-items-center w-full min-h-screen">
    <section>
      <TabsWrapper>
        <Tab activeTitleColor="text-green-500" barColor="border-green-500" title="Vue" :isActive="activeTab === 'vue'"
          @onClick="clickTab('vue')">
          <template #icon>
            <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
              class="text-xl font-medium w-6 h-6 mr-2" />
          </template>
        </Tab>
        <Tab activeTitleColor="text-green-500" barColor="border-green-500" title="Vueuse"
          :isActive="activeTab === 'vueuse'" @onClick="clickTab('vueuse')">
          <template #icon>
            <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
              class="text-xl font-medium w-6 h-6 mr-2" />
          </template>
        </Tab>
        <Tab activeTitleColor="text-green-500" barColor="border-green-500" title="Nuxt" :isActive="activeTab === 'nuxt'"
          @onClick="clickTab('nuxt')">
          <template #icon>
            <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
              class="text-xl font-medium w-6 h-6 mr-2" />
          </template>
        </Tab>
        <Tab activeTitleColor="text-green-500" barColor="border-green-500" title="Gridsome"
          :isActive="activeTab === 'gridsome'" @onClick="clickTab('gridsome')">
          <template #icon>
            <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
              class="text-xl font-medium w-6 h-6 mr-2" />
          </template>
        </Tab>
      </TabsWrapper>
      <TabsContent>
        <div v-if="activeTab === 'vue'">
          Vue is a framework. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolorum fugiat sapiente eum nihil accusantium mollitia cum placeat est ipsa error, neque maiores numquam accusamus odit nostrum quisquam eveniet quas.
        </div>
        <div v-if="activeTab === 'vueuse'">
          VueUse is a collection of utility functions based on Composition API. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias perferendis ut labore unde quidem placeat amet similique blanditiis facilis maiores.
        </div>
        <div v-if="activeTab === 'nuxt'">
          Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with Vue.js. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro!
        </div>
        <div v-if="activeTab === 'gridsome'">
          Gridsome is a Vue.js powered Jamstack framework for building static generated websites & apps that are fast by default 🚀. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores unde tenetur esse debitis dolor vel error nostrum exercitationem accusamus!
        </div>
      </TabsContent>
    </section>
  </main>
</template>