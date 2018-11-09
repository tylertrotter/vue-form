<template>
	<el-input v-model="value" :type="type" :v-mask="mask" @change="handleChange" />
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
		handleChange(value, ev) {
			this.$emit('change', value, ev);
			// temporary - to make it work
			this.$source.value = value;
		}
	},
	props: ['type', 'value', 'mask']
};
</script>
