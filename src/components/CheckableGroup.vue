<template>
	<div
	class="c-checkable-group c-input-container"
	:class="[
		(columns >= 1 && columns <= 4) ? 'c-inner-col-' + columns : 'c-inline',
		readonly ? 'c-readonly c-readonly--checkable' : ''
	]" >
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "c-checkable-group",
		props: {
			columns: Number,
			fancy: Boolean,
			readonly: Boolean
		}
	}
</script>

<style lang="scss">
	@import "../sass/common/_checkable.scss";

	.c-readonly--checkable {
		[class*="__input"] {
			display: none;
		}
	}

// #if !chameleon
	@import "../sass/common/_fancy-checkables.scss";
// #endif
</style>