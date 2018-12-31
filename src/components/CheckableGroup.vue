<template>
	<div class="c-checkable-group" :class="columns >= 1 && columns <= 4 ? 'c-inner-col-' + columns : 'c-inline'" >
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "c-checkable-group",
		props: {
			"columns": Number,
			"fancy": Boolean
		}
	}
</script>

<style lang="scss">
	@import "../sass/common/_checkable.scss";
</style>