<template>
	<el-date-picker v-model="value" value-format="yyyy-MM-dd" format="MM/dd/yyyy" @change="handleChange" />
</template>

<script>
import { VueModel, Vue } from "../imports";
import { DatePicker } from "element-ui";
Vue.use(DatePicker);

export default {
	name: "c-date-picker",
	mixins: [VueModel.mixins.SourceConsumer],
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
	props: ["value"]
};
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/date-picker";
</style>

