<template>
	<div :class="[
		`c-field`,
		error ? 'c-error' : '',
		required ? 'c-required' : ''
		]"
	 	:is="this.$parent.$parent.$parent.$parent.currentType === 'c-repeating-table' ? 'td' : 'div'"
	>
		<label class="c-label" v-if="fieldLabel && this.$parent.$parent.$parent.$parent.currentType !== 'c-repeating-table' ">{{fieldLabel}}</label>
		<slot></slot>
		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { VueModel } from "../imports";
export default {
  name: "c-field",
  mixins: [VueModel.mixins.SourceProvider],
  computed: {
    fieldLabel: function() {
      let sourceLabel = null;
      if (this.$source) {
        sourceLabel = this.$source.label;
      }

      return typeof this.label === "string" ? this.label : sourceLabel;
    }
  },
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
