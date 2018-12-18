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
		border-radius: $button-border-radius;
	}

	.c-button--primary {
		background: $btn-primary-bg;
		color: $btn-primary-text;
		border: $input-border-width $btn-primary-bg $input-border-style;
	}

	.c-button--secondary {
		background: $neutral-reverse;
		color: $neutral;
		border: $input-border-width $neutral-reverse $input-border-style;
	}
</style>

