<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useAuthStore } from "stores/auth-store";

export default defineComponent({
  name: 'App',
  setup () {

    const authStore = useAuthStore()

    return {
      authStore,

      initializeAuth() {
        authStore.listenAuthChange()
      }
    }
  },
  mounted() {
    this.initializeAuth()
  }
})
</script>
