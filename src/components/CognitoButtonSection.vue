<template>
	<cognito-section type="buttons" column="1" colspan="24">
		<cognito-row>
			<cognito-button class="btn btn-primary">Back</cognito-button>
			<cognito-button type="submit" class="btn btn-primary">Submit</cognito-button>
			<cognito-button class="c-pull btn btn-secondary">Save</cognito-button>
		</cognito-row>
	</cognito-section>
</template>


<script>
	import CognitoButton from './CognitoButton.vue';
	import CognitoSection from './CognitoSection.vue';
	import CognitoRow from './CognitoRow.vue';

	export default {
		name: 'c-button-section',
		components: {
			CognitoButton,
			CognitoSection,
			CognitoRow
		},
    props: [
			'colspan',
		]
  };
</script>

<style scoped lang="scss">
	// Just to get sandbox working
	@import '../sass/_theme';
	@import '../sass/_field-style';
	// End sandbox only code
	.c-buttons {
		padding-top: $gutter;
	}
</style>

