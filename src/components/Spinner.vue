<template>
	<div class="c-spinner c-input" :class="(typeof max) !== 'undefined' ? 'c-spinner--width-' + max.length : ''">
		<c-button @click.native="go('down')" class="btn-secondary" tabindex="-1"><c-minus color="black" /></c-button>
		<!-- <c-text type="text" value="value" /> -->
		<input type="text" :value="value">
		<c-button @click.native="go('up')" class="btn-secondary" tabindex="-1"><c-plus color="black" /></c-button>
	</div>
</template>

<script>
import { getComponentMixins } from "../utils";
import CText from './Text.vue';
import CButton from './Button.vue';
import CPlus from "./icons/Plus.vue";
import CMinus from "./icons/Minus.vue";

export default {
	name: 'c-spinner',
	mixins: getComponentMixins("c-spinner"),
	components: {
		CText,
		CButton,
		CPlus,
		CMinus
	},
	data(){
		return {
			value: 0
		}
	},
	methods: {
		go (direction) {
			var max = +this.$props.max || this.value + 1;
			var min = +this.$props.min || 0;
			var step = +this.$props.step || 1;

			if(direction === 'up'){
				if(this.value < max){
					this.value = +this.value + step;
				}
			}else{
				if(this.value > min){
					this.value = +this.value - step;
				}
			}
    }
	},
	props: [
		'min',
		'max',
		'step'
	]
};
</script>

<style lang="scss">
	.c-spinner {
		display: flex;
		overflow: hidden;

		button {
			width: 50px;

			&:first-child {
				border-right: 1px solid $input-border;
			}

			&:last-child {
				border-left: 1px solid $input-border;
			}
		}

		input {
			background: $input-bg;
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