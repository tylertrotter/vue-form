<template>
	<el-button>
		<slot></slot>
	</el-button>
</template>


<script>
	export default {
		name: 'c-button',
  };
</script>

<style lang="scss">

	.el-button {
		border: 0;
		background: transparent;
		padding: 0;

		svg {
			width: 1.2em;
			height: 1.2em;
			vertical-align: bottom;
		}

		svg:not(:last-child){
			margin-right: .3em;
		}
	}

	.c-button--primary,
	.c-button--secondary {
		font-size: $button-font-size;
		padding: $button-padding;
	}

	.c-button--primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
	}

	.c-button--secondary {
		background: $neutral-reverse;
		color: $neutral;
	}

	// Button Icon
	// .c-button--icon {
	// 	width: 1.2em;
	// 	vertical-align: sub;
	// }

	// .btn-primary svg line {
	// 	stroke: $primary-reverse;
	// }

	// .btn-primary svg * {
	// 	fill: $primary-reverse;
	// }
</style>

