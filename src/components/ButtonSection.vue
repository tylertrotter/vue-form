<template>
	<c-row>
		<div class="c-col-12">
			<c-button v-if="!firstPage" class="c-button--secondary">Back</c-button>
			<c-button v-if="!lastPage" class="c-button--secondary">Next</c-button>
			<c-button type="submit" class="c-button--primary">Submit</c-button>
		</div>
		<div class="c-col-12 c-right">
			<c-button @click.native="openSave" class="c-button--tertiary">Save</c-button>
		</div>
	</c-row>
</template>


<script>
import CButton from "./Button.vue";
import CSection from "./Section.vue";
import CRow from "./Row.vue";

import {EventBus} from './../event-bus.js';

export default {
  name: "c-button-section",
  components: {
    CButton,
    CSection,
    CRow
	},
	data() {
		return {
			firstPage: this.$parent.$attrs.first,
			lastPage: this.$parent.$attrs.last
		}
	},
	methods: {
		openSave(){
			EventBus.$emit('open-modal', 'save')
		}
	}
};
</script>

<style scoped lang="scss">

</style>
