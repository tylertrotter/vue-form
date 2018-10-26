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
	.btn {
		border: 0;
	}

	.btn-primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
	}
</style>

