<template>
  <div class="neo-tabs__active-bar" :style="barStyle"></div>
</template>
<script>
  export default {
    name: 'TabBar',

    props: {
      tabs: Array
    },

    inject: ['rootTabs'],

    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$parent.$refs.tabs && !this.tabs) return {};
          let style = {};
          let offset = 0;
          let tabSize = 0;
          const sizeName = 'width';
          const sizeDir = 'x';
          const firstUpperCase = str => {
            return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
          };
          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];
            if (!$el) { return false; }

            if (!tab.active) {
              offset += $el[`client${firstUpperCase(sizeName)}`];
              return true;
            } else {
              tabSize = $el[`client${firstUpperCase(sizeName)}`];
              return false;
            }
          });

          const transform = `translate${firstUpperCase(sizeDir)}(${offset}px)`;
          style[sizeName] = tabSize + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;

          return style;
        }
      }
    }
  };
</script>
