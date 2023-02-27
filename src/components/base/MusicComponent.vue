<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar rounded>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      {{ music.title }}
    </q-item-section>
    <q-item-section side>
      <div class="">
        <q-btn
          v-if="canStartPlay"
          @click.stop="canStartPlay = false"
          icon="pause"
          round
          flat
        />
        <q-btn
          v-else
          @click.stop="canStartPlay = true"
          icon="play_circle_filled"
          round
          flat
        />

        <q-btn @click.stop icon="file_download" round flat/>
      </div>
    </q-item-section>
  </q-item>

  <audio v-if="canStartPlay" controls autoplay v-show="false">
    <source :src="music.fileUrl" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

</template>

<script>
import { ref } from 'vue'
export default {
  name: "MusicComponent",
  props: ['music'],
  setup () {

    const canStartPlay = ref(false)

    return {
      canStartPlay
    }
  }
}
</script>

<style scoped>

</style>
