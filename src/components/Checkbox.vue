<template>
	<el-checkbox v-model="checked" @change="handleChange">{{label}}</el-checkbox>
</template>

<script>
import { getComponentMixins } from "../utils";
export default {
	name: 'c-checkbox',
	mixins: getComponentMixins('c-checkbox'),
	data() {
		return {
			checked: this.value
		}
	},
	// temporary - to make it work
	created() {
		this.checked = this.value;
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
