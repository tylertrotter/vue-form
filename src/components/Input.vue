<template>
	<div class="c-input-container">
		<div v-if="readonly" class="c-readonly c-readonly--input">{{inputModel || "&nbsp;"}}</div>
		<el-input v-else v-model="inputModel" :type="type" :value="value" :v-mask="mask" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur" @keydown.native="handleKeyDown" @change="handleChange" />
	</div>
</template>

<script>
	import { VueModel, Vue } from "../imports";
	import { Input } from "element-ui";
	import { findField } from "./../find-field";
	Vue.use(Input);

	export default {
		name: "c-input",
		mixins: [VueModel.mixins.SourceConsumer],
		props: {
			type: String,
			text: String,
			mask: String,
			placeholder: String,
			readonly: Boolean
		},
		model: {
			prop: "text",
			event: "change"
		},
		data: function() {
			return {
				hasFocus: false,
				focusValue: null,
				selfModel: (typeof this.text === "string" ? this.text : this.$source ? this.$source.displayValue : false),
				value: this.$parent.$attrs.value
			};
		},
		watch: {
			// NOTE: This is here to watch for changes to the
			// prop coming from OUTSIDE of the component...
			text: function(newVal, oldVal) {
				this.selfModel = newVal;
				if (this.$source && this.$source.displayValue !== newVal) {
					this.$source.displayValue = newVal;
				}
			},
		},
		computed: {
			inputModel: {
				get: function() {
					// console.log("Received 'c-input' inputModel.get()");

					let sourceValue = null;
					if (this.$source) {
						sourceValue = this.$source.displayValue;
					}

					return this.hasFocus ? this.selfModel : (sourceValue != null ? sourceValue : this.selfModel);
				},
				set: function (val) {
					// console.log("Received 'c-input' inputModel.set()");

					this.selfModel = val;

					if (!this.hasFocus) {
						if (this.$source) {
							this.$source.displayValue = val;
						}
					}
				}
			}
		},
		methods: {
			handleKeyDown(ev) {
				// console.log("Received 'c-input' keydown event");
				if (ev.ctrlKey || ev.shiftKey || ev.altKey || ev.metaKey) {
					return;
				}
				if (ev.key === "Escape") {
					this.selfModel = this.focusValue;
					ev.target.value = this.focusValue;
					ev.target.blur();
				}
			},
			handleFocus(value, ev) {
				// console.log("Received 'c-input' focus event");
				this.hasFocus = true;
				this.focusValue = this.selfModel;
			},
			handleBlur(value, ev) {
				// console.log("Received 'c-input' blur event");
				this.hasFocus = false;
			},
			handleChange(value, ev) {
				// console.log("Received 'c-input' change event");
				// NOTE: Could do some validation in here?
				this.$emit('change', value, ev);
				if (this.$source) {
					this.$source.displayValue = value;
				}
			}
		}
	};
</script>

<style lang="scss">
	.c-readonly--input {
		border-color: transparent;
		@include input-border;
	}

	.el-textarea {
		display: flex;
	}

	textarea {
		resize: vertical;
	}

	textarea,
	select,
	[type="text"],
	[type="tel"],
	[type="password"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"],
	.c-readonly--input {
		// #if !chameleon
			@include input-spacing;
		// #else
			width: 100%;
		// #endif
	}

	.c-readonly--input {
		padding-left: 0;
		padding-right: 0;
	}

	.el-input__inner,
	.el-textarea__inner{
		@include input-appearance;
	}
</style>