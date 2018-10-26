<!--
	This component is for sections of a form down to the field level.
	Inside of a field the CognitoRow component can be used (if necessary).

	E.g. c-field, c-section, and c-buttons (the section at the bottom for buttons).
-->

<template>
	<div :class="[
		`c-${type}`,
		(typeof(colspan) !== 'undefined') ? `c-col-${colspan}` : '',
		(column === '1') ? 'c-row-start' : '',
		(+column + +colspan  === 25) ? 'c-row-end' : '',
		error ? 'c-error' : ''
	]">
		<template v-if="type === 'field'">
			<label class="c-label" v-if="title">{{title}}</label>
			<slot></slot>
		</template>

		<template v-else-if="type === 'section'">
			<h3 v-if="title">{{title}}</h3>
			<div class="c-section-container c-cf">
				<slot></slot>
			</div>
		</template>

		<template v-else>
			<slot></slot>
		</template>

		<div v-if="help" class="c-helptext">{{help}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
	export default {
		name: 'c-section',
    props: [
			'colspan',
			'title',
			'error',
			'column',
			'help',
			'type'
		]
  };
</script>

<style scoped lang="scss">
	// Just to get sandbox working
	@import '../sass/_theme';
	@import '../sass/_field-style';
	// End sandbox only code
	.c-label {
		display: block;
		font-family: $label-typeface;
	}

	.c-helptext {
		font-size: $small-text;
		padding: $gutter/8 0;
	}

	.c-validation {
		background: $negative;
		color: $negative-reverse;
		font-size: $small-text;
		padding: $gutter/8;
	}

	.c-section-container {
		background: $neutral-bg;
		padding-top: $gutter/2;
		padding-bottom: $gutter/2;
	}
</style>

