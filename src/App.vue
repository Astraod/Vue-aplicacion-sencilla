<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navegacion">
    <router-link
      to="/"
      class="navegacion__enlace"
    >
      Contador
    </router-link>

    <router-link
      to="/lista"
      class="navegacion__enlace"
    >
      Lista de tareas
    </router-link>
  </nav>

  <router-view />
</template>
