<template>
	<div class="c-row" :is="this.$parent.type === 'table' ? 'tr' : 'div'">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'c-field-row'
  };
</script>

<style scoped lang="scss">
	// Just to get sandbox working
	@import '../sass/_theme';
	@import '../sass/_field-style';
	// End sandbox only code

	div.c-row {
		display: flex;
		width: calc(100% + #{$gutter}/2);
		margin-left: -$gutter/4;
		margin-bottom: $gutter;

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

