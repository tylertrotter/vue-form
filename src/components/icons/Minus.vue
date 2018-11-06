<template>
	<svg viewBox="0 0 12 12">
		<line x1="2.5" x2="9.5" y1="6" y2="6" :stroke="color"></line>
	</svg>
</template>

<script>
	export default {
		name: 'c-minus',
		props: ['color']
  };
</script>

<style scoped lang="scss">
	line {
		stroke-width:1.5;
	}
</style>