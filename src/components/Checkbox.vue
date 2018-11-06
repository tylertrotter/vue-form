<template>
	<label>
		<input type="checkbox" :checked="value" @input="e => this.onInput(e)">
		<span>{{label}}</span>
	</label>
</template>

<script>
import { getComponentMixins } from "../utils";
export default {
	name: 'c-checkbox',
	mixins: getComponentMixins('c-checkbox'),
	model: {
		prop: 'value',
		event: 'change'
	},
	methods: {
		onInput: function(e) {
			this.value = e.target.checked;
			this.$emit("change", e.target.checked);
		}
	},
	props: ['label', 'value']
};
</script>
