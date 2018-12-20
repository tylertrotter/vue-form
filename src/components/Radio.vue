<template>
	<el-radio :label="label" @change="handleChange">{{label}}</el-radio>
</template>

<script>
	import { VueModel, Vue } from "../imports";
	import { Radio, RadioGroup } from "element-ui";
	Vue.use(Radio);
	Vue.use(RadioGroup);

	export default {
		name: "c-radio",
		mixins: [VueModel.mixins.SourceConsumer],
		data () {
      return {
				radio: this.value,
				// value: this.value
      };
		},
		// temporary - to make it work
		created() {
			this.radio = this.value;
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
			"name",
			"label"
		]
  };
</script>