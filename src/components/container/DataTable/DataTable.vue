<template>
  <div>
    <DataTable :value="valor" :paginator="true" :rows="5">
      <Column field="descricao" header="Descrição" :sortable="true"></Column>
      <Column headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
        <template #body="item">
            <lg-aa-botao icone="pi pi-trash"
                         type="button" 
                         class="p-button-danger"
                         @click="$listeners.click(item.data)">
            </lg-aa-botao>
        </template>
      </Column>
    </DataTable> 
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
  components: {
      DataTable,
      Column
  },
  props: {
    valor: []
  }
}
</script>

<style>

</style>