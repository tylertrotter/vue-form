<template>
  <form id="c-form" class="cg">
		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>
		<div class="c-body c-wrapper">
			<c-page-progress :pages="['Signup']" />
			<c-page :page="1">

				<c-row>
					<c-field source="Name3" label="Your Name" class="c-col-8">
						<c-text type="text" />
					</c-field>
					<c-field source="Email4" label="Your Email" class="c-col-8">
						<c-text type="email" />
					</c-field>
					<c-field source="Checkbox2" label="" class="c-col-8">
						<c-checkbox label="Do you agree?" />
					</c-field>
				</c-row>

				<c-section type="table">
					<c-row>
						<c-field source="Name3" label="Your Name" class="c-col-8">
							<c-text type="text" />
						</c-field>
						<c-field source="Email4" label="Your Email" class="c-col-8">
							<c-text type="email" />
						</c-field>
						<c-field source="Checkbox2" label="" class="c-col-8">
							<c-checkbox label="Do you agree?" />
						</c-field>
					</c-row>

					<c-row>
						<c-field source="Name3" label="Your Name" class="c-col-8">
							<c-text type="text" />
						</c-field>
						<c-field source="Email4" label="Your Email" class="c-col-8">
							<c-text type="email" />
						</c-field>
						<c-field source="Checkbox2" label="" class="c-col-8">
							<c-checkbox label="Do you agree?" />
						</c-field>
					</c-row>
				</c-section>

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
import CTable from './components/Table.vue';
import CRow from './components/Row.vue';

export default {
	name: 'c-form',
	props: ['eid'],
	data: function() {
		return Cognito.Forms.FormEntry.meta.get(this.eid);
	},
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
		CSelect,
		CTable,
		CRow
	}
}
</script>

<style lang="scss">
	@import './sass/_theme';
	@import './sass/_field-style';

	@function columns($columns) {
		@return $columns / 24 * 100%;
	}

	[id="c-form"] * {
		box-sizing: border-box;
	}

	[data-width~="500"],
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
		width: columns(12);
	}

	.c-col-9 {
		width: 37.5%;
	}

	.c-col-8 {
		width: columns(8);
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

</style>