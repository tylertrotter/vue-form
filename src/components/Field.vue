<!--
	This component is for sections of a form down to the field level.
	Inside of a field the CognitoRow component can be used (if necessary).

	E.g. c-field, c-section, and c-buttons (the section at the bottom for buttons).
-->

<template>
	<div :class="[
		`c-field`,
		(typeof(colspan) !== 'undefined') ? `c-col-${colspan}` : '',
		(column === '1') ? 'c-row-start' : '',
		(+column + +colspan  === 25) ? 'c-row-end' : '',
		error ? 'c-error' : '',
		required ? 'c-required' : ''
	]">
		<label class="c-label" v-if="label">{{label}}</label>
		<slot></slot>
		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { getComponentMixins } from "../utils";
export default {
  name: "c-field",
	mixins: getComponentMixins("c-field"),
  props: ["colspan", "label", "helptext", "error", "column", "required"]
};
</script>

<style scoped lang="scss">
// Just to get sandbox working
@import "../sass/_theme";
@import "../sass/_field-style";
@import "../sass/_mixins.scss";
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

.c-repeating-section .c-section-container {
  position: relative;
  padding-left: $section-left-padding;
}

.remove-section-button {
  width: $section-left-padding/1.75;
  height: $section-left-padding/1.75;
  margin-left: $section-left-padding * -0.6 - 5;
  margin-right: 5px;
  display: inline-block;
}

.add-section-button {
  margin-top: $gutter/3;
}
</style>
