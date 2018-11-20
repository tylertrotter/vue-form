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

		<template v-if="type.indexOf('section') >= 0 && type.indexOf('item') === -1">
			<h3 v-if="sectionTitle">{{sectionTitle}}</h3>
			<div class="c-section-container c-cf" v-for="(item, i) in items" :key="item.meta.id">
				<h4 v-if="type === 'repeating-section'" @click="e => removeItem(e, i)">
					<c-button class="remove-section-button">
						<c-ex />
					</c-button>Item X
				</h4>
				<div class="c-shift">
					<c-section v-if="type === 'repeating-section'" :source="i" type="repeating-section-item">
						<slot v-bind:item="item"></slot>
					</c-section>
					<slot v-else></slot>
				</div>
			</div>
			<c-button v-if="type === 'repeating-section'" class="btn-primary add-section-button" @click.native="e => addItem(e)">
				<c-plus color="white" /> Add Item
			</c-button>
		</template>

		<template v-else>
			<slot></slot>
		</template>

		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { VueModel } from "../imports";
import CSection from "./Section";
import CButton from "./Button.vue";
import CEx from "./icons/Ex.vue";
import CPlus from "./icons/Plus.vue";
export default {
  name: "c-section",
	mixins: [VueModel.mixins.SourceProvider],
	components: {
		CSection,
    CButton,
    CEx,
		CPlus
	},
	methods: {
		addItem: function(event) {
			let list = this.$source.value;
			let jstype = this.$source.property.propertyType;
			list.push(new jstype());
		},
		removeItem: function(event, index) {
			let list = this.$source.value;
			let item = list[index];
			list.splice(index, 1);
		}
	},
	computed: {
		sectionTitle: function() {
			let sourceLabel = null;
			if (this.$source) {
				sourceLabel = this.$source.label;
			}

			return typeof this.title === "string" ? this.title : sourceLabel;
		},
		items: function() {
			let value = this.$source.value;
			if (Array.isArray(value)) {
				return value;
			} else {
				return [value];
			}
		}
	},
  props: ["type", "colspan", "title", "error", "column", "helptext", "required"]
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
