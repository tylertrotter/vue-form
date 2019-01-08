<template>
	<div class="c-input-container">
		<input v-if="native" type="date" />
		<el-date-picker v-else v-model="value" value-format="yyyy-MM-dd" format="MM/dd/yyyy" @change="handleChange" />
	</div>
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
	props: {
		value: String,
		native: Boolean
	}
};
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/date-picker";

	.popper__arrow {
    position: absolute;
		display: block;
	}

	.el-picker-panel__icon-btn {
		margin: 0 .5em;
	}

	.el-icon-arrow-left {
		@include chevron(90deg);
	}

	.el-icon-d-arrow-left {
		@include chevron(90deg, true);
	}

	.el-icon-arrow-right {
		@include chevron(-90deg);
	}

	.el-icon-d-arrow-right {
		@include chevron(-90deg, true);
	}

	.el-date-editor--date .el-input__suffix .el-input__icon {
		@include calendar;
	}
</style>

