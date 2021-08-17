<template>
  <div class="container">
      <div class="row">
          <div class="col text-left">
              <h2>Listado de participantes</h2>
              <div class="col-md-12">
                  <b-table striped hover
                   :items="participantes"
                   :fields="fields">

                    <template
                    v-slot:cell(action)>
                        <b-button size="sm"
                        variant="primary">
                            Editar
                        </b-button>

                        <b-button size="sm"
                        variant="danger">
                            Eliminar
                        </b-button>
                    </template>

                  </b-table>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            fields: [
                { key: 'name', label: 'Nombre' },
                { key: 'lastname', label: 'Apellido' },
                { key: 'action', label: '' },
            ],
            participantes: []
        }
    },
    methods: {

        getParticipantes(){
            const path = 'http://localhost:8000/api/v1/participantes/'
            axios.get(path).then((response) => {
                this.participantes = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
    },

    created(){
        this.getParticipantes()
    }


}
</script>

<style>

</style>