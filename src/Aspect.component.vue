<template>
<li class="collection-item">{{ label }}</li>
</template>
<script>
    export default {
        props: ['name', 'value'],
        computed: {
            label: function () {
            return `${this.name} (${this.value})`;
            }
    }
    }
    </script>