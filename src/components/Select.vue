<template>
	<el-select></el-select>
</template>

<script>

	export default {
		name: 'c-select'
	};
</script>

<style lang="scss">
	@import '../sass/theme-chalk-master/src/select';

	.el-input {
		@include input;

		input {
			border: 0;
			background: transparent;
		}
	}
</style>

