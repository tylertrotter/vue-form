<template>
  <form ref="form" id="c-form" class="cg">
		<header class="c-header c-wrapper">
			<h1>Form Title</h1>
		</header>
		<div class="c-body">
			<c-page-progress :pages="['Signup', 'Table', 'Repeating Section', 'Menu', 'Rating Scale', 'Address', 'Miscellaneous']" />
			<c-page :page="1" :first="true">
				<c-row>
					<c-section class="c-col-24">
						<c-row>
							<!-- <c-field source="Name1" readonly="true" value="Jane Doe" label="Your Name" class="c-col-6">
								<c-text type="text" />
							</c-field> -->
							<c-field label="Do you agree?" class="c-col-4">
								<c-checkable-group
									type="checkbox"
									:options="[
										{label: 'Yes', checked: false}
									]"
								/>
							</c-field>
							<c-field source="Name1" error="Is this message in the right place?" label="Checkbox Group" class="c-col-10">
								<c-checkable-group
									type="checkbox"
									:options="[
										{label: 'Shanghai', checked: false},
										{label: 'Bejing', checked: true},
										{label: 'Nanjing', checked: true},
										{label: 'Guangzhou', checked: true}
									]"
									columns="2"
								/>
							</c-field>
							<c-field label="Radio Group" class="c-col-12">
								<c-checkable-group
									type="radio"
									:options="[
										{label: 'Shanghai', checked: false},
										{label: 'Bejing', checked: false},
										{label: 'Nanjing', checked: false},
										{label: 'Guangzhou', checked: true},
										{label: 'Wuxi', checked: false},
										{label: 'Hong Kong', checked: true},
										{label: 'Xi\'an', checked: false},
										{label: 'Shantou', checked: true}
									]"
									columns="3"
								/>
							</c-field>
						</c-row>
					</c-section>
				</c-row>
				<c-row>
					<c-field label="Sign on the dotted line" class="c-col-24">
						<c-signature />
					</c-field>
				</c-row>
			</c-page>
			<c-page :page="2">
				<c-row class="c-col-24">
					<c-repeating-data :is-table="true">

						<template slot="thead">
							<th>Your Name</th>
							<th>Your Email</th>
							<th>Your Phone Number</th>
						</template>

						<c-repeating-section>
							<c-row class="c-col-24">
								<c-field source="Name1" readonly="true" label="Your Name" class="c-col-8">
									<c-text type="text"/>
								</c-field>
								<c-field source="Name1" label="Your Email" class="c-col-8">
									<c-select />
								</c-field>
								<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
									<c-text type="text" />
								</c-field>
							</c-row>
						</c-repeating-section>

						<c-repeating-section>
							<c-row class="c-col-24">
								<c-field source="Name1" readonly="true" value="John Doe" label="Your Name" class="c-col-8">
									<c-text type="text" />
								</c-field>
								<c-field source="Name1" label="Your Email" class="c-col-8">
									<c-select />
								</c-field>
								<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
									<c-text type="text" />
								</c-field>
							</c-row>
						</c-repeating-section>

					</c-repeating-data >
				</c-row>
			</c-page>
			<c-page :page="3">
				<c-row class="c-col-24">
					<c-repeating-data>
						<c-repeating-section>
							<c-row class="c-col-24">
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
							<c-row class="c-col-24">
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
				</c-row>
			</c-page>
			<c-page :page="4">
				<c-row>
					<c-section source="Section2" title="Menu" helptext="Place your order" class="c-col-12">
						<c-row>
							<!--  source="OrderDate"  -->
							<c-field source="OrderDate" label="" class="c-col-4">
								<c-text />
							</c-field>
							<!-- source="Vegetarian" -->
							<c-field source="Vegetarian" label="" class="c-col-4">
								<c-checkbox/>
							</c-field>
							<!-- source="GlutenFree" -->
							<c-field source="GlutenFree" class="c-col-4">
								<c-checkbox />
							</c-field>
							<!-- source="DairyFree" -->
							<c-field source="DairyFree" label="" class="c-col-4">
								<c-checkbox />
							</c-field>
						</c-row>
						<c-row>
							<!-- source="SideDish" -->
							<c-field source="SideDish" label="Side" class="c-col-12">
								<c-select>
									asdf
								</c-select>
							</c-field>
						</c-row>
					</c-section>
				</c-row>
			</c-page>
			<c-page :page="5">
				<c-row>
					<c-field source="RatingScale2" required="true" label="Rating Scale" class="c-col-15">
						<c-rating-scale />
					</c-field>
					<c-field source="RatingScale3" required="true" label="Rating Scale" class="c-col-9">
						<c-rating-scale />
					</c-field>
				</c-row>
			</c-page>
			<c-page :page="6">
				<c-row>
					<!--  source="Address1" -->
					<c-field label="Address" helptext="The place you live." error="That's not your address!" class="c-col-24">
						<c-address />
					</c-field>
				</c-row>
			</c-page>
			<c-page :page="7" :last="true">
				<c-row>
					<c-field source="DatePicker1" label="Element's Date Picker" error="使用农历!" class="c-col-6">
						<c-date-picker />
					</c-field>
					<c-field source="Select1" label="Element's Select" class="c-col-18">
						<c-select />
					</c-field>
					<c-field source="Spinner1" title="Spinner" class="c-col-6">
						<c-spinner :min="0" :max="100" :step="10" />
					</c-field>
				</c-row>
				<c-row>
					<c-field source="Name3" title="Your Name" class="c-col-18">
						<c-text type="text" />
					</c-field>
					<c-field source="Toggle1" required="true" label="Toggle" class="c-col-24">
						<c-toggle active-text="Most Absolutely" inactive-text="No" />
					</c-field>
				</c-row>
				<c-row>
					<c-section class="c-col-24">
						<c-row>
							<c-field label="Your Email" class="c-col-6">
								<c-text type="email" />
							</c-field>
							<c-field required="true" label="Your Email" class="c-col-18">
								<c-text type="email" />
							</c-field>
						</c-row>
					</c-section>
				</c-row>
				<c-row>
					<c-field source="Checkbox2" label="Do you agree?" class="c-col-6">
						<c-checkbox />
					</c-field>
					<c-field source="Email4" label="Your Email" error="Something is wrong" class="c-col-6">
						<c-text type="email" />
					</c-field>
					<c-field source="Name1" label="Your Name" class="c-col-12">
						<c-text type="text" />
					</c-field>
				</c-row>
				<c-row>
					<c-field source="Name2" label="Your Name" class="c-col-12">
						<c-text type="text" />
					</c-field>
				</c-row>
			</c-page>
		</div>
  </form>
</template>

<script>
import CPageProgress from './components/PageProgress.vue';
import CPage from './components/Page.vue';
import CSection from './components/Section.vue';
import CField from './components/Field.vue';
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
import CRepeatingSection from './components/RepeatingSection.vue';
import CCheckableGroup from './components/CheckableGroup.vue';
import CSignature from './components/Signature.vue';

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
		CRepeatingSection,
		CCheckableGroup,
		CSignature
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

	.c-region:not(:last-child) {
			margin-bottom: $gutter;
	}

	[data-width~="500"] {
		div.c-row {
			display: flex;
			align-items: flex-start;
			width: calc(100% + #{$gutter}/2);
			margin-left: -$gutter/4;

			& > * {
				margin-left: $gutter/4;
				margin-right: $gutter/4;
			}
		}
	}

	.c-outdent {
		// Shift the page container to accomodate c-field gutter padding
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});
	}
	.c-indent {
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
		background: transparent;
	}

.el-input{
		@include input-appearance;
		overflow: hidden;
	}

	.c-section {
		position: relative;
		background: $neutral-bg;
		padding: $gutter/2;
	}

	.c-section:nth-child(even){
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
		select,
		.c-readonly {
			@include input-spacing;
		}

		.c-readonly {
			border-color: transparent;
			@include input-border;
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
		padding: $gutter/2;
	}

	.c-field .c-row + .c-row {
		margin-top: $gutter/2;
	}

	div.c-row > * {
		width: 100%;
	}

	.c-body {
		position: relative;
		margin: $form-margins/2 $form-margins;
		transition: all .5s;
	}

	.c-right {
		text-align: right;
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