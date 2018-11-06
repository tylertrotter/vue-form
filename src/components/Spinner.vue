<template>
	<div class="c-spinner c-input" :class="(typeof max) !== 'undefined' ? 'c-spinner--width-' + max.length : ''">
		<c-button class="btn-secondary" tabindex="-1"><c-minus color="black" /></c-button>
		<c-text type="text" />
		<c-button class="btn-secondary" tabindex="-1"><c-plus color="black" /></c-button>
	</div>
</template>

<script>
import VueModel from "../../ref/vuemodel.cjs";
import CText from './Text.vue';
import CButton from './Button.vue';
import CPlus from "./icons/Plus.vue";
import CMinus from "./icons/Minus.vue";

export default {
	name: 'c-spinner',
	mixins: [VueModel.mixins.SourceConsumer],
	components: {
		CText,
		CButton,
		CPlus,
		CMinus
	},
	methods: {
		onInput: function(e) {
			// debugger;
			this.displayValue = e.target.value;
		}
	},
	props: [
		'min',
		'max'
	]
};
</script>

<style lang="scss">
	.c-spinner {
		display: flex;
		overflow: hidden;

		button {
			width: 50px;
			// padding: $button-padding;
			// font-size: 1em;

			&:first-child {
				border-right: 1px solid $input-border;
			}

			&:last-child {
				border-left: 1px solid $input-border;
			}
		}

		input {
			border: 0;
			text-align: center;
		}
	}

	.c-spinner--width-1 {
		max-width: 6em;
	}

	.c-spinner--width-2 {
		max-width: 6.5em;
	}

	.c-spinner--width-3 {
		max-width: 7em;
	}

	.c-spinner--width-4 {
		max-width: 7.5em;
	}
</style>