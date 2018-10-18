<template>
	<div :class="[
		'c-field',
		(typeof(colspan) !== 'undefined') ? `c-span-${colspan}` : '',
		(column === '1') ? 'c-row-start' : '',
		(+column + +colspan  === 25) ? 'c-row-end' : '',
		error ? 'c-error' : ''
	]">
		<div class="c-label">{{label}}</div>
		<slot></slot>
		<div v-if="help" class="c-helptext">{{help}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
	export default {
		name: 'c-field',
    props: [
			'colspan',
			'label',
			'error',
			'column',
			'help'
		]
  };
</script>

<style scoped lang="scss">
	.c-label {
		font-weight: bold;
	}

	.c-helptext {
		font-size: .8em;
		font-style: italic;
	}

	.c-validation {
		background: red;
		color: white;
	}
</style>

