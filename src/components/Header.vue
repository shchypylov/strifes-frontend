<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
  </div>-->

  <nav class="navbar">
    <router-link class="navbar-brand" to="/">
      <i class="fab fa-speakap"></i>
    </router-link>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
    <router-link to="/login">
      <i class="fas fa-users"></i>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

