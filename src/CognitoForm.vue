<template>
  <form ref="form" id="c-form" class="cg">
		<header class="c-header c-wrapper">
			<h1>All Field Types Multipage</h1>
		</header>
		<div class="c-body">
			<c-page-progress :pages="['Signup', 'Table', 'Repeating Section', 'Menu', 'Rating Scale', 'Address', 'Miscellaneous']" />
			<c-page :page="1" :first="true">

				<c-row>
					<c-field label="Textbox" class="c-col-12">
						<c-input />
					</c-field>
					<c-field label="Phone" class="c-col-12">
						<c-phone />
					</c-field>
				</c-row>

				<c-row>
					<c-field label="Your Name" class="c-col-24">
						<c-name :optionalParts="{title: false, middleInitial: false, middleName: false, suffix: false}" />
					</c-field>
				</c-row>

				<c-row>
					<c-field label="Choice Drop Down" class="c-col-12">
						<c-select>sadfasdf</c-select>
					</c-field>

					<c-field label="Choice Radio Buttons" class="c-col-12">
						<c-checkable-group
							type="radio"
							:options="[
								{label: 'First Choice', checked: true},
								{label: 'Second Choice', checked: false},
								{label: 'Third Choice', checked: false}
							]"
							:columns="30"
						/>
					</c-field>
				</c-row>

				<c-row>
					<c-field label="Choice Checkboxes" class="c-col-12">
						<c-checkable-group
							type="checkbox"
							:options="[
								{label: 'First Choice', checked: true},
								{label: 'Second Choice', checked: false},
								{label: 'Third Choice', checked: false}
							]"
							:columns="0"
						/>
					</c-field>
					<c-field label="Password" class="c-col-12">
						<c-input type="password" />
					</c-field>
				</c-row>

				<c-row>
					<c-field label="Sign on the dotted line" class="c-col-12">
						<c-signature />
					</c-field>
					<c-field label="Textarea" class="c-col-12">
						<c-input type="textarea"/>
					</c-field>
				</c-row>

				<c-row>
					<c-field label="Time Picker" class="c-col-8">
						<c-time-picker/>
					</c-field>

				</c-row>
				<c-row>
					<c-field label="Upload something cool" class="c-col-10">
						<c-upload />
					</c-field>
				</c-row>
				<c-row>
					<c-section class="c-col-24">
						<c-row>
							<!-- <c-field source="Name1" readonly="true" value="Jane Doe" label="Your Name" class="c-col-6">
								<c-input type="text" />
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
									:columns="2"
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
									:columns="3"
								/>
							</c-field>
						</c-row>
					</c-section>
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
									<c-input type="text"/>
								</c-field>
								<c-field source="Name1" label="Your Email" class="c-col-8">
									<c-select />
								</c-field>
								<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
									<c-input type="text" />
								</c-field>
							</c-row>
						</c-repeating-section>

						<c-repeating-section>
							<c-row class="c-col-24">
								<c-field source="Name1" readonly="true" value="John Doe" label="Your Name" class="c-col-8">
									<c-input type="text" />
								</c-field>
								<c-field source="Name1" label="Your Email" class="c-col-8">
									<c-select />
								</c-field>
								<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
									<c-input type="text" />
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
									<c-input type="text" />
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
									<c-input type="text" />
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
								<c-input />
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
					<c-field source="RatingScale2" required="true" label="Rating Scale" class="c-col-12">
						<c-rating-scale />
					</c-field>
					<c-field source="RatingScale3" required="true" label="Rating Scale" class="c-col-12">
						<c-rating-scale />
					</c-field>
				</c-row>
			</c-page>
			<c-page :page="6">
				<c-row>
					<!--  source="Address1" -->
					<c-field label="Address" helptext="The place you live." error="That's not your address!" class="c-col-12">
						<c-address />
					</c-field>
				</c-row>
			</c-page>
			<c-page :page="7" :last="true">
				<c-row>
					<c-field source="DatePicker1" label="Element's Date Picker" error="使用农历!" class="c-col-6">
						<c-date-picker />
					</c-field>
					<c-field source="Select1" label="Element's Select" class="c-col-12">
						<c-select />
					</c-field>
					<c-field source="Spinner1" title="Spinner" class="c-col-6">
						<!-- <c-spinner :min="0" :max="100" :step="10" />-->
						<c-input />
					</c-field>
				</c-row>
				<c-row>
					<c-field source="Name3" title="Your Name" class="c-col-18">
						<c-input type="text" />
					</c-field>
					<c-field source="Toggle1" required="true" label="Toggle" class="c-col-6">
						<c-toggle active-text="Most Absolutely" inactive-text="No" />
					</c-field>
				</c-row>
				<c-row>
					<c-section class="c-col-24">
						<c-row>
							<c-field label="Your Email" class="c-col-6">
								<c-input type="email" />
							</c-field>
							<c-field required="true" label="Your Email" class="c-col-18">
								<c-input type="email" />
							</c-field>
						</c-row>
					</c-section>
				</c-row>
				<c-row>
					<c-field source="Checkbox2" label="Do you agree?" class="c-col-6">
						<c-checkbox />
					</c-field>
					<c-field source="Email4" label="Your Email" error="Something is wrong" class="c-col-6">
						<c-input type="email" />
					</c-field>
					<c-field source="Name1" label="Your Name" class="c-col-12">
						<c-input type="text" />
					</c-field>
				</c-row>
				<c-row>
					<c-field source="Name2" label="Your Name" class="c-col-12">
						<c-input type="text" />
					</c-field>
				</c-row>
			</c-page>
		</div>
		<c-save-resume-dialog />
  </form>
</template>

<script>
import CPageProgress from './components/PageProgress.vue';
import CPage from './components/Page.vue';
import CSection from './components/Section.vue';
import CField from './components/Field.vue';
import CInput from './components/Input.vue';
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
import CUpload from './components/Upload.vue';
import CSaveResumeDialog from './components/SaveResumeDialog.vue';
import CTimePicker from './components/TimePicker.vue';
import CName from './components/Name.vue';
import CPhone from './components/Phone.vue';

import {EventBus} from './event-bus.js';

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
		CInput,
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
		CSignature,
		CUpload,
		CSaveResumeDialog,
		CTimePicker,
		CName,
		CPhone
	},
	created() {
		window.addEventListener("resize", this.handleResize);
	},
  mounted() {
		this.handleResize();
		EventBus.$emit('form-mounted', this);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // Add classes for every 100px width
      var width = Math.ceil(this.$el.clientWidth / 25) * 25;
			var widths = [];

      for (var size = width; size >= 200; size = size - 25) {
				if(size <= 650 || size % 100 === 0)
        widths.push(size);
			}

			this.$el.setAttribute('data-width', widths.join(" "));
		}
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

	.c-input--full {
		flex: 0 1 100%;
	}

	.c-input--long {
		flex: 1 1 12em;
	}

	.c-input--medium {
		flex: 1 0 8em;
	}

	.c-input--small {
		flex: 1 1 4em;
	}

	.c-input--tiny {
		flex: 1 1 2.5em;
	}

	// [data-width~="500"]{
		div.c-row {
			display: flex;
			align-items: flex-start;
			flex-wrap: wrap;
			width: calc(100% + #{$gutter}/2);
			margin-left: -$gutter/4;

			& > * {
				margin-left: $gutter/4;
				margin-right: $gutter/4;
			}
		}
	// }

	// [class*="c-col-"]:last-child {
	// 	flex-grow: 0;
	// }

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
	textarea,
	[type="text"],
	[type="tel"],
	[type="password"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"]{
		width: 100%;
		font-family: $typeface;
	}

	.el-textarea {
		display: flex;
	}
	.el-textarea__inner {
		resize: vertical;
	}

	.el-input > input,
	.el-textarea > textarea {
		border: 0;
		background: transparent;
	}

.el-input,
.el-textarea{
		@include input-appearance;
		overflow: hidden;
	}

	.c-section {
		position: relative;
		background: $neutral-bg;
		padding: $gutter/2;
		border-radius: $border-radius;
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
		textarea,
		[type="text"],
		[type="tel"],
		[type="password"],
		[type="date"],
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

	// intra field rows
	.c-field .c-row > * {
		margin-top: $gutter/3;
		margin-bottom: $gutter/3;
	}

	.c-field .c-row {
		margin-top: -$gutter/4;
	}

	.c-right {
		text-align: right;
	}

	// SVGs
	.i-ex path {
		stroke-width: 1.25;
		stroke: $negative-reverse;
	}
	.i-ex circle {
		fill: $negative;
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

	.c-body {
		position: relative;
		margin: $form-margins/2 $form-margins;
		transition: all .5s;
	}

	.cg:not([data-width~="700"]) .c-body {
		margin: $form-margins/2 $unitless-gutter * .2vw;
	}

	.c-wrapper {
		padding: $form-margins/2 $form-margins;
	}

	.cg:not([data-width~="700"]) .c-wrapper {
		padding: $form-margins/2 $unitless-gutter * .2vw;
	}

	.c-wrapper:first-child {
		padding-top: $form-margins;
	}

	.c-wrapper:last-child {
		padding-bottom: $form-margins;
	}
</style>