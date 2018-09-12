<template>
  <div class="neo-checkbox-tag-group" role="group" aria-label="checkbox-tag-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NeoCheckboxTagGroup',
    componentName: 'NeoCheckboxTagGroup',
    props: {
      value: {
        type: Array,
        default: function () {
          return [];
        }
      },
    },
  };
</script>