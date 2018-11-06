<template>
	<div :class="[
		`c-repeating-section`,
		(typeof(colspan) !== 'undefined') ? `c-col-${colspan}` : '',
		(column === '1') ? 'c-row-start' : '',
		(+column + +colspan  === 25) ? 'c-row-end' : '',
		error ? 'c-error' : '',
		required ? 'c-required' : ''
	]">
		<template>
			<h3 v-if="title">{{title}}</h3>
			<!-- <h3 v-else-if="label">{{label}}</h3> -->
			<div class="c-section-container c-cf" v-for="(item, i) in value" :key="item.meta.id">
				<h4>
					<c-button class="remove-section-button">
						<c-ex />
					</c-button>Item X
				</h4>
				<div class="c-shift">
					<c-section :source="i">
						<slot v-bind:item="item"></slot>
					</c-section>
				</div>
			</div>
			<c-button class="btn-primary add-section-button"><c-plus />Add Item</c-button>
		</template>
		<div v-if="helptext" class="c-helptext">{{helptext}}</div>
		<div v-if="error" class="c-validation">{{error}}</div>
	</div>
</template>

<script>
import { getComponentMixins } from "../utils";
import CSection from "./Section";
import CButton from "./Button.vue";
import CEx from "./icons/Ex.vue";
import CPlus from "./icons/Plus.vue";
export default {
	name: "c-repeating-section",
	mixins: getComponentMixins("c-repeating-section"),
  components: {
		CSection,
    CButton,
    CEx,
    CPlus
  },
  props: ["colspan", "title", "error", "column", "helptext", "required"]
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
