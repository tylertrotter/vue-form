<template>
	<el-checkbox-group v-model="checked">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
	import { Vue } from "../imports";
	import CheckboxGroup from "element-ui";

	Vue.use(CheckboxGroup);

	export default {
		name: "c-checkbox-group",
		props: {
			preChecked: Array
		},
		data () {
      return {
        checked: this.$props.preChecked
      };
    }
	}
</script>