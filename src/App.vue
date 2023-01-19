<template>
    <nav-bar></nav-bar>
    <router-view/>
</template>

<script>
import NavBar from "./components/NavFooter.vue"

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
