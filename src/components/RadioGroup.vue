<template>
	<el-radio-group v-model="checked">
    <slot></slot>
  </el-radio-group>
</template>

<script>
	import { Vue } from "../imports";
	import RadioGroup from "element-ui";
	Vue.use(RadioGroup);

	export default {
		name: "c-radio-group",
		props: {
			preChecked: String
		},
		data () {
      return {
        checked: this.$props.preChecked
      };
    }
	}
</script>
