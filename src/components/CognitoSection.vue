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
		error ? 'c-error' : '',
		required ? 'c-required' : ''
	]">
		<template v-if="type === 'field'">
			<label class="c-label" v-if="title">{{title}}</label>
			<slot></slot>
		</template>

		<template v-else-if="type.indexOf('section') > -1">
			<h3 v-if="title">{{title}}</h3>
			<div class="c-section-container c-cf">
				<h4 v-if="type === 'repeating-section'">
					<cognito-button v-if="type === 'repeating-section'" class="remove-section-button">
						<cognito-ex />
					</cognito-button>Item X
				</h4>
				<div class="c-shift">
					<slot></slot>
				</div>
			</div>
			<cognito-button v-if="type === 'repeating-section'" class="btn-primary add-section-button"><cognito-plus />Add Item</cognito-button>
		</template>

		<template v-else>
			<slot></slot>
		</template>

		<div v-if="help" class="c-helptext">{{help}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
	import CognitoButton from './CognitoButton.vue';
	import CognitoEx from './icons/CognitoEx.vue';
	import CognitoPlus from './icons/CognitoPlus.vue';

	export default {
		name: 'c-section',
		components: {
			CognitoButton,
			CognitoEx,
			CognitoPlus
		},
    props: [
			'colspan',
			'title',
			'error',
			'column',
			'help',
			'type',
			'required'
		]
  };
</script>

<style scoped lang="scss">
	// Just to get sandbox working
	// @import '../sass/_theme';
	// @import '../sass/_field-style';
	// End sandbox only code

	.c-label {
		display: block;
		font-family: $label-typeface;
	}

	.c-required .c-label:after {
		@include required;
	}

	.c-helptext {
		font-size: $small-text;
		padding: $gutter/4 0;
	}

	.c-validation {
		background: $negative;
		color: $negative-reverse;
		font-size: $small-text;
		padding: $gutter/4;
	}

	.c-section-container {
		background: $neutral-bg;
		padding: $gutter/2;
	}

	.c-section-container:nth-child(odd) {
		background: transparent;
		border-bottom: 2px solid $neutral-bg;
	}

	$section-left-padding: 36px;

	.c-repeating-section .c-section-container  {
		position: relative;
		padding-left: $section-left-padding;
	}

	.remove-section-button {
		width: $section-left-padding/1.75;
		height: $section-left-padding/1.75;
    margin-left: 	$section-left-padding*-.6 - 5;
    margin-right: 5px;
    display: inline-block;
	}

	.add-section-button {
		margin-top: $gutter/3;
	}
</style>

