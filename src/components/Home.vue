<template>
  <section class="home">
    <div v-for="strife in strifes" :key="strife.id">
      {{strife.title}}
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  mounted() {
    this.$store.dispatch("fetchStrifes");
  },
  computed: mapState(['strifes'])
})
export default class Home extends Vue {}
</script>

