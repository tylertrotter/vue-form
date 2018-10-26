<template>
	<div class="c-row">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'c-field-row',
  };
</script>

<style scoped lang="scss">
	.c-row {
		display: flex;
		width: calc(100% + #{$gutter}/2);
		margin-left: -$gutter/4;

		& > * {
			margin-left: $gutter/4;
			margin-right: $gutter/4;
		}

		& + .c-row > * {
			margin-top: $gutter/2;
		}
	}

	.c-pull {
		margin-left: auto;
	}
</style>

