<template>
  <q-page class="flex flex-center bg-dark">

    <div class="row text-center">
      <div class="col-12 text-grey-3">
        <q-btn
          to="/musics"
          label="Ver As Musicas"
          color="primary"
          rounded
          style="width: 210px"
          unelevated
          size="lg"
        />

      </div>
      <template v-if="authStore.userAuth">
        <div class="col-12 q-mt-md">
          <q-btn
            @click="authStore.logout()"
            label="Logout"
            color="grey-2"
            text-color="grey-9"
            style="width: 210px"
            rounded
            unelevated
            size="lg"
          />
        </div>
      </template>
      <template v-else>
        <div class="col-12 q-mt-md">
          <q-btn
            @click="authStore.createAccount()"
            label="Register"
            color="grey-2"
            text-color="grey-9"
            style="width: 210px"
            rounded
            unelevated
            size="lg"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-btn
            @click="authStore.loginWithPassword()"
            label="Login"
            color="grey-2"
            text-color="grey-9"
            style="width: 210px"
            rounded
            unelevated
            size="lg"
          />
        </div>
      </template>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuthStore } from "stores/auth-store";

export default defineComponent({
  name: 'IndexPage',
  setup () {

    const authStore = useAuthStore()

    return {
      authStore
    }

  }
})
</script>
