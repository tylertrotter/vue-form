<template>
  <form id="c-form" class="cg">
		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>
		<div class="c-body c-wrapper">
			<c-page-progress :pages="['Signup']" />
			<c-page :page="1">

				<c-section>
					<c-row>
						<c-field source="Name1" label="Your Name" class="c-col-8">
							<c-text type="text" />
						</c-field>
						<c-field source="Name1" label="Your Email" class="c-col-8">
							<c-select />
						</c-field>
						<c-field source="Name1" label="" class="c-col-8">
							<c-checkbox label="Do you agree?" />
						</c-field>
					</c-row>
				</c-section>

				<c-repeating-data> <!-- c-repeating-table / .c-region -->
					<c-repeating-section>  <!-- tbody / .c-section--repeating -->
						<c-row> <!-- tr / .c-row -->
							<c-field source="Name1" label="Your Name" class="c-col-8">
								<c-text type="text" />
							</c-field>
							<c-field source="Name1" label="Your Email" class="c-col-8">
								<c-select />
							</c-field>
							<c-field source="Name1" label="" class="c-col-8">
								<c-checkbox label="Do you agree?" />
							</c-field>
						</c-row>
					</c-repeating-section>

					<c-repeating-section>
						<c-row>
							<c-field source="Name1" label="Your Name" class="c-col-8">
								<c-text type="text" />
							</c-field>
							<c-field source="Name1" label="Your Email" class="c-col-8">
								<c-select />
							</c-field>
							<c-field source="Name1" label="" class="c-col-8">
								<c-checkbox label="Do you agree?" />
							</c-field>
						</c-row>
					</c-repeating-section>
				</c-repeating-data>


				<c-repeating-data :is-table="true">
					<template slot="thead">
						<th>Your Name</th>
						<th>Your Email</th>
						<th>Your Phone Number</th>
					</template>

					<c-repeating-section>
						<c-row>
							<c-field source="Name1" label="Your Name" class="c-col-8">
								<c-text type="text" />
							</c-field>
							<c-field source="Name1" label="Your Email" class="c-col-8">
								<c-text type="text" />
							</c-field>
							<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
								<c-text type="text" />
							</c-field>
						</c-row>
					</c-repeating-section>

				</c-repeating-data>

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
import CRow from './components/Row.vue';
import CRepeatingData from './components/RepeatingData.vue';
import CRepeatingSectionGroup from './components/RepeatingSectionGroup.vue';
import CRepeatingSection from './components/RepeatingSection.vue';

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
		CRow,
		CRepeatingData,
		CRepeatingSectionGroup,
		CRepeatingSection
	}
}
</script>

<style lang="scss">
	@import './sass/_theme';
	@import './sass/_field-style';
	@import './sass/common/_grid';

	[id="c-form"] * {
		box-sizing: border-box;
	}

	div:not(:last-child) > .c-field,
	.cg:not([data-width~="500"]) .c-field  {
		margin-bottom: $gutter/2;
	}

	.c-region:not(:last-child) {
			margin-bottom: $gutter;
	}

	[data-width~="500"] {
		div.c-row {
			display: flex;
			width: calc(100% + #{$gutter}/2);
			margin-left: -$gutter/4;

			& > * {
				margin-left: $gutter/4;
				margin-right: $gutter/4;
			}

			& + .c-row > * {
				margin-top: $gutter/2;
			}
		}
	}

	.c-shift {
		// Shift the page container to accomodate c-field gutter padding
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});
	}
	.c-unshift {
		margin-left: $gutter/2;
		margin-right: $gutter/2;
	}

	.el-input,
	[type="text"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"]{
		width: 100%;
	}

	.el-input > input {
		border: 0;
	}

	div > .el-input{
		@include input;
		overflow: hidden;
	}

	td input {
		border: 0;
	}

	.c-section {
		position: relative;
		background: $neutral-bg;
		padding-top: $gutter/2;
		padding-bottom: $gutter/2;
	}

	.c-section:nth-child(odd){
		background: $neutral-bg-alt;
	}


	///////////////////////
	// End Structural CSS
	///////////////////////

	[id="c-form"] {
		h1, h2, h3, h4, h5, h6 {
			margin-top: 0;
			margin-bottom: 0;
		}

		h1:not(:last-child),
		h2:not(:last-child),
		h3:not(:last-child),
		h4:not(:last-child),
		h5:not(:last-child),
		h6:not(:last-child) {
			margin-bottom: $gutter/3;
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

		// Instead of using .c-field, this selector will only apply to fields that have a colspan set.
	// Allowing us to use the field component outside of 24-column grid context.
	div[class*='c-col-'],
	.c-container,
	.c-padding {
		padding: 0 $gutter/2;
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

</style>