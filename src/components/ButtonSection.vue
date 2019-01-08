<template>
	<div class="c-button-section">
		<!-- These goto() page numbers are hardcoded right now. Not really sure where to save current page. -->
		<c-button v-if="!firstPage" @click.native="goto(1)" class="c-button--secondary">Back</c-button>
		<c-button v-if="!lastPage" @click.native="goto(2)" class="c-button--secondary">Next</c-button>
		<c-button type="submit" class="c-button--primary">Submit</c-button>

		<c-button @click.native="openSave" class="c-button--save c-button--tertiary">Save</c-button>
	</div>
</template>


<script>
	import {goToPage} from "./../go-to-page";
	import CButton from "./Button.vue";
	import CSection from "./Section.vue";
	import CRow from "./Row.vue";

	import {EventBus} from "./../event-bus.js";

	export default {
		name: "c-button-section",
		components: {
			CButton,
			CSection,
			CRow
		},
		mixins: [goToPage],
		data() {
			return {
				firstPage: this.$parent.$attrs.first,
				lastPage: this.$parent.$attrs.last
			}
		},
		methods: {
			openSave(){
				EventBus.$emit("open-modal", "save")
			}
		}
	};
</script>

<style lang="scss">
	.c-button-section {
		display: flex;
		justify-content: flex-start;
		padding-top: $gutter;
		padding-right: $gutter/3;
		padding-left: $gutter/3;

		button:not(:last-child) {
			margin-right: $gutter/2;
		}
	}

	.c-button--save {
		margin-left: auto;
	}
</style>
