<template>
  <Button v-on="$listeners"
          :icon="icone"
          :label="texto" 
  />
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button
  },
  props: {
    icone: {
      type: String,
      default: null
    },
    texto: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>