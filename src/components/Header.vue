<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
  </div>-->

  <nav class="navbar">
    <router-link class="navbar-brand" to="/">
      <i class="fab fa-speakap"></i>
    </router-link>
    <input
      class="form-control d-flex w-auto"
      v-on:keyup.enter="searchSubmit"
      type="search"
      v-model="searchInput"
      placeholder="Search"
      aria-label="Search"
    />
    <router-link to="/login">
      <i class="fas fa-users"></i>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  searchInput = "";

  searchSubmit() {
    if (this.searchInput) {
      this.$store.commit("filterStrifes", this.searchInput);
    }
  }
}
</script>

