<template>
	<div :class="[
		'c-field',
		error ? 'c-error' : '',
		required ? 'c-required' : ''
		]"
	 	:is="this.$parent.$parent.$parent.$parent.currentType && this.$parent.$parent.$parent.$parent.currentType === 'c-repeating-table' ? 'td' : 'div'"
		ref="field"
	>
		<label class="c-label" v-if="fieldLabel && this.$parent.$parent.$parent.$parent.currentType !== 'c-repeating-table' ">{{fieldLabel}}</label>
		<slot></slot>
		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { VueModel } from "../imports";
import {EventBus} from "./../event-bus.js";

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
	props: ["label", "helptext", "error", "required"]
};
</script>

<style scoped lang="scss">
	.c-label {
		display: block;
		font-family: $label-typeface;
		margin-bottom: $gutter/4;
	}

	.c-required .c-label:after {
		@include required;
	}

	.c-helptext {
		@include helptext;
	}

	.c-validation {
		background: $negative;
		border-radius: $border-radius/2;
		padding: $gutter/4;
		color: $negative-reverse;
		font-size: $small-text;
	}

	// Should I add a c-container class to this and sections so they can share some styles?
	.c-error {
		background: lighten($negative, 47);
		border: 2px solid $negative;
		border-radius: $border-radius;

		.c-label {
			color: $negative;
		}
	}
</style>
