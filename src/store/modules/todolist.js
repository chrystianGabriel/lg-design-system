const state = () => ({
    _tarefas: []
});

const getters = {
  obtenhaTodasAsTarefas (state) {
    return state._tarefas;
  }
}

const mutations = {
    adicionarTarefa(state, { tarefa }) {
        state._tarefas.push(tarefa);
    },
    removerTarefa(state, { id }) {
        state._tarefas = state._tarefas.filter(t => t.id !== id);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}