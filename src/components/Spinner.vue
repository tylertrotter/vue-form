<template>
	<el-input-number v-model="value" @change="handleChange" :min="min" :max="max" :step="step"></el-input-number>
</template>

<script>
import { getComponentMixins } from "../utils";

export default {
	name: 'c-spinner',
	mixins: getComponentMixins("c-spinner"),
	data(){
		return {
			value: 0
		}
	},
	methods: {
		handleChange(value, ev) {
			this.$emit('change', value, ev);
			// temporary - to make it work
			this.$source.value = value;
		}
	},
	props: [
		'min',
		'max',
		'step'
	]
};
</script>

<style lang="scss">
	@import '../sass/theme-chalk-master/src/input-number';

	.el-icon-minus:before{
		content: '-';
	}

	.el-icon-plus:before{
		content: '+';
	}
</style>