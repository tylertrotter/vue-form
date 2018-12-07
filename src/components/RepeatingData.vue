<template>
	<keep-alive>
		<component :is="currentType">
			<template slot="thead"><slot name="thead"></slot></template>
			<slot></slot>
		</component>
	</keep-alive>
</template>

<script>
	import CRepeatingTable from './RepeatingTable.vue';

	export default {
		name: 'c-repeating-data',
		props: ['isTable'],
		components: {
			CRepeatingTable
		},
		data() {
			return {
				currentType: this.$props.isTable ? 'c-repeating-table' : 'c-repeating-section-group'
			}
		},
		created() {
			window.addEventListener("resize", this.handleResize);
		},
		mounted() {
			this.handleResize();
		},
		methods: {
			handleResize() {
				if( this.$props.isTable === true && this.$el.clientWidth > 600 )
					this.currentType = 'c-repeating-table'
				else
					this.currentType = 'c-repeating-section-group'
			}
		}
	}
</script>