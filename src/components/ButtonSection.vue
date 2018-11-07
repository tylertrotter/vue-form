<template>
	<div class="c-col-24">
		<c-row>
			<c-button class="btn btn-primary">Back</c-button>
			<c-button type="submit" class="btn btn-primary">Submit</c-button>
			<c-button class="c-pull btn btn-secondary">Save</c-button>
		</c-row>
	</div>
</template>


<script>
import CButton from "./Button.vue";
import CSection from "./Section.vue";
import CRow from "./Row.vue";

export default {
  name: "c-button-section",
  components: {
    CButton,
    CSection,
    CRow
  },
  props: ["colspan"]
};
</script>

<style scoped lang="scss">
// Just to get sandbox working
@import "../sass/_theme";
@import "../sass/_field-style";
// End sandbox only code
.c-buttons {
  padding-top: $gutter;
}
</style>
