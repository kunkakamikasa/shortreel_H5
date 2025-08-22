<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './stores/user'
import { usePaymentStore } from './stores/payment'

const userStore = useUserStore()
const paymentStore = usePaymentStore()

onMounted(async () => {
  // 现在使用假数据，可以安全调用
  await userStore.initializeUser()
  await paymentStore.initializePayment()
  
  console.log('App initialized successfully')
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background: #0a0a0a;
}
</style>
