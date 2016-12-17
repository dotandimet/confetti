<template>
   <div class="card">
    <div class="card-content">
    <span class="card-title" v-on:click="editName()">
    <template v-if="!editing">{{ name }}</template>
    <input v-else v-model="name"
     v-on:keyup.enter="commitName()"
     v-on:blur="commitName()">
    </span>
    <aspect-list v-bind:aspects="aspects"></aspect-list>
    </div>
    <div class="card-action">
    <a href="#" v-on:click="addAspect"><i class="material-icons circle grey lighten-3">add</i> Add Aspect</a>
    </div>
  </div>
</template>
<script>
import AspectList from './AspectList.component.vue';
export default {
    props: ["name", "editing", "aspects"],
  components: {
    'aspect-list': AspectList
  },
  mounted: function() {
      this.editName();
        },
  methods: {
       addAspect: function ( ) {

        },
        editName: function () {
          this.editing = true;
        },
        commitName: function() {
          this.editing = false;
        }
      }
}
</script>