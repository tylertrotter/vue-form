<template>
	<div :class="containerIsTable ? '' : 'c-section c-section--repeating'" :is="containerIsTable ? 'tbody' : 'div'">
		<div v-if="!containerIsTable">
			<c-button class="c-remove"><i-ex /></c-button>
			<h2>Section Title</h2>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	import { VueModel } from "../imports";
	import CButton from "./Button.vue";
	import IEx from "./../assets/ex.svg";
	import CSection from "./Section.vue";

	export default {
		name: "c-repeating-section",
		components: { CButton, IEx, CSection },
		mixins: [VueModel.mixins.SourceProvider],
		data(){
			return {
				containerIsTable: this.$parent.$parent.currentType === "c-repeating-table"
			}
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
		}
	}
</script>

<style lang="scss">

	// Temporary
	.c-section--repeating .c-remove {
		width: $gutter*.75;
		background: transparent;
		border: 0;
		padding: 0;
	}

	.c-section--repeating {
		h2 {
			display: inline-block;
			vertical-align: middle;
		}
	}
</style>