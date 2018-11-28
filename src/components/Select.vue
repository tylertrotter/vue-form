<template>
	<el-select v-model="selectedValue" @change="handleChange"></el-select>
</template>

<script>
import { VueModel } from "../imports";
export default {
	name: 'c-select',
	mixins: [VueModel.mixins.SourceConsumer],
	data() {
		return {
			selectedValue: this.value
		}
	},
	methods: {
		handleChange(value, ev) {
			this.$emit('change', value, ev);

			// temporary - to make it work
			this.$source.value = value;
		}
	},
	model: {
		prop: 'value',
		event: 'change'
	},
	props: ['label', 'value']
};
</script>

<style scoped lang="scss">
	@import '../sass/theme-chalk-master/src/select';

	.el-input {
		@include input;

		input {
			border: 0;
			background: transparent;
		}
	}
</style>

