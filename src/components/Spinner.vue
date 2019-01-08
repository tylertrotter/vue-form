<template>
	<div class="c-input-container">
		<el-input-number v-model="value" @change="handleChange" :min="min" :max="max" :step="step"></el-input-number>
	</div>
</template>

<script>
import { VueModel, Vue } from "../imports";
import { InputNumber } from "element-ui";
Vue.use(InputNumber);

export default {
	name: "c-spinner",
	mixins: [VueModel.mixins.SourceConsumer],
	data(){
		return {
			value: 0
		}
	},
	methods: {
		handleChange(value, ev) {
			this.$emit("change", value, ev);
			// temporary - to make it work
			this.$source.value = value;
		}
	},
	props: [
		"min",
		"max",
		"step"
	]
};
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/input-number";

	.el-icon-minus:before{
		content: "\2212";
	}

	.el-icon-plus:before{
		content: "+";
	}
</style>