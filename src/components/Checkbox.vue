<template>
	<label>
		<input type="checkbox" :checked="value" @input="e => this.onInput(e)">
		<span>{{label}}</span>
	</label>
</template>

<script>
import VueModel from "../../ref/vuemodel.cjs";
export default {
	name: 'c-checkbox',
	mixins: [VueModel.mixins.SourceConsumer],
	methods: {
		onInput: function(e) {
			this.value = e.target.checked;
		}
	},
	props: ['label']
};
</script>