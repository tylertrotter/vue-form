<template>
	<div class="c-region">
		<div class="c-section">
			<h2 class="c-section--header">{{heading}}</h2>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import CRow from "./Row.vue";

	export default {
		name: "c-section",
		props: ["heading"],
		components: { CRow },
		data(){
			return {
				containerIsTable: this.$parent.$parent.currentType === "c-repeating-table"
			}
		}
	}
</script>

<style lang="scss">
	.c-section {
		position: relative;
		@include bg-color($color);
		padding: $gutter/2;
		border-radius: $border-radius;
	}

	.c-section--header {
		margin-left: $input-spacing;
	}

	.c-section:nth-child(even){
		@include bg-color-alt($color);
	}

	.c-section + .c-section {
		margin-top: $input-border-width;
	}
</style>

