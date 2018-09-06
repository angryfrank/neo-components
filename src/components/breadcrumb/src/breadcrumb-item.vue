<template>
  <span class="neo-breadcrumb__item">
    <span
      :class="['neo-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <span class="neo-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'NeoBreadcrumbItem',
    props: {
      to: {},
    },
    data() {
      return {
        separator: '',
      };
    },

    inject: ['neoBreadcrumb'],

    mounted() {
      this.separator = this.neoBreadcrumb.separator;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        $router.push(to);
      });
    }
  };
</script>
