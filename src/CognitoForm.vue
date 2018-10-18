<template>
  <div id="c-form">
		<cognito-field label="Test" column="1" colspan="6">
			<cognito-checkbox />
		</cognito-field>
		<cognito-field label="Your Email" error="true" column="12" colspan="12">
			<cognito-text type="email" />
		</cognito-field>
  </div>
</template>

<script>
	import CognitoField from './components/CognitoField.vue';
	import CognitoCheckbox from './components/CognitoCheckbox.vue';
	import CognitoText from './components/CognitoText.vue';

	export default {
		name: 'c-form',
		components: {
			CognitoField,
			CognitoCheckbox,
			CognitoText
		},
		data () {
			return {
			}
		}
	}
</script>