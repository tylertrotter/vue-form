<template>
  <form id="c-form">

		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>

		<div class="c-body c-wrapper">
			<cognito-page-progress />
			<cognito-page page=1>
				<cognito-field label="Test2" help="check it if it is true." column="1" colspan="6">
					<cognito-checkbox />
				</cognito-field>
				<cognito-field label="Your Email" column="7" colspan="6">
					<cognito-text type="email" />
				</cognito-field>
				<cognito-field label="Your Email" column="13" colspan="6">
					<cognito-text type="email" />
				</cognito-field>
				<cognito-field label="Do you agree?" column="19" colspan="6">
					<cognito-checkbox />
				</cognito-field>
				<cognito-field label="Your Email" error="Something is wrong" column="1" colspan="6">
					<cognito-text type="email" />
				</cognito-field>
				<cognito-field label="Your Name" column="1" colspan="12">
					<cognito-text type="text" />
				</cognito-field>
				<cognito-field label="Your Name" column="13" colspan="12">
					<cognito-text type="text" />
				</cognito-field>
			</cognito-page>
			<cognito-page page=2>
				<cognito-field label="Test2" help="check it if it is true." column="1" colspan="6">
					<cognito-checkbox />
				</cognito-field>
			</cognito-page>
		</div>
  </form>
</template>

<script>
	import CognitoPageProgress from './components/CognitoPageProgress.vue';
	import CognitoPage from './components/CognitoPage.vue';
	import CognitoField from './components/CognitoField.vue';
	import CognitoCheckbox from './components/CognitoCheckbox.vue';
	import CognitoText from './components/CognitoText.vue';

	export default {
		name: 'c-form',
		components: {
			CognitoPageProgress,
			CognitoPage,
			CognitoField,
			CognitoCheckbox,
			CognitoText
		}
	}
</script>

<style scoped lang="scss">
	$form-margins: 40px;
	$gutter: 32px;

	[id="c-form"] {
		background: white;
		max-width: 800px;
		margin: 0 auto;
		overflow: hidden;
	}

	.c-wrapper {
		padding: $form-margins/2 $form-margins;
	}

	.c-wrapper:first-child {
		padding-top: $form-margins;
	}

	.c-wrapper:last-child {
		padding-bottom: $form-margins;
	}

	header {
		background: pink;
	}

	// Instead of using .c-field, this selector will only apply to fields that have a colspan set.
	// Allowing us to use the filed component outside of 24-column grid context.
	[class*='c-span-'] {
		padding: 0 $gutter/2;
	}

	.c-width-500 .c-field {
		float: left;
	}

	// Add padding to the top of every field after the first row.
	// (If the form is 500px or wider, otherwise do it for all but the first field.)
	.c-width-500 .c-row-end ~ .c-field{
		padding-top: $gutter;
	}

	[id="c-form"]:not(.c-width-500) .c-field:nth-child(n+2){
		padding-top: $gutter;
	}

	.c-width-500 {
		.c-row-start {
			clear: left;
		}

		.c-span-21 {
			width: 87.5%;
		}

		.c-span-18 {
			width: 75%;
		}

		.c-span-15 {
			width: 62.5%;
		}

		.c-span-12 {
			width: 50%;
		}

		.c-span-9 {
			width: 37.5%;
		}

		.c-span-6 {
			width: 25%;
		}

		.c-span-3 {
			width: 12.5%;
		}
	}

</style>