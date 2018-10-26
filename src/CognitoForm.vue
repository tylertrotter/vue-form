<template>
  <form id="c-form">

		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>

		<div class="c-body c-wrapper">
			<cognito-page-progress />
			<cognito-page page=1>
				<cognito-section type="section" title="Section Title" help="This is a section help" column="1" colspan="12">
					<cognito-section type="field" title="Test2" help="check it if it is true." column="1" colspan="12">
						<cognito-checkbox />
					</cognito-section>
					<cognito-section type="field" title="Your Email" column="13" colspan="12">
						<cognito-text type="email" />
					</cognito-section>
				</cognito-section>
				<cognito-section type="section" title="Section Title" help="This is a section help" column="13" colspan="12">
					<cognito-section type="field" title="Your Email" column="7" colspan="6">
						<cognito-text type="email" />
					</cognito-section>
					<cognito-section type="field" title="Your Email" column="13" colspan="6">
						<cognito-text type="email" />
					</cognito-section>
				</cognito-section>
				<cognito-section type="field" title="Do you agree?" column="1" colspan="6">
					<cognito-checkbox />
				</cognito-section>
				<cognito-section type="field" title="Your Email" error="Something is wrong" column="1" colspan="6">
					<cognito-text type="email" />
				</cognito-section>
				<cognito-section type="field" title="Your Name" column="1" colspan="12">
					<cognito-text type="text" />
				</cognito-section>
				<cognito-section type="field" title="Your Name" column="13" colspan="12">
					<cognito-text type="text" />
				</cognito-section>
			</cognito-page>
			<cognito-page page=2>
				<cognito-section type="field" title="Address" help="The place you live." error="That's not your address!" column="1" colspan="24">
					<cognito-address />
				</cognito-section>
				<cognito-button-section />
			</cognito-page>
		</div>
  </form>
</template>

<script>
	import CognitoPageProgress from './components/CognitoPageProgress.vue';
	import CognitoPage from './components/CognitoPage.vue';
	import CognitoSection from './components/CognitoSection.vue';
	import CognitoCheckbox from './components/CognitoCheckbox.vue';
	import CognitoText from './components/CognitoText.vue';
	import CognitoAddress from './components/CognitoAddress.vue';

	import CognitoButtonSection from './components/CognitoButtonSection.vue';

	export default {
		name: 'c-form',
		components: {
			CognitoPageProgress,
			CognitoPage,
			CognitoSection,
			CognitoCheckbox,
			CognitoText,
			CognitoAddress,
			CognitoButtonSection
		}
	}
</script>


<style lang="scss">
	[id="c-form"] * {
		box-sizing: border-box;
	}

	.c-500,
	.c-row {
		.c-row-start {
			clear: left;
		}

		.c-col-21 {
			width: 87.5%;
		}

		.c-col-18 {
			width: 75%;
		}

		.c-col-15 {
			width: 62.5%;
		}

		.c-col-12 {
			width: 50%;
		}

		.c-col-9 {
			width: 37.5%;
		}

		.c-col-6 {
			width: 25%;
		}

		.c-col-3 {
			width: 12.5%;
		}
	}

	.c-cf:after {
		content: "";
		display: table;
		clear: both;
	}

	[type="text"],
	[type="email"],
	select {
		padding: $input-padding;
	}

</style>

<style scoped lang="scss">
	[id="c-form"] {
		background: $form-bg;
		max-width: $form-width;
		margin: 0 auto;
		overflow: hidden;
		font-family: $typeface;
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

	// Instead of using .c-field, this selector will only apply to fields that have a colspan set.
	// Allowing us to use the field component outside of 24-column grid context.
	[class*='c-col-'] {
		padding: 0 $gutter/2;
	}

	.c-500 [class*='c-col-']:not(.c-col-24) {
		float: left;
	}

	// Add padding to the top of every field after the first row.
	// (If the form is 500px or wider, otherwise do it for all but the first field.)
	.c-500 .c-row-end ~ .c-field{
		padding-top: $gutter;
	}

	[id="c-form"]:not(.c-500) .c-field:nth-child(n+2){
		padding-top: $gutter;
	}

</style>