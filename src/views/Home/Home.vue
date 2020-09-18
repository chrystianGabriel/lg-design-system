<template>
  <div>
    <h1>ToDo List</h1>
    <div class="p-grid">
      <div class="p-col-2">
        <lg-aa-inputtext v-model="descricaoTarefa"></lg-aa-inputtext>
      </div>
      <div class="p-col">
        <lg-aa-botao @click="adicionarTarefa" texto="Adicionar Tarefa">
        </lg-aa-botao>
      </div>
    </div>
    <div class="p-grid p-mt-3">
      <lg-aa-datatable @click="removerTarefa($event)" :valor="tarefas"></lg-aa-datatable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      descricaoTarefa: ''
    }
  },
  methods: {
    adicionarTarefa() {
      if(this.descricaoTarefa !== '') {
        this.$store.commit('todolist/adicionarTarefa', {
        tarefa: {
          id: Math.random() * (Number.MAX_SAFE_INTEGER - 0) + 0,
          descricao: this.descricaoTarefa,
          marcado: false
        }
      });

      this.descricaoTarefa = '';
      }
    },
    removerTarefa(tarefa) {
      this.$store.commit('todolist/removerTarefa', {
        id: tarefa.id
      });
    }
  },
  computed: {
    ...mapGetters({
        tarefas: 'todolist/obtenhaTodasAsTarefas'
    })
  }
}
</script>

<style>

</style>