<template>
	<el-dialog :title="title" :visible.sync="dialogVisible">
		<slot />
	</el-dialog>
</template>

<script>
	export default {
		name: 'c-dialog',
		props: ['title'],
		data(){
			return {
				dialogVisible: false
			}
		}
	}
</script>

<style lang="scss">
	@import '../sass/theme-chalk-master/src/dialog';

</style>