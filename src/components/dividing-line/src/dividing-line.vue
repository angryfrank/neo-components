<template>
	<div role="hr" class="neo-dividing-line" :style="style"></div>
</template>
<script>
	export default {
		name: 'NeoDividingLine',
		props: {
			size:{
				type:Number,
				default:1
			},
			type: {
				type:String,
				default:'solid',
			},
			color:{
				type:String,
				default:'#EDEDED'
			}
		},
		computed: {
			style(){
				let style= {
					border:'none',
				};
				style.borderTop = this.size+'px '+this.type+' '+this.color;
				return style;
			}
		},
	};
</script>