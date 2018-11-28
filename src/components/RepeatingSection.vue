<template>
	<div :class="containerIsTable ? '' : 'c-section c-section--repeating'" :is="containerIsTable ? 'tbody' : 'div'">
		<div v-if="!containerIsTable" class="c-unshift">
			<c-button class="c-remove"><c-ex /></c-button>
			<h2>Section Title</h2>
		</div>

		<slot></slot>

	</div>
</template>

<script>
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';
	import CSection from './Section.vue';

	export default {
		name: 'c-repeating-section',
		components: { CButton, CEx, CSection },
		data(){
			return {
				containerIsTable: this.$parent.$parent.currentType === 'c-repeating-table'
			}
		}
	}
</script>

<style lang="scss">

	// Temporary
	.c-section--repeating .c-remove {
		width: $gutter*.75;
		background: transparent;
		border: 0;
		padding: 0;
	}
</style>