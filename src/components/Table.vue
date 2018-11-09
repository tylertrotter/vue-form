<template>
	<table v-if="wide">
		<tr>
			<td v-for="(column, index) in columns" :key="index"><slot :name="column"></slot></td>
		</tr>
	</table>
	<div v-else>
		<div v-for="(column, index) in columns" :key="index"><slot :name="column"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'c-table',
		data() {
			return {
				wide: true
			}
		},
		created() {
    	window.addEventListener("resize", this.handleResize);
		},
		mounted() {
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener("resize", this.handleResize);
		},
		methods: {
			handleResize() {
				if( this.$el.clientWidth <= window.innerWidth - 150){
					this.wide = true;
				}else{
					this.wide = false;
				}
			}
		},
		props: [
			'columns'
		]
	};
</script>

<style lang="scss">

</style>

