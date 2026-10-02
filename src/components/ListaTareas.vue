
<template>
  <div class="container">
    <div
      id="taskApp"
      class="col-sm-8 mx-auto text-center"
    >
      <h1 class="lista">
        {{ nameApp }}
      </h1>

      <!-- Formulario -->
      <form @submit="agregarTarea">
        <input
          v-model="tareas.titulo"
          type="text"
        >

        <input
          type="submit"
          value="Agregar Tarea"
          class="btn btn-success"
        >
      </form>

      <br>

      <table class="table">
        <thead>
          <tr>
            <th>Hecho!</th>
            <th>Tarea</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="tarea in tareas"
            :key="tarea.titulo"
          >
            <td>
              <input
                v-model="tarea.hecho"
                type="checkbox"
              >
            </td>

            <td :class="{ tareaRealizada: tarea.hecho }">
              {{ tarea.titulo }}
            </td>

            <td>
              <button
                class="btn btn-danger"
                @click="eliminarTarea(tarea)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            nameApp: 'Lista de Tareas Vue.js',

            tareas: [
                {
                    titulo: 'Tarea 1',
                    hecho: true
                },
                {
                    titulo: 'Tarea 2',
                    hecho: false
                },
                {
                    titulo: 'Tarea 3',
                    hecho: false
                }
            ]
        };
    },

    methods: {
        eliminarTarea(tarea) {
            this.tareas.splice(
                this.tareas.indexOf(tarea),
                1
            );
        },

        agregarTarea(e) {
            e.preventDefault();

            this.tareas.push({
                titulo: this.tareas.titulo,
                hecho: false
            });

            this.tareas.titulo = "";
        }
    }
}
</script>
