<template>
	<div>
		<select v-if="native" v-model="selectedValue" @change="handleNativeChange">
			<option
				v-for="item in options"
				:key="item.value"
				:value="item.value">
				{{ item.displayValue }}
			</option>
		</select>
		<el-select v-else v-model="selectedValue" @change="handleChange">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.displayValue"
				:value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
import { VueModel, Vue } from "../imports";
import { Select } from "element-ui";
Vue.use(Select);

export default {
	name: "c-select",
	mixins: [VueModel.mixins.SourceConsumer],
	computed: {
		selectedValue: {
			get: function() {
				// debugger;
				return this.$source.value;
			},
			set: function(value) {
				this.$source.value = value;
			}
		},
		options: function() {
			// TODO: Expand on this logic...
			return this.$source.options;
		}
	},
	methods: {
		handleChange(value, ev) {
			this.$emit("change", value, ev);

			// temporary - to make it work
			this.$source.value = value;
		},
		handleNativeChange(ev) {
			let value = ev.target.value;

			this.$emit("change", value, ev);

			// temporary - to make it work
			this.$source.value = value;
		}
	},
	model: {
		prop: "value",
		event: "change"
	},
	props: ["label", "value", "native"]
};
</script>
