<template>
	<component class="c-row" :is="containerIsTable ? 'tr' : 'div'">
		<td v-if="containerIsTable"><c-button class="c-button--remove-row"><i-ex /></c-button></td>
		<slot></slot>
	</component>
</template>

<script>
	import CButton from "./Button.vue";
	import CRepeatingSection from "./RepeatingSection.vue";
	import IEx from "./../assets/ex.svg";

	export default {
		name: "c-field-row",
		components: { CButton, IEx, CRepeatingSection },
		data(){
			return {
				containerIsTable: this.$parent.$parent.$parent.currentType === "c-repeating-table"
			}
		}
  };
</script>
