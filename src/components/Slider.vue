<template>
	<div class="c-input-container">
		<el-slider v-model="value1" :step="10"></el-slider>
	</div>
</template>

<script>
	import { VueModel, Vue } from "../imports";
	import { Slider } from "element-ui";
	Vue.use(Slider);

	export default {
		name: 'c-spinner',
		data() {
      return {
        value1: 0
      }
    }
	}
</script>

<style lang="scss">
		@import "../sass/theme-chalk-master/src/slider";
</style>