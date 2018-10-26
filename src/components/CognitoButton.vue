<template>
	<button type="button">
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
	}

	.btn-primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
	}
</style>

