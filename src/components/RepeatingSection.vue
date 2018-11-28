<template>
	<div class="c-repeating-section">
		<div class="c-section-container">
			<c-button class="c-remove"><c-ex /></c-button>
			<h3 class="c-padding">Section Title</h3>
			<slot></slot>
		</div>
		<c-button>Add</c-button>
	</div>
</template>

<script>
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';

	export default {
		name: 'c-repeating-section',
		components: { CButton, CEx }
	}
</script>

<style lang="scss">
	.c-section-container {
		position: relative;
		background: $neutral-bg;
		padding: $gutter/2;
	}

	// Temporary
	.c-repeating-section .c-remove {
		width: $gutter*.75;
		background: transparent;
		border: 0;
		padding: 0;

		position: absolute;
		left: $gutter/6;
	}
</style>