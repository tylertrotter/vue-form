<template>
	<button type="button" class="btn">
		<slot></slot>
	</button>
</template>


<script>
	export default {
		name: 'c-button',
  };
</script>

<style scoped lang="scss">
	@import '../sass/_theme';
	@import '../sass/_field-style';

	.btn {
		border: 0;
		background: transparent;
		padding: 0;
	}

	.btn-primary,
	.btn-secondary {
		padding: $button-padding;
	}

	.btn-primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
	}

	// Button Icon
	.btn svg {
		width: 1.4em;
		vertical-align: sub;
		margin-right: $button-padding/2;
	}

	.btn-primary svg line {
		stroke: $primary-reverse;
	}

	.btn-primary svg * {
		fill: $primary-reverse;
	}
</style>

