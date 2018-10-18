<template>
  <form id="c-form">
		<div class="c-page">
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
		</div>
  </form>
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
		}
	}
</script>

<style scoped lang="scss">
	$form-margins: 40px;
	$gutter: 32px;

	[id="c-form"] {
		max-width: 800px;
		margin: 0 auto;
		padding: $form-margins;
		background: white;
	}

	.c-page {
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});

		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}

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