<template>
  <div>
    <InputText v-model="model" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
  components: {
    InputText
  },
  props: {
    value: {
      type: String || Number,
      default: ''
    }
  },
  data() {
    return {
      model: this.value
    }
  },
  watch: {
    model(novoValor) {
      this.$emit('input', novoValor)
    },
    value(novoValor) {
      this.model = novoValor;
    }
  }
}
</script>

<style>

</style>