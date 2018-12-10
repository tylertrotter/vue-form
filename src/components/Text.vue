<template>
	<div>
		<div v-if="isReadonly" class="c-readonly">{{value}}</div>
		<el-input v-else v-model="inputModel" :type="type" :value="value" :v-mask="mask" @focus="handleFocus" @blur="handleBlur" @keydown.native="handleKeyDown" @change="handleChange" />
	</div>
</template>

<script>
import { VueModel } from "../imports";
export default {
	name: 'c-text',
	mixins: [VueModel.mixins.SourceConsumer],
	props: ['type', 'text', 'mask'],
	model: {
		prop: 'text',
		event: 'change'
	},
	data: function() {
		return {
			hasFocus: false,
			focusValue: null,
			selfModel: (typeof this.text === "string" ? this.text : this.$source ? this.$source.displayValue : false),
			readonly: true,
			value: 'John Doe'
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
				// console.log("Received 'c-text' inputModel.get()");

				let sourceValue = null;
				if (this.$source) {
					sourceValue = this.$source.displayValue;
				}

				return this.hasFocus ? this.selfModel : (sourceValue != null ? sourceValue : this.selfModel);
			},
			set: function (val) {
				// console.log("Received 'c-text' inputModel.set()");

				this.selfModel = val;

				if (!this.hasFocus) {
					if (this.$source) {
						this.$source.displayValue = val;
					}
				}
			}
		},
		isReadonly: {
			get: function(){
				console.log(this.readonly)
				return this.readonly;
			}
		}
	},
	methods: {
		handleKeyDown(ev) {
			// console.log("Received 'c-text' keydown event");
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
			// console.log("Received 'c-text' focus event");
			this.hasFocus = true;
			this.focusValue = this.selfModel;
		},
		handleBlur(value, ev) {
			// console.log("Received 'c-text' blur event");
			this.hasFocus = false;
		},
		handleChange(value, ev) {
			// console.log("Received 'c-text' change event");
			// NOTE: Could do some validation in here?
			this.$emit('change', value, ev);
			if (this.$source) {
				this.$source.displayValue = value;
			}
		}
	}
};
</script>
