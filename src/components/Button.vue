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

<style lang="scss">
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

	.btn-secondary {
		background: $neutral-reverse;
		color: $neutral;
	}

	// Button Icon
	.btn svg {
		width: 1.2em;
		vertical-align: sub;
	}

	.btn-primary svg line {
		stroke: $primary-reverse;
	}

	.btn-primary svg * {
		fill: $primary-reverse;
	}
</style>

