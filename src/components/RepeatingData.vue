<template>
	<keep-alive>
		<component :is="currentType" class="c-repeating-data" :class="{'c-readonly--section': readonly}">
			<template v-if="currentType === 'c-repeating-table'" slot="thead">
				<slot name="thead"></slot>
			</template>
			<slot></slot>
			<c-button v-if="currentType === 'div'" class="c-button--secondary c-repeating-data--add-button">
				<!--#if !chameleon-->
				<i-plus />
				<!--#endif-->
				Add
			</c-button>
		</component>
	</keep-alive>
</template>

<script>

	import CRepeatingTable from "./RepeatingTable.vue";
	import CButton from "./Button.vue";
	import IPlus from "./../assets/plus.svg";

	export default {
		name: "c-repeating-data",
		props: {
			isTable: Boolean,
			heading: String,
			readonly: Boolean
		},
		components: {
			CRepeatingTable,
			CButton,
			IPlus
		},
		data() {
			return {
				currentType: this.$props.isTable ? "c-repeating-table" : "div"
			}
		}
	}
</script>

<style lang="scss">
	.c-repeating-data--add-button {
		margin-top: $gutter/2;
	}
</style>
