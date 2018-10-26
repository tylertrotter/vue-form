<template>
	<div>
		<cognito-row>
			<cognito-text type="text" placeholder="Street Address" />
		</cognito-row>
		<cognito-row>
			<cognito-text type="text" placeholder="Line 2" />
		</cognito-row>
		<cognito-row >
			<cognito-text type="text" placeholder="city" class="c-12" />
			<cognito-text type="text" placeholder="state" class="c-9" />
			<cognito-text type="text" placeholder="ZIP" class="c-3" />
		</cognito-row>
	</div>
</template>

<script>
	import CognitoRow from './CognitoRow.vue';
	import CognitoText from './CognitoText.vue';

	export default {
		name: 'c-address',
		components: {
			CognitoText,
			CognitoRow
		},
    props: [
			'colspan',
		]
  };
</script>