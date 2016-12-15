<template>
 <ul class="collection with-header">
    <li class="collection-header">Aspects:</li>
    <aspect v-for="aspect in aspects"
                   v-bind:name="aspect.name" 
                   v-bind:value="aspect.value"></aspect>
    <ul>
</template>
<script>
    import Aspect from './Aspect.component.vue';
    export default {
    props: ['aspects'],
    components: {
        aspect: Aspect
    }
    }
</script>