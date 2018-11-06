<template>
	<label>
		<input type="checkbox" v-model="value">
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
	props: ['label', 'value']
};
</script>
