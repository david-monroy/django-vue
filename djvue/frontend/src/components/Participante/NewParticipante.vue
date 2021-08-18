<template>
  <div class="container">
      <div class="row">
          <div class="col text-left">
              <h2>Nuevo participante</h2>
          </div>
      </div>

      <div class="row">
          <div class="col">
              <div class="card">
                  <div class="card-body">
                      <form @submit="onSubmit">
                          <div class="form-group row">
                              <label for="name"
                              class="col-sm-2 col-form-label">
                                  Nombre
                              </label>
                              <div class="col-sm-6">
                                  <input
                                  type="text"
                                  placeholder="Nombre"
                                  name="name"
                                  class="form-control"
                                  v-model.trim="form.name"
                                  >
                              </div>
                          </div>

                          <div class="form-group row">
                              <label for="lastname"
                              class="col-sm-2 col-form-label">
                                  Apellido
                              </label>
                              <div class="col-sm-6">
                                  <input
                                  type="text"
                                  placeholder="Apellido"
                                  name="lastname"
                                  class="form-control"
                                  v-model.trim="form.lastname"
                                  >
                              </div>
                          </div>

                          <div class="rows">
                              <div class="col text-left">
                                  <b-button type="submit"
                                  variant="primary">
                                    Crear
                                  </b-button>
                                  <b-button type="submit"
                                  class="btn-large-space"
                                  :to="{ name: 'ListParticipante' }"
                                  >
                                    Cancelar
                                  </b-button>
                              </div>
                          </div>

                      </form>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return {
            form: {
                name: '',
                lastname: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path = 'http://localhost:8000/api/v1/participantes/'

            axios.post(path, this.form).then((response) => {
                this.form.name = response.data.name
                this.form.lastname = response.data.lastname
                
                swal("Participante creado satisfactoriamente", "", "success")
            })
            .catch((err) => {
                swal("El participante no ha sido creado", "", "error")
            })
        },
    },
    created(){

    }
}
</script>

<style>

</style>