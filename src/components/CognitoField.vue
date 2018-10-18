<template>
	<div :class="['c-field', `c-span-${colspan}`]">
		<div class="c-label">{{label}}</div>
		<slot></slot>
		<div v-if="error" class="c-validation">error</div>
	</div>
</template>

<script>
	export default {
		name: 'c-field',
    props: ['colspan', 'label', 'error']
  };
</script>

<style lang="scss">
	.c-field {
		float: left;
	}

	.c-span-12 {
		width: 50%;
	}

	.c-span-6 {
		width: 25%;
	}

	.c-label {
		font-weight: bold;
	}
</style>

