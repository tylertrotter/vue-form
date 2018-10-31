<template>
	<svg viewBox="0 0 12 12">
		<circle cx="6" cy="6" r="5" class="c-negative-color"></circle>
		<line x1="4" x2="8" y1="4" y2="8" class="c-negative-reverse"></line>
		<line x1="8" x2="4" y1="4" y2="8" class="c-negative-reverse"></line>
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
	}
</style>