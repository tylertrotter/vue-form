<template>
	<div class="c-select c-input-container">
		<div v-if="readonly" class="c-readonly c-readonly--input">{{selectedValue || "&nbsp;"}}</div>
		<template v-else>
			<select v-if="native" v-model="selectedValue" @change="handleNativeChange">
				<option
					v-for="item in options"
					:key="item.value"
					:value="item.value">
					{{ item.value }}
				</option>
			</select>
			<el-select v-else v-model="selectedValue" @change="handleChange" allow-create filterable>
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.displayValue"
					:value="item.value">
				</el-option>
			</el-select>
		</template>
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
			return [{value: 'Option A', label: 'Option A'}, {value: 'Option B', label: 'Option B'}, {value: 'Option C', label: 'Option C'}]//this.$source.options;
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
	props: ["label", "value", "native", "readonly"]
};
</script>

<style lang="scss">

	@import "../sass/theme-chalk-master/src/select";

	.el-select .is-focus.el-input {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.el-input__suffix {
    position: absolute;
    height: 100%;
    right: $input-padding-h;
    top: 0;
    pointer-events: none;
}

	.el-input__suffix i {
		height: 100%;

		width: $input-font-size;
		display: inline-block;
	}

	.el-select .el-input .el-select__caret {
		transition: all .3s;
	}
	.el-select .el-input .el-select__caret.is-reverse {
		transform: scaleY(-1);
	}

	.el-select .el-input i {
		@include chevron();
	}
</style>