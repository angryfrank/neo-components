<template>
  <div class="neo-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'NeoBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '>'
      },
    },

    provide() {
      return {
        neoBreadcrumb: this
      };
    },

    mounted() {
      const items = this.$el.querySelectorAll('neo-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  };
</script>
