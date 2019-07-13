<template>
  <section class="home">There are posts here</section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapMutations } from "vuex";

@Component({
  mounted() {
    this.$store.dispatch("fetchStrifes");
  }
})
export default class Home extends Vue {}
</script>

