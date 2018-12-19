<template>
	<el-radio v-model="radio" :label="label" @change="handleChange">{{label}}</el-radio>
</template>

<script>
	import { Vue } from "../imports";
	import { Radio, RadioGroup } from 'element-ui';
	Vue.use(Radio);
	Vue.use(RadioGroup);

	export default {
		name: 'c-radio',
		data () {
      return {
        radio: this.value
      };
		},
		// temporary - to make it work
		created() {
			this.radio = this.value;
		},
		methods: {
			handleChange(value, ev) {
				this.$emit('change', value, ev);
				// temporary - to make it work
				this.$source.value = value;
			}
		},
		model: {
			prop: 'value',
			event: 'change'
		},
		props: [
			'name',
			'label'
		]
  };
</script>