<template>
	<div class="c-input-container">
		<el-switch
			class="c-toggle"
			v-model="checked"
			:active-text="activeText"
			:inactive-text="inactiveText">
		</el-switch>
	</div>
</template>

<script>
import { Vue, VueModel } from "../imports";
import { Switch } from "element-ui";
Vue.use(Switch);

export default {
	name: "c-toggle",
	mixins: [VueModel.mixins.SourceConsumer],
	data(){
		return {
			checked: this.value
		}
	},
	// temporary - to make it work
	created() {
		this.checked = this.value;
	},
	methods: {
		handleChange(value, ev) {
			this.$emit("change", value, ev);
			// temporary - to make it work
			this.$source.value = value;
		}
	},
	model: {
		prop: "value",
		event: "change"
	},
	props: [
		"active-text",
		"inactive-text",
		"value"
	]
};
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/switch";

	// #if !chameleon

	// #endif
</style>