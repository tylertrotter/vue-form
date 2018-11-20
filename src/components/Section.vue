<template>
	<div :is="type === 'table' ? 'table' : 'div'">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'c-section',
		props: ['type']
	}
</script>

<style scoped>
	table {
		width: 100%;
	}
</style>

