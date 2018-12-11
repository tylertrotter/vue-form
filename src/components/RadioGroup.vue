<template>
	<el-radio-group>
		<slot/>
	</el-radio-group>
</template>

<script>
	import CRadio from './Radio.vue';
	export default {
		name: 'c-radio-group',
		components: { CRadio }
	}
</script>

<style lang="scss">

	.c-inner-col-2 {
		columns: 130px 2;
	}

	.c-inner-col-3 {
		columns: 130px 3;
	}

	.c-inner-col-4 {
		columns: 130px 4;
	}

	[class*="c-inner-col-"] label {
		display: block;
		// text-indent: -1.3em;
		padding-left: 1.3em;
		@include break-word;
	}

	.el-radio + .el-radio {
		margin-top: $gutter/4;
	}

	.el-radio {
		position: relative;

		.el-radio__input input {
			position: absolute;
			left: 0;
		}
	}

</style>