<template>
	<el-button>
		<slot></slot>
	</el-button>
</template>


<script>
	import { Vue } from "./../imports";
	import { Button } from "element-ui";
	Vue.use(Button);

	export default {
		name: "c-button"
  };
</script>

<style lang="scss">
	.c-button--primary,
	.c-button--secondary,
	.c-button--tertiary {

		svg {
			width: 1.15em;
			vertical-align: bottom;
			stroke: currentColor;
		}

		svg:not(:last-child){
			margin-right: .3em;
		}
	}
// #if !chameleon
	.el-button {
		border: 0;
		background: transparent;
		padding: 0;

		&:focus svg {
			transform: scale(1.3);
		}
	}

	.c-button--primary,
	.c-button--secondary,
	.c-button--tertiary {
		font-size: $button-font-size;
		padding: $button-padding;
		border-radius: $button-border-radius;
	}

	.c-button--primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
		border: $input-border-width $btn-primary-bg $input-border-style;

		&:focus {
			box-shadow: 0 0 0 2px $btn-primary-bg;
			border-color: $reverse;
			border-style: dotted;
		}
	}

	.c-button--secondary {
		background: $btn-secondary-bg;
		color: $btn-secondary-text;
		border: $input-border-width $btn-secondary-bg $input-border-style;

		&:focus {
			box-shadow: 0 0 0 2px $btn-secondary-bg;
			border-color: $reverse;
			border-style: dotted;
		}
	}

	.c-button--tertiary {
		background: $reverse;
		color: $color;
		border: $input-border-width $btn-primary-bg $input-border-style;

		&:focus {
			box-shadow: 0 0 0 2px $btn-primary-bg;
		}
	}
// #endif
</style>

