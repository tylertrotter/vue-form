<template>
	<div class="c-region">
		<div class="c-section">
			<h2>Section Title</h2>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import CRow from './Row.vue';

	export default {
		name: 'c-section',
		components: { CRow },
		data(){
			return {
				containerIsTable: this.$parent.$parent.currentType === 'c-repeating-table'
			}
		}
	}
</script>

<style lang="scss">

</style>

