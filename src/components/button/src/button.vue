<template>
	<button class="neo-button" @click="handleClick" :disabled="btnDisabled" :class="[
      type ? 'neo-button--' + type : '',
      buttonSize ? 'neo-button--' + size : '',
      {
        'is-disabled': btnDisabled,
      }
    ]">
		<i v-if="icon" class="neo-icon" v-html="icon"></i>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>
<script>
	export default {
		name: 'NeoButton',
		props: {
			type: String,
			size: String,
			icon: {
				type: String,
				default: ''
			},
			disabled:Boolean
		},
		computed: {
			buttonSize: function () {
				return this.size;
			},
			btnDisabled: function () {
				return this.disabled;
			},
		},
		methods: {
			handleClick,
		}
	};

	function handleClick(evt) {
		this.$emit("click", evt);
	}
</script>