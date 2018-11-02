<template>
  <form id="c-form" class="cg">

		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>

		<div class="c-body c-wrapper">
			<c-page-progress />
			<c-page page=1>
				<c-section type="field" required="true" title="Toggle" column="1" colspan="24">
					<c-toggle yes="Most Absolutely" no="No" />
				</c-section>
				<c-section type="field" required="true" title="Rating Scale" column="1" colspan="15">
					<c-rating-scale />
				</c-section>
				<c-section type="field" required="true" title="Rating Scale" column="16" colspan="9">
					<c-rating-scale />
				</c-section>
				<c-section type="repeating-section" title="Section Title" help="This is a section help" column="1" colspan="12">
					<c-section type="field"  help="check it if it is true." column="1" colspan="12">
						<c-checkbox label="Hello" />
					</c-section>
					<c-section type="field" title="Your Email" column="13" colspan="12">
						<c-text type="email" />
					</c-section>
				</c-section>
				<c-section type="section" title="Section Title" help="This is a section help" column="13" colspan="12">
					<c-section type="field" title="Your Email" column="7" colspan="6">
						<c-text type="email" />
					</c-section>
					<c-section type="field" required="true" title="Your Email" column="13" colspan="18">
						<c-text type="email" />
					</c-section>
				</c-section>
				<c-section type="field" title="Do you agree?" column="1" colspan="6">
					<c-checkbox />
				</c-section>
				<c-section type="field" title="Your Email" error="Something is wrong" column="1" colspan="6">
					<c-text type="email" />
				</c-section>
				<c-section type="field" title="Your Name" column="1" colspan="12">
					<c-text type="text" />
				</c-section>
				<c-section type="field" title="Your Name" column="13" colspan="12">
					<c-text type="text" />
				</c-section>
			</c-page>
			<c-page page=2>
				<c-section type="field" title="Address" help="The place you live." error="That's not your address!" column="1" colspan="24">
					<c-address />
				</c-section>
				<c-button-section />
			</c-page>
		</div>
  </form>
</template>

<script>
	import CPageProgress from './components/PageProgress.vue';
	import CPage from './components/Page.vue';
	import CSection from './components/Section.vue';
	import CCheckbox from './components/Checkbox.vue';
	import CText from './components/Text.vue';
	import CAddress from './components/Address.vue';
	import CRatingScale from './components/RatingScale.vue';
	import CToggle from './components/Toggle.vue';

	import CButtonSection from './components/ButtonSection.vue';

	export default {
		name: 'c-form',
		components: {
			CPageProgress,
			CPage,
			CSection,
			CCheckbox,
			CText,
			CAddress,
			CButtonSection,
			CRatingScale,
			CToggle
		}
	}
</script>


<style lang="scss">
	@import './sass/_theme';
	@import './sass/_field-style';

	[id="c-form"] * {
		box-sizing: border-box;
	}

	[data-width~="500"],
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

	.c-shift {
		// Shift the page container to accomodate c-field gutter padding
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});
	}

	///////////////////////
	// End Structural CSS
	///////////////////////

	[id="c-form"] {
		h1, h2, h3, h4, h5, h6 {
			margin: 0;
		}

		h1:not(:last-child),
		h2:not(:last-child),
		h3:not(:last-child),
		h4:not(:last-child),
		h5:not(:last-child),
		h6:not(:last-child) {
			margin: 0 0 $gutter/3;
		}

		// General theme settings
		[type="text"],
		[type="email"],
		select {
			padding: $input-padding;
		}
	}

	.c-negative-color {
		background-color: $negative;
		fill: $negative;
	}

	.c-negative-reverse {
		background-color: $negative-reverse;
		fill: $negative-reverse;
		color: $negative-reverse;
		stroke: $negative-reverse;
	}


</style>

<style scoped lang="scss">
	@import './sass/theme';
	@import './sass/field-style.scss';

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

	[data-width~="500"] [class*='c-col-']:not(.c-col-24) {
		float: left;
		overflow: hidden;
	}

	// Add padding to the top of every field after the first row.
	// (If the form is 500px or wider, otherwise do it for all but the first field.)
	[data-width~="500"] .c-row-end ~ [class*='c-col-']{
		padding-top: $gutter;
	}

	[id="c-form"]:not([data-width~="500"]) [class*='c-col-']:nth-child(n+2){
		padding-top: $gutter;
	}

</style>