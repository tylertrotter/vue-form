<template>
	<label>
		<input type="radio" :name="name">
		<span>{{label}}</span>
	</label>
</template>

<script>
	export default {
		name: 'c-checkbox',
		props: [
			'name',
			'label'
		]
  };
</script>