<template>
  <q-page class="q-pa-md bg-dark text-white">

    <div class="text-h6">
      Lista das Musicas
    </div>

    <q-list bordered class="q-mt-lg">

      <music-component
        v-for="music in musicsList"
        :music="music"
      />

    </q-list>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MusicComponent from "components/base/MusicComponent.vue";

export default defineComponent({
  name: 'MusicPage',
  components: {MusicComponent},
  setup () {

    const musicsList = ref([
      {
        id: 'bensound-league.mp3.01',
        title: 'bensound-league',
        fileUrl: 'music-files/bensound-league.mp3'
      },
      {
        id: 'bensound-lofinerdbassbuzzer.mp3.01',
        title: 'bensound-lofinerdbassbuzzer',
        fileUrl: 'music-files/bensound-lofinerdbassbuzzer.mp3'
      },
      {
        id: 'bensound-youngandalive.mp3.01',
        title: 'bensound-youngandalive',
        fileUrl: 'music-files/bensound-youngandalive.mp3'
      },
    ])
    return {
      musicsList
    }
  }
})
</script>
