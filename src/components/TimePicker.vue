<template>
	<div class="c-input-container">
		<el-time-picker
			arrow-control
			v-model="date"
			:picker-options="{
				selectableRange: '4:30:00 - 20:30:00'
			}"
			>
		</el-time-picker>
	</div>
</template>

<script>
	import { Vue } from "../imports";
	import { TimePicker } from "element-ui";
	Vue.use(TimePicker);

	export default {
		name: "c-time",
		data() {
			return {
				date: new Date(2016, 9, 10, 18, 40)
			};
    }
	}
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/time-picker";

	.el-date-editor--time .el-input__suffix .el-input__icon {
		@include clock;
	}

	.el-time-spinner {
		.el-icon-arrow-up,
		.el-icon-arrow-down {
			position: absolute;
			left: 0;
			z-index: 1;
			width: calc(100% - 1em);
			height: calc(50px - 1em);
			margin: .5em;
			display: block;
			background-size: 30%;
		}

		.el-icon-arrow-up {
			@include chevron(180deg);
		}

		.el-icon-arrow-down {
			@include chevron;
			bottom: 0;
		}
	}

	.el-time-spinner__arrow:hover {
		cursor: pointer;
		background-color: rgba($highlight, .1);
	}

</style>
