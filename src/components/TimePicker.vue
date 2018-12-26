<template>
	<el-time-picker
    arrow-control
		v-model="date"
    :picker-options="{
      selectableRange: '4:30:00 - 20:30:00'
    }"
    >
  </el-time-picker>
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
	// @import "../sass/theme-chalk-master/src/time-picker";
</style>
