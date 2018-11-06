<template>
	<input class="c-input" :type="type" :v-mask="mask" :value="displayValue" @change="e => this.onInput(e)" />
</template>

<script>
import VueModel from "../../ref/vuemodel.cjs";
export default {
	name: 'c-text',
	mixins: [VueModel.mixins.SourceConsumer],
	methods: {
		onInput: function(e) {
			// debugger;
			this.displayValue = e.target.value;
		}
	},
	props: ['type', 'value', 'mask']
};
</script>

<style lang="scss">

</style>