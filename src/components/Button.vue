<template>
	<el-button>
		<slot></slot>
	</el-button>
</template>


<script>
	import { Vue } from "./../imports";
	import { Button } from 'element-ui';
	Vue.use(Button);

	export default {
		name: 'c-button'
  };
</script>

<style lang="scss">

	.el-button {
		border: 0;
		background: transparent;
		padding: 0;
	}

	.c-button--primary,
	.c-button--secondary,
	.c-button--tertiary {
		font-size: $button-font-size;
		padding: $button-padding;
		border-radius: $button-border-radius;

		svg {
			width: 1.15em;
			vertical-align: bottom;
		}

		svg:not(:last-child){
			margin-right: .3em;
		}
	}

	.c-button--primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
		border: $input-border-width $btn-primary-bg $input-border-style;
	}

	.c-button--secondary {
		background: $btn-secondary-bg;
		color: $btn-secondary-text;
		border: $input-border-width $btn-secondary-bg $input-border-style;
		svg {
			stroke: $btn-secondary-text;
		}
	}

	.c-button--tertiary {
		background: $form-bg;
		color: $form-text;
		border: $input-border-width $btn-primary-bg $input-border-style;
	}
</style>

