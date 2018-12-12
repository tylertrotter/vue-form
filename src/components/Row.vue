<template>
	<component class="c-row" :is="containerIsTable ? 'tr' : 'div'">
		<td v-if="containerIsTable"><c-button class="c-button--remove-row"><c-ex /></c-button></td>
		<slot></slot>
	</component>
</template>

<script>
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';
	import CRepeatingSection from './RepeatingSection.vue';

	export default {
		name: 'c-field-row',
		components: { CButton, CEx, CRepeatingSection },
		data(){
			return {
				containerIsTable: this.$parent.$parent.$parent.currentType === 'c-repeating-table'
			}
		}
  };
</script>
