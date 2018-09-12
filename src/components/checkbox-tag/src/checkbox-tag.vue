<template>
  <div class="neo-checkbox-tag" :class="[{'is-checked':isChecked,'is-disabled':disabled}]" v-model="model" @click="handleClick(item.key)"
    @focus="focus = true" @blur="focus = false">
    <span>{{item.value}}</span>
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
      item: {
        type: Object,
        required: true
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
          return this._checkboxGroup.value.indexOf(this.item.key) > -1;
        },
        set(val) {
          if (val) {
            this._checkboxGroup.value.splice(this._checkboxGroup.value.length, 1, this.item.key);
          } else {
            this._checkboxGroup.value.splice(this._checkboxGroup.value.indexOf(this.item.key), 1);
          }
        }
      }
    },
    methods: {
      handleClick,
    },
  };

  function handleClick(key) {
    if (this.disabled) {
      return;
    }
    this.isChecked = !this.isChecked;
    this.$nextTick(() => {
      this.dispatch("NeoCheckboxTagGroup", "input", [this._checkboxGroup.value]);
    });
  }
</script>