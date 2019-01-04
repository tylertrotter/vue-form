<template>
	<div>
		<div v-if="isReadonly" class="c-readonly">{{value || "&nbsp;"}}</div>
		<el-input v-else v-model="inputModel" :type="type" :value="value" :v-mask="mask" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur" @keydown.native="handleKeyDown" @change="handleChange" />
	</div>
</template>

<script>
	import { VueModel, Vue } from "../imports";
	import { Input } from "element-ui";
	Vue.use(Input);

	export default {
		name: "c-input",
		mixins: [VueModel.mixins.SourceConsumer],
		props: ["type", "text", "mask", "placeholder"],
		model: {
			prop: "text",
			event: "change"
		},
		data: function() {
			return {
				hasFocus: false,
				focusValue: null,
				selfModel: (typeof this.text === "string" ? this.text : this.$source ? this.$source.displayValue : false),
				// isReadonly: this.$parent.$attrs.readonly,
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
			},
			isReadonly() {
				return this.$parent.$attrs.readonly;
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
	.c-readonly {
		border-color: transparent;
		@include input-border;
	}

	.el-textarea {
		display: flex;
	}

	textarea {
		resize: vertical;
	}

// #if !chameleon
	textarea,
	select,
	[type="text"],
	[type="tel"],
	[type="password"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"],
	.c-readonly {
		@include input-spacing;
	}

	.el-input__inner,
	.el-textarea__inner{
		@include input-appearance;
	}
// #else
	textarea,
	select,
	[type="text"],
	[type="tel"],
	[type="password"],
	[type="date"],
	[type="email"],
	[type="time"],
	[type="password"],
	.c-readonly {
		width: 100%;
	}
// #endif
</style>