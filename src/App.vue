<script setup lang='ts'>
import { TabOutline, TabsContentOutline, TabsWrapperOutline, TabGroupOutline } from "./components/VueTailwindOutlineTabs";
import { TabFloatGroup, TabsFloatContent, TabsFloatWrapper, TabFloat } from "./components/VueTailwindFloatTabs";
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
              <TabOutline barColor="border-green-500" title="Vue"
                :isActive="activeTab === 'vue'" @onClick="clickTab('vue')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline barColor="border-green-500" title="Vueuse"
                :isActive="activeTab === 'vueuse'" @onClick="clickTab('vueuse')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline barColor="border-green-500" title="Nuxt"
                :isActive="activeTab === 'nuxt'" @onClick="clickTab('nuxt')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabOutline>
              <TabOutline barColor="border-green-500" title="Gridsome"
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
              <TabFloat floatTitle="Vue" :floatIsActive="activeTab === 'vue'"
                @onClick="clickTab('vue')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatTitle="Vueuse" :floatIsActive="activeTab === 'vueuse'"
                @onClick="clickTab('vueuse')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatTitle="Nuxt" :floatIsActive="activeTab === 'nuxt'"
                @onClick="clickTab('nuxt')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'nuxt' }"
                    class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </TabFloat>
              <TabFloat floatTitle="Gridsome"
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