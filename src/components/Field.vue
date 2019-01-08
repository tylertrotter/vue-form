<template>
	<div :class="[
		'c-field',
		error ? 'c-error' : '',
		required ? 'c-required' : ''
		]"
	 	:is="this.$parent.$parent.$parent.$parent.currentType && this.$parent.$parent.$parent.$parent.currentType === 'c-repeating-table' ? 'td' : fieldContainerType"
		ref="field"
	>
		<label :is="labelType" class="c-label" v-if="fieldLabel && this.$parent.$parent.$parent.$parent.currentType !== 'c-repeating-table' ">{{fieldLabel}}</label>
			<slot></slot>
		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { VueModel } from "../imports";
import {EventBus} from "./../event-bus.js";

const fieldsetList = ['Address'];
let inputId = 0;

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
		},
		fieldContainerType(){
			// Obviously wrong, but this is the idea:
			return (this.$source && fieldsetList.includes(this.$source.label)) ? 'fieldset' : 'div';
		},
		labelType(){
			// Obviously wrong, but this is the idea:
			return (this.$source && fieldsetList.includes(this.$source.label)) ? 'legend' : 'label';
		}
	},
	mounted(){
		// So wrong
		// let label = this.$el.querySelector('label').setAttribute('for', 'input-'+inputId);
		// this.$el.querySelector('input, select, textarea').setAttribute('id', 'input-'+inputId);
		// inputId++;
	},
	props: {
		label: String,
		helptext: String,
		error: String,
		required: Boolean,
		readonly: Boolean
	}
};
</script>

<style lang="scss">
	.c-label {
		display: block;
		@include label;
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

	.cg fieldset {
		border: 0;
	}

	.cg legend {
		display: table;

		// https://www.w3.org/TR/html5/rendering.html#the-fieldset-and-legend-elements
		float: left;
	}
</style>
