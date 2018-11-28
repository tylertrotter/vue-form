<template>
	<keep-alive>
		<component class="c-container" :is="currentType" :class="currentType">
			<template slot="thead"><slot name="thead"></slot></template>
			<slot></slot>
		</component>
	</keep-alive>
</template>

<script>
	import CTable from './Table.vue';
	import CRepeatingSection from './RepeatingSection.vue';

	export default {
		name: 'c-container',
		props: ['type'],
		components: {
			CTable,
			CRepeatingSection
		},
		data() {
			return {
				currentType: this.$props.type
			}
		},
		created() {
			window.addEventListener("resize", this.handleResize);
		},
		mounted() {
			console.log(this.currentType)
			this.handleResize();
		},
		methods: {
			handleResize() {
				if( this.$props.type === 'c-table' && this.$el.clientWidth > 600 )
					this.currentType = 'c-table'
				else
					this.currentType = 'c-repeating-section'
			}
		}
	}
</script>