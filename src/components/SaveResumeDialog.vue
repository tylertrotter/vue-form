<template>
	<c-dialog ref="saveResumeDialog" title="Save &amp; Resume">
		<c-row class="c-col-24">
			<p>Copy or email the link below and return to your form to complete your submission.</p>
		</c-row>
		<c-row>
			<c-field label="Copy your form link" class="c-col-24">
				<c-input />
			</c-field>
		</c-row>
		<c-row>
			<c-field label="Email me my link" class="c-col-19">
				<c-input />
			</c-field>
			<c-field class="c-col-5">
				<c-button class="c-button--save c-button--primary">Send</c-button>
			</c-field>
		</c-row>
	</c-dialog>
</template>

<script>
	import CDialog from "./Dialog.vue";
	import CRow from "./Row.vue";
	import CField from "./Field.vue";
	import CInput from "./Input.vue";
	import CButton from "./Button.vue";

	export default {
		name: "c-save-resume-dialog",
		components: { CDialog, CRow, CButton, CField, CInput },
		props: ["title"]
	}
</script>

<style scoped>
	.c-button--save {
		width: 100%;
	}
	.c-row:last-child {
		align-items: flex-end;
	}
</style>