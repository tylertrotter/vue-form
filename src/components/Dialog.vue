<template>
	<el-dialog :title="title" :visible.sync="dialogVisible">
		<slot />
	</el-dialog>
</template>

<script>
	import {EventBus} from "./../event-bus.js";
	import { Vue } from "../imports";
	import { Dialog } from "element-ui";
	Vue.use(Dialog);

	export default {
		name: "c-dialog",
		props: ["title"],
		data(){
			return {
				dialogVisible: false
			}
		},
		mounted() {
			EventBus.$on("open-modal", name => {
				this.dialogVisible = true;
			});
		}
	}
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/dialog";

</style>