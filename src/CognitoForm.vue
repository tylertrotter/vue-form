<template>
	<!-- Question: Where to store Chameleon attribute? I would like to not output some code if true, so does webpack config make sense? -->
  <form ref="form" id="c-form" class="cg">
		<header class="c-header c-wrapper">
			<div class="c-row">
				<h1>All Field Types Multipage</h1>
			</div>
		</header>
		<div class="c-body">
			<c-page-progress :pages="['Page One', 'Page Number 2', 'Page Three']" :show-titles="true" display="bar" />

			<c-page :page="1" :first="true">

				<c-row>
					<c-field source="Text" class="c-col-12">
						<c-input :readonly="false" />
					</c-field>
					<c-field source="Phone" class="c-col-12">
						<c-phone :readonly="false" />
					</c-field>
				</c-row>

				<c-row>
					<!-- Question: See code pertaining to fieldsets in field component. -->
					<c-field source="Name1" class="c-col-24">
						<c-name :name="{
							title: 'Lord',
							first: 'Sam',
							middleInitial: false,
							middleName: false,
							last: 'Byron',
							suffix: 'Jr.'
						}"
						:readonly="false"
					/>
					</c-field>
				</c-row>

				<c-row>
					<c-field source="ChoiceSelect" class="c-col-12">
						<c-select :readonly="false" />
					</c-field>

					<c-field source="ChoiceRadio" class="c-col-12">
						<c-checkable-group :columns="3" class="c-fancy" :readonly="false">
							<c-radio-group pre-checked="Option C">
								<c-radio label="Option A" />
								<c-radio label="Option B" />
								<c-radio label="Option C" />
							</c-radio-group>
						</c-checkable-group>
					</c-field>
				</c-row>

				<c-row>
					<c-field source="ChoiceCheckboxes" class="c-col-12">
						<c-checkable-group :columns="3" class="c-fancy" :readonly="false">
							<c-checkbox-group :pre-checked="['Option A', 'Option C']">
								<c-checkbox label="Option A" />
								<c-checkbox label="Option B" />
								<c-checkbox label="Option C" />
							</c-checkbox-group>
						</c-checkable-group>
					</c-field>

					<c-field source="Password" class="c-col-12">
						<c-input type="password" :readonly="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field source="Address" class="c-col-24">
						<c-address
							:address="{
								line1: '76 Hunters Pond Dr.',
								line2: '',
								city: 'Columbia',
								state: 'SC',
								postal: '29229'
							}"
							:readonly="false"
						/>
					</c-field>
				</c-row>

				<!-- yes no radio/check -->

				<c-row>
					<c-field source="Toggle1" class="c-col-12">
						<c-toggle active-text="Yes" inactive-text="No" />
					</c-field>

					<c-field source="DatePicker1" class="c-col-12">
						<!-- Question: Does it make more sense to have native as a completely different component rather than a prop so that native inputs don't have to load bloat?  -->
						<c-date-picker :native="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field source="Time" class="c-col-12">
						<c-time-picker/>
					</c-field>
					<c-field source="Email4" class="c-col-12">
						<c-input type="email" />
					</c-field>
				</c-row>

				<!-- <c-row>
					<c-field label="Number"  class="c-col-12">
						<c-number />
					</c-field>
					<c-field label="Website"  class="c-col-12">
						<c-url />
					</c-field>
				</c-row> -->

				<c-row>
					<c-field  source="ChoiceRadio" :required="true" class="c-col-24">
						<!-- Question: Can somebody tell me why this doesn't work? I can't figure it out. -->
						<c-rating-scale
							:questions="[
								'How happy are you with Vue.js',
								'How do you like SFCs?',
								'How you liking this rating scale component?'
							]"
							:answers="[
								'Very Unsatisfied',
								'Unsatisfied',
								'Neutral',
								'Satisfied',
								'Very Satisfied'
      				]"
						/>
					</c-field>
				</c-row>

				<!-- Price and Content -->

				<c-row>
					<c-section source="Section1" heading="Section" class="c-col-24">
						<c-row>
							<c-field source="SectionText" class="c-col-12">
								<c-input type="text" />
							</c-field>
							<c-field source="SectionText" class="c-col-12">
								<c-input type="text" />
							</c-field>
						</c-row>
					</c-section>
				</c-row>

				<c-row>
					<c-field class="c-col-24">
						<c-repeating-data heading="Repeating Section">

							<c-repeating-section v-for="i in 1" :key="i" :index="i">
								<c-row>
									<c-field source="Name1" label="Text" class="c-col-8">
										<c-input type="text" />
									</c-field>
									<c-field source="Name1" label="Your Email" class="c-col-8">
										<c-select />
									</c-field>
								</c-row>
									<c-row>
										<c-section heading="'Nother Section" source="Section2" class="c-col-24">
											<c-field source="SectionText" class="c-col-12">
												<c-input type="text" />
											</c-field>
										</c-section>
									</c-row>
							</c-repeating-section>

						</c-repeating-data>
					</c-field>
				</c-row>

				<c-row>
					<c-field label="File Upload" class="c-col-12">
						<c-upload />
					</c-field>

					<!-- calculation -->
				</c-row>

				<c-row>
					<c-field source="Signature" class="c-col-12">
						<c-signature :readonly="false" />
					</c-field>
					<c-field source="Textarea" class="c-col-12">
						<c-input type="textarea" :readonly="false"/>
					</c-field>
				</c-row>

				<c-row>
					<c-field class="c-col-24">
						<!-- Question: Is there an efficient way to apply 'readonly' attribute to all fields of a section, such as this repeating-data section? -->
						<c-repeating-data :is-table="true" :readonly="false" heading="Repeating Table">

							<template slot="thead">
								<th>Your Name</th>
								<th>Your Email</th>
								<th>Your Other Email</th>
								<th>Your Phone Number</th>
							</template>

							<c-repeating-section v-for="i in 1" :key="i" :index="i">
								<c-row>
									<c-field source="Name1" label="Your Name" class="c-col-8">
										<c-input type="text" :readonly="false"/>
									</c-field>
									<c-field source="Name1" label="Your Email" class="c-col-8">
										<c-select />
									</c-field>
									<c-field source="Name1" label="Your Email" class="c-col-8">
										<c-input />
									</c-field>
									<c-field  source="Name1" label="Your Phone Number" class="c-col-8">
										<c-input type="text" />
									</c-field>
								</c-row>
							</c-repeating-section>

						</c-repeating-data >
					</c-field>
				</c-row>

			</c-page>

			<c-page :page="2" :last="true">
				<c-row>
					<c-field source="Spinner1" title="Spinner" class="c-col-12">
						<c-spinner />
					</c-field>
					<c-field source="Slider" title="Slider" class="c-col-12">
						<c-slider />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Image Picker" class="c-col-12">
						<c-image-picker />
					</c-field>

					<c-field title="Choice Group Mini" class="c-col-12">
						<c-choice-group :show-labels="false" :show-images="true" image-size="mini" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Mini (just words)" class="c-col-24">
						<c-choice-group :show-labels="true" :show-images="false" image-size="mini" :grid="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Mini (both)" class="c-col-24">
						<c-choice-group :show-labels="true" :show-images="true" image-size="mini" :grid="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Small" class="c-col-24">
						<c-choice-group :show-labels="true" :show-images="true" image-size="small" :grid="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Medium" class="c-col-24">
						<c-choice-group :show-labels="true" :show-images="true" image-size="medium" :grid="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Large" class="c-col-24">
						<c-choice-group :show-labels="true" :show-images="true" image-size="large" :grid="false" />
					</c-field>
				</c-row>

				<c-row>
					<c-field title="Choice Group Medium (grid and gaps set to true)" class="c-col-24">
						<c-choice-group :show-labels="false" :show-images="true" image-size="medium" :grid="true" :gaps="true" />
					</c-field>
				</c-row>
			</c-page>

			<c-save-resume-dialog />

		</div>
  </form>
</template>

<script>
	import CPageProgress from './components/PageProgress.vue';
	import CPage from './components/Page.vue';
	import CRow from './components/Row.vue';
	import CRepeatingData from './components/RepeatingData.vue';
	import CRepeatingSection from './components/RepeatingSection.vue';
	import CSection from './components/Section.vue';
	import CField from './components/Field.vue';

	import CInput from './components/Input.vue';
	import CName from './components/Name.vue';
	import CPhone from './components/Phone.vue';
	import CAddress from './components/Address.vue';
	import CNumber from './components/Number.vue';
	import CUrl from './components/Url.vue';
	import CSpinner from './components/Spinner.vue';

	import CSlider from './components/Slider.vue';

	import CSelect from './components/Select.vue';
	import CDatePicker from './components/DatePicker.vue';
	import CTimePicker from './components/TimePicker.vue';

	import CCheckableGroup from './components/CheckableGroup.vue';
	import CCheckboxGroup from './components/CheckboxGroup.vue';
	import CCheckbox from './components/Checkbox.vue';
	import CRadioGroup from './components/RadioGroup.vue';
	import CRadio from './components/Radio.vue';
	import CRatingScale from './components/RatingScale.vue';
	import CToggle from './components/Toggle.vue';

	import CSignature from './components/Signature.vue';
	import CUpload from './components/Upload.vue';
	import CSaveResumeDialog from './components/SaveResumeDialog.vue';

	import CImagePicker from './components/ImagePicker.vue';
	import CChoiceGroup from './components/ChoiceGroup.vue';

	import {EventBus} from './event-bus.js';
	import { debounce } from './debounce.js';

	export default {
		name: 'c-form',
		props: ['eid'],

		data: function() {
			return Cognito.Forms.FormEntry.meta.get(this.eid);
		},
		components: {
			CPage,
			CPageProgress,
			CRow,
			CRepeatingData,
			CRepeatingSection,
			CSection,
			CField,

			CInput,
			CName,
			CAddress,
			CPhone,
			CNumber,
			CUrl,
			CSpinner,
			CSlider,

			CSelect,
			CDatePicker,
			CTimePicker,

			CToggle,
			CCheckableGroup,
			CCheckboxGroup,
			CCheckbox,
			CRadioGroup,
			CRadio,
			CRatingScale,

			CSignature,
			CUpload,
			CSaveResumeDialog,

			CImagePicker,
			CChoiceGroup
		},
		created() {
			window.addEventListener("resize", debounce(this.handleResize));
		},
		mounted() {
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener("resize", debounce(this.handleResize));
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
	@import './sass/common/_grid';
	@import './sass/common/_typography';
	@import './sass/common/_svg';

.cg * {
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

	// div.c-row to distinguish from trs
	div.c-row {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		width: calc(100% + #{$gutter}/2);
		margin-left: -$gutter/4;

		& > * {
			margin-left: $input-spacing;
			margin-right: $input-spacing;
		}
	}

	.c-input-container {
		margin-top: $input-spacing;
		margin-bottom: $input-spacing;
	}

	.c-outdent {
		// Shift the page container to accomodate c-field gutter padding
		// only used for c-page
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});
	}

	// Instead of using .c-field, this selector will only apply to fields that have a colspan set.
	// Allowing us to use the field component outside of 24-column grid context.
	div[class*='c-col-'],
	fieldset[class*='c-col-'],
	.c-container,
	.c-padding {
		padding: $gutter/2 ($gutter/2 - $gutter/4);
	}

	.cg,
	.el-popper,
	.el-tooltip__popper {
		background: $reverse;
		// background-image: url('https://images.unsplash.com/photo-1545179920-16c9617c2b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80');
		max-width: $form-width;
		margin: 0 auto;
		color: $color;
		font-family: $typeface;
		font-size: $font-size;
		line-height: 1.4;
	}

	.c-body {
		position: relative;
		margin-top: $form-margins/2;
		margin-left: $form-margins;
		margin-right: $form-margins;
		padding-bottom: $form-margins/2;
		// transition: all .5s;
	}

	.cg:not([data-width~="900"]) {
		font-size: $font-size - 1px;
	}

	.cg:not([data-width~="900"]) .c-body {
		margin-left: $unitless-gutter * .15vw;
		margin-right: $unitless-gutter * .15vw;
	}

	.c-wrapper {
		padding: $form-margins/2 $form-margins;
	}

	.cg:not([data-width~="900"]) .c-wrapper {
		padding: $form-margins/2 $unitless-gutter * .15vw;
	}

	.c-wrapper:first-child {
		padding-top: $form-margins;
	}

	.c-wrapper:last-child {
		padding-bottom: $form-margins;
	}

	.el-icon-close:before {
		display: block;
		line-height: 1;
		content: '\00d7';
		color: $negative;
		font-size: 1.4em;
	}

	:focus {
		outline: 0;
	}

	.el-date-editor input {
		padding-right: 30px;
	}

	::placeholder {
		color: $placholder;
	}
</style>