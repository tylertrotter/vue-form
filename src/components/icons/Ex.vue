<template>
	<svg class="c-ex" viewBox="0 0 12 12">
		<circle cx="6" cy="6" r="5"></circle>
		<line x1="4" x2="8" y1="4" y2="8"></line>
		<line x1="8" x2="4" y1="4" y2="8"></line>
	</svg>
</template>

<script>
	export default {
		name: 'c-ex'
  };
</script>

<style scoped lang="scss">
	line {
		stroke-width: 1.5;
		stroke: $negative-reverse;
	}
	circle {
		fill: $negative;
	}
</style>