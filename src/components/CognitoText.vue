<template>
	<input :type="type" />
</template>

<script>
	export default {
		name: 'c-text',
    props: ['type']
  };
</script>