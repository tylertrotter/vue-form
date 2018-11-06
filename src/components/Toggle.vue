<template>
	<div class="c-toggle">
		<label>
			<input type="checkbox" v-model="value" />
			<div class="c-toggle--container" aria-hidden="true"><span>{{yes}}<span class="hidden">{{no}}</span></span><span class="switch">&nbsp;</span><span>{{no}}<span class="hidden">{{yes}}</span></span></div>
		</label>
	</div>
</template>

<script>
import { getComponentMixins } from "../utils";
export default {
	name: 'c-toggle',
	mixins: getComponentMixins("c-toggle"),
	props: {
		'value': Boolean,
		'yes': {
			type: String,
			default: "Yes",
		},
		'no': {
			type: String,
			default: "No",
		},
	}
};
</script>

<style lang="scss">
	.c-toggle {
		display: inline-block;
		overflow: hidden;

		border: 1px solid #ccc;

		input {
			@include hidden;
		}
		label {
			display: inline-block;
		}
	}

	.c-toggle--container {
		position: relative;
		left: calc(-50% + 3px);
		display: inline-block;
    width: 150%;
		background: rgba($neutral, .1);
		transition: all .5s;

		span {
			display: inline-block;
			width: calc(33.3333% - 3px);
			padding: 7px;
			text-align: center;
		}

		.switch {
			background: white;
			margin: 3px;
			box-shadow: 2px 2px 1px rgba($neutral, .1);
		}
	}

	:focus + .c-toggle--container .switch {
		outline: 2px solid $highlight;
	}

	:checked + .c-toggle--container {
		left: 0;
		background: $positive;
		color: $positive-reverse;
		transition: all .5s;
	}

	.c-toggle .hidden {
		height: 1px;
		overflow: hidden;
		display: block;
		padding: 0;
		margin-top: -5px;
	}

</style>