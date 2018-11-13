<template>
	<table v-if="wide">
		<tr>
			<td v-for="(column, index) in columns" :key="index">
				<slot :name="column" />
			</td>
		</tr>
	</table>
	<div v-else>
		<div v-for="(column, i) in columns" :key="i">
			<slot :name="column" />
		</div>
	</div>
</template>

<script>
import { VueModel } from "../imports";
import CSection from "./Section";
export default {
	name: 'c-table',
	props: [
		'columns'
	],
	mixins: [VueModel.mixins.SourceProvider],
	components: {
		CSection
	},
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
	}
};
</script>

<style lang="scss">

</style>

