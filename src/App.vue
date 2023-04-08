<script setup lang='ts'>
import { Tab, TabsContent, TabsWrapper } from "./components/VueTailwindTabs";
import { ref } from "vue";
type Tab = string;
const activeTab = ref("orders");
const emit = defineEmits<{
  (e: 'onClick'): void
}>();

const clickTab = (name: Tab) => {
  emit('onClick')
  activeTab.value = name;
}
</script>

<template>
  <main class="grid place-items-center w-full min-h-screen bg-white">
    <section>
      <TabsWrapper>
        <Tab activeTitleColor="text-purple-500" title="Orders" :isActive="activeTab === 'orders'" @click="clickTab('orders')">
          <template v-slot:icon>
            <svg :class="{'text-purple-500': activeTab === 'orders'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </template>
        </Tab>
        <Tab activeTitleColor="text-purple-500" title="Active" :isActive="activeTab === 'active'" @click="clickTab('active')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'active'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </template>
        </Tab>
        <Tab activeTitleColor="text-purple-500" title="To invoice" :isActive="activeTab === 'toInvoice'" @click="clickTab('toInvoice')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'toInvoice'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </template>
        </Tab>
      </TabsWrapper>
      <TabsContent>
        <div v-if="activeTab === 'orders'">
          Aspernatur cupiditate, dolorum earum eius ex facilis
          illum maiores nihil optio placeat, quam quos repellendus suscipit tempora, voluptate! Alias asperiores
          assumenda beatae commodi dolorum, laudantium libero molestiae nam officiis praesentium quisquam soluta totam,
          veritatis. A, adipisci error ex illum iusto unde. A animi assumenda at, dolorem ducimus enim error incidunt,
          ipsam iure magnam nobis omnis quae quasi quod recusandae, reiciendis rerum sequi. Alias animi consequuntur
          delectus distinctio enim, et expedita ipsam itaque labore neque nobis numquam obcaecati, officia perferendis
          possimus provident quaerat qui, quibusdam quis quos ratione recusandae repellat reprehenderit sit voluptate!
        </div>
        <div v-if="activeTab === 'active'">
          Aspernatur cupiditate, dolorum earum eius ex facilis
          illum maiores nihil optio placeat, quam quos repellendus suscipit tempora, voluptate! Alias asperiores
          assumenda beatae commodi dolorum, laudantium libero molestiae nam officiis praesentium quisquam soluta totam,
          veritatis. A, adipisci error ex illum iusto unde. A animi assumenda at, dolorem ducimus enim error incidunt,
          ipsam iure magnam nobis omnis quae quasi quod recusandae, reiciendis rerum sequi. Alias animi consequuntur
          delectus distinctio enim, et expedita ipsam itaque labore neque nobis numquam obcaecati, officia perferendis
          possimus provident quaerat qui, quibusdam quis quos ratione recusandae repellat reprehenderit sit voluptate!
        </div>
        <div v-if="activeTab === 'toInvoice'">
          Aspernatur cupiditate, dolorum earum eius ex facilis
          illum maiores nihil optio placeat, quam quos repellendus suscipit tempora, voluptate! Alias asperiores
          assumenda beatae commodi dolorum, laudantium libero molestiae nam officiis praesentium quisquam soluta totam,
          veritatis. A, adipisci error ex illum iusto unde. A animi assumenda at, dolorem ducimus enim error incidunt,
          ipsam iure magnam nobis omnis quae quasi quod recusandae, reiciendis rerum sequi. Alias animi consequuntur
          delectus distinctio enim, et expedita ipsam itaque labore neque nobis numquam obcaecati, officia perferendis
          possimus provident quaerat qui, quibusdam quis quos ratione recusandae repellat reprehenderit sit voluptate!
        </div>
      </TabsContent>
    </section>
  </main>
</template>