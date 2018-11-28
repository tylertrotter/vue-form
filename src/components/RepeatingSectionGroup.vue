<template>
	<div class="c-region c-unshift" >
		<slot></slot>
		<c-button>Add</c-button>
	</div>
</template>

<script>
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';
	import CRepeatingSection from './RepeatingSection.vue';
	import CRepeatingTable from './RepeatingTable.vue';

	export default {
		name: 'c-repeating-section-group',
		components: { CButton, CEx, CRepeatingSection, CRepeatingTable },
		data(){
			return {
				containerIsTable: this.$parent.$parent.currentType === 'c-repeating-table'
			}
		},
		mounted(){
			console.log('1', this.$parent.currentType);
		}
	}
</script>

<style lang="scss">

</style>