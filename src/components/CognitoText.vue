<template>
	<input :type="type" />
</template>

<script>
	export default {
		name: 'c-text',
    props: ['type']
  };
</script>

<style scoped lang="scss">
	input {
		width: 100%;
	}
</style>