<template>
	<input :type="type" :v-mask="mask" :value="value" @change="e => this.onInput(e)" />
</template>

<script>
import { getComponentMixins } from "../utils";
export default {
	name: 'c-text',
	mixins: getComponentMixins("c-text"),
	model: {
		prop: 'value',
		event: 'change'
	},
	methods: {
		onInput: function(e) {
			this.$emit('change', { value: e.target.value });
		}
	},
	props: ['type', 'value', 'mask']
};
</script>

<style scoped lang="scss">
	input {
		width: 100%;
	}
</style>
