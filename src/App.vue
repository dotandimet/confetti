<template>
<main>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Confetti</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" v-on:click="newAsset()">New Asset</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
   <div class="row">
   <div class="col s12 m6">
      <asset v-for="asset in assets"
            v-bind:editing="asset.editing"
            v-bind:name="asset.name"
            v-bind:aspects="asset.aspects"
            >
        </asset>
 </div>
 </div>
  </div>
</main>
  
</template>

<script>
import Asset from './Asset.component.vue';
export default {
  name: 'app',
  data () {
    return {
         assets: [ { name: "A Thing", editing: false, aspects: [ { name: "Very useful", value: 3 } ] } ]
    }
  },
  components: {
    'asset': Asset
  },
  methods: {
       newAsset: function () {
            this.assets.unshift({ name: '', editing: true, aspects: [] });

            return false;
        }

      }

}
</script>

