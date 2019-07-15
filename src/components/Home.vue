<template>
  <section class="home">
    <button
      type="button"
      :class="formIsActive ? 'active' : ''"
      @click.prevent="toggleForm"
      class="btn btn-outline-primary m"
    >
      <i class="fas fa-plus"></i>Add new strife
    </button>

    <div v-if="formIsActive">
      <div class="form-group">
        <input type="name" v-model="strifeTitle" class="form-control" placeholder="Strife name" />
      </div>
      <button type="submit" @click.prevent="addNewStrife" class="btn btn-primary">Submit</button>
    </div>

    <div v-for="strife in strifes" :key="strife.id">{{strife.title}}</div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  mounted() {
    this.$store.dispatch("fetchStrifes");
  },
  computed: mapState(["strifes"])
})
export default class Home extends Vue {
  formIsActive = false;
  strifeTitle = '';

  toggleForm() {
    this.formIsActive = !this.formIsActive;
  }

  addNewStrife() {
    const strife = {
      author: 'None',
      title: this.strifeTitle,
      tags: []
    }
    this.$store.dispatch('addNewStrife', strife)
  }
}
</script>

