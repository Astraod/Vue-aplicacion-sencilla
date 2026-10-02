<template>
  <div class="container_2">
    <img
      alt="Vue logo"
      src="/logo.png"
    >

    <small>
      <h1>Contador en Vue Js</h1>
      <p>Bienvenido</p>
    </small>

    <hr>

    <h2>Contador: {{ contador }}</h2>

    <button @click="incrementar">
      +1
    </button>
    <button @click="decrementar">
      -1
    </button>
    <button @click="reset">
      Reset
    </button>
  </div>
</template>

<script>
export default {
  
    data() {
        return {
            contador: 10
        }
    },

    methods: {
        incrementar() {
            this.contador++;
        },

        decrementar() {
            this.contador--;
        },

        reset() {
            this.contador = 0;
        }
    }
}
</script>