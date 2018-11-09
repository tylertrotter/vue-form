<template>
  <form id="c-form" class="cg">

		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>

		<div class="c-body c-wrapper">
			<c-page-progress />
			<c-page :page="1">
				<c-field source="DatePicker1" label="Element's Date Picker" error="使用农历!" column="1" colspan="6">
					<c-date-picker></c-date-picker>
				</c-field>
				<c-field label="Element's Select" column="7" colspan="18">
					<c-select></c-select>
				</c-field>
				<c-field source="Spinner1" title="Spinner" column="1" colspan="6">
					<c-spinner :min="0" :max="100" :step="10" />
				</c-field>
				<c-field source="Name3" title="Your Name" column="7" colspan="18">
					<c-text type="text" />
				</c-field>
				<c-field source="Toggle1" required="true" label="Toggle" column="1" colspan="24">
					<c-toggle active-text="Most Absolutely" inactive-text="No" />
				</c-field>
				<c-field source="RatingScale2" required="true" label="Rating Scale" column="1" colspan="15">
					<c-rating-scale />
				</c-field>
				<c-field source="RatingScale3" required="true" label="Rating Scale" column="16" colspan="9">
					<c-rating-scale />
				</c-field>
				<c-section source="RepeatingSection1" type="repeating-section" title="Repeating Section Title" helptext="This is a section help" column="1" colspan="12">
					<template slot-scope="item">
						<c-field source="Checkbox1" label="" helptext="check it if it is true." column="1" colspan="12">
							<c-checkbox label="Hello" />
						</c-field>
						<c-field source="Email1" label="Your Email" column="13" colspan="12">
							<c-text type="email" />
						</c-field>
					</template>
				</c-section>
				<c-section source="Section1" type="section" title="Section Title" helptext="This is a section help" column="13" colspan="12">
					<c-field source="Email2" label="Your Email" column="7" colspan="6">
						<c-text type="email" />
					</c-field>
					<c-field source="Email3" required="true" label="Your Email" column="13" colspan="18">
						<c-text type="email" />
					</c-field>
				</c-section>
				<c-field source="Checkbox2" label="Do you agree?" column="1" colspan="6">
					<c-checkbox />
				</c-field>
				<c-field source="Email4" label="Your Email" error="Something is wrong" column="1" colspan="6">
					<c-text type="email" />
				</c-field>
				<c-field source="Name1" label="Your Name" column="1" colspan="12">
					<c-text type="text" />
				</c-field>
				<c-field source="Name2" label="Your Name" column="13" colspan="12">
					<c-text type="text" />
				</c-field>
			</c-page>
			<c-page :page="2">
				<c-field source="Address1" label="Address" helptext="The place you live." error="That's not your address!" column="1" colspan="24">
					<c-address />
				</c-field>
				<c-button-section />
			</c-page>
		</div>
  </form>
</template>

<script>
	import CPageProgress from './components/PageProgress.vue';
	import CPage from './components/Page.vue';
	import CSection from './components/Section.vue';
	import CField from './components/Field.vue';
	import CCheckbox from './components/Checkbox.vue';
	import CText from './components/Text.vue';
	import CAddress from './components/Address.vue';
	import CRatingScale from './components/RatingScale.vue';
	import CToggle from './components/Toggle.vue';
	import CSpinner from './components/Spinner.vue';
	import CButtonSection from './components/ButtonSection.vue';
	import CDatePicker from './components/DatePicker.vue';
	import CSelect from './components/Select.vue';

	export default {
		name: 'c-form',
		components: {
			CPageProgress,
			CPage,
			CSection,
			CField,
			CCheckbox,
			CText,
			CAddress,
			CButtonSection,
			CRatingScale,
			CToggle,
			CSpinner,
			CDatePicker,
			CSelect
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

	.el-input,
	[type="text"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"]{
		width: 100%;
	}

	.el-input{
		@include input;
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