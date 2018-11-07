<template>
	<el-date-picker></el-date-picker>
</template>

<script>

	export default {
		name: 'c-date-picker'
	};
</script>

<style lang="scss">
	@import '../sass/theme-chalk-master/src/date-picker';

	.el-input {
		@include input;

		input {
			border: 0;
			background: transparent;
		}
	}

	.el-date-editor {
		display: block;
	}
</style>

