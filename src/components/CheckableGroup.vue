<template>
	<el-checkbox-group v-model="checked" :class="columns >= 1 && columns <= 4 ? 'c-inner-col-' + columns : 'c-inline'">
		<component :is="`c-${type}`" v-for="(choice, i) in choices" :label="choice" :key="i" />
	</el-checkbox-group>
</template>

<script>
	import CCheckbox from './Checkbox.vue';
	import CRadio from './Radio.vue';

	export default {
		name: 'c-checkbox-group',
		components: { CCheckbox, CRadio },
		props: {
			'columns': Number,
			'options': Array,
			'type': String
		},
		data() {
			return {
				choices: null,
				checked: null,
				isReadonly: this.$parent.$attrs.readonly
			}
		},
		created() {
			this.choices = this.$props.options.map(option => option.label);
			this.checked = this.$props.options.filter(option => option.checked);
		}
	}
</script>

<style lang="scss">
	@import '../sass/common/_checkable.scss';
</style>