<template>
  <SingleNote/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleNote from './components/single-note/SingleNote.vue';

export default defineComponent({
    name: 'App',
    components: {
        SingleNote
    }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
