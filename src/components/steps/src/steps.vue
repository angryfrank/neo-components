<template>
  <div class="neo-steps neo-steps--horizontal">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NeoSteps',

    props: {
      space: [Number, String],
      active: Number,
    },

    data() {
      return {
        steps: [],
        stepOffset: 0,
      };
    },

    methods: {},

    watch: {
      active(newVal, oldVal) {
        this.$emit('change', newVal, oldVal);
      },

      steps(steps) {
        steps.forEach((child, index) => {
          child.index = index;
        });
      }
    }
  };
</script>