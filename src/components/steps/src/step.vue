<template>
  <div class="neo-step is-horizontal" :style="style">
    <!-- icon & line -->
    <div class="neo-step__head" :class="`is-${currentStatus}`">
      <div class="neo-step__line" :style="isLast ? '' : { marginRight: $parent.stepOffset + 'px' }">
        <i class="neo-step__line-inner" :style="lineStyle"></i>
      </div>

      <div class="neo-step__icon is-text" :class="[currentStatus ? (currentStatus === 'wait' ? '':'is-unwait') : '']">
        <div v-if="currentStatus === 'wait' || !isLast" class="neo-step__icon-inner">{{ index + 1 }}</div>
        <i v-else class="neo-icon neo-step__icon-inner">&#xe6ea;</i>
      </div>
    </div>
    <!-- title -->
    <div class="neo-step__main">
      <div class="neo-step__title" ref="title" :class="['is-' + currentStatus]">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="neo-step__description" ref="description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NeoStep',

    props: {
      title: String,
      description:String,
      status: String,
    },

    data() {
      return {
        index: -1,
        lineStyle: {},
        internalStatus: ''
      };
    },

    beforeCreate() {
      this.$parent.steps.push(this);
    },

    beforeDestroy() {
      const steps = this.$parent.steps;
      const index = steps.indexOf(this);
      if (index >= 0) {
        steps.splice(index, 1);
      }
    },

    computed: {
      currentStatus() {
        return this.status || this.internalStatus;
      },
      prevStatus() {
        const prevStep = this.$parent.steps[this.index - 1];
        return prevStep ? prevStep.currentStatus : 'wait';
      },
      isLast() {
        const parent = this.$parent;
        return parent.steps[parent.steps.length - 1] === this;
      },
      stepsCount() {
        return this.$parent.steps.length;
      },
      space() {
        const { $parent: { space } } = this;
        return space;
      },
      style: function () {
        const style = {};
        const parent = this.$parent;
        const len = parent.steps.length;

        const space = (typeof this.space === 'number'
          ? this.space + 'px'
          : this.space
            ? this.space
            : 100 / len + '%');
        style.flexBasis = space;
        if (this.isLast) {
          style.maxWidth = 100 / this.stepsCount + '%';
        } else {
          style.marginRight = -this.$parent.stepOffset + 'px';
        }

        return style;
      }
    },

    methods: {
      updateStatus(val) {
        const prevChild = this.$parent.$children[this.index - 1];

        if (val > this.index) {
          this.internalStatus = 'finish';
        } else if (val === this.index) {
          this.internalStatus = 'process';
        } else {
          this.internalStatus = 'wait';
        }

        if (prevChild) prevChild.calcProgress(this.internalStatus);
      },

      calcProgress(status) {
        let step = 100;
        const style = {};

        style.transitionDelay = 150 * this.index + 'ms';
        if (status === 'wait') {
          step = 0;
          style.transitionDelay = (-150 * this.index) + 'ms';
        }

        style.borderWidth = step ? '1px' : 0;
        style.width = step + '%';

        this.lineStyle = style;
      }
    },

    mounted() {
      const unwatch = this.$watch('index', val => {
        this.$watch('$parent.active', this.updateStatus, { immediate: true });
        unwatch();
      });
    }
  };
</script>