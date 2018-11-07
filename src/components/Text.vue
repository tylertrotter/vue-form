<template>
	<input class="c-input" :type="type" :v-mask="mask" v-model="value" />
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
	props: ['type', 'value', 'mask']
};
</script>

<style lang="scss">

</style>
