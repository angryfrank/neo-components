<template>
  <div class="neo-checkbox-tag" :class="[{'is-checked':isChecked,'is-disabled':disabled}]" @click="handleClick"
    @focus="focus = true" @blur="focus = false">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <img v-show="!disabled" :src="[isChecked?mark_select:mark_unselect]" class="neo-checkbox-tag__image">
  </div>
</template>
<script>
  import mark_select from "../../../assets/images/checkright.png";
  import mark_unselect from "../../../assets/images/mark_unselect.png";
  export default {
    name: 'NeoCheckboxTag',
    componentName: 'NeoCheckboxTag',
    props: {
      label: {
        type:String,
        required:true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        mark_select,
        mark_unselect,
        focus: false,
      };
    },
    computed: {
      _checkboxGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'NeoCheckboxTagGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      isChecked: {
        get() {
          return this._checkboxGroup.value.indexOf(this.label) > -1;
        },
        set(val) {
          if (val) {
            this._checkboxGroup.value.splice(this._checkboxGroup.value.length, 1, this.label);
          } else {
            this._checkboxGroup.value.splice(this._checkboxGroup.value.indexOf(this.label), 1);
          }
        }
      }
    },
    methods: {
      handleClick,
    },
  };

  function handleClick(evt) {
    if (this.disabled) {
      return;
    }
    this.isChecked = !this.isChecked;
    this.$emit("click",this.isChecked, evt);
  }
</script>
