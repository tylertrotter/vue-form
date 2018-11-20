<template>
	<el-checkbox v-model="inputModel" @focus="handleFocus" @blur="handleBlur" @change="handleChange" >{{inputLabel}}</el-checkbox>
</template>

<script>
import { VueModel } from "../imports";
export default {
	name: 'c-checkbox',
	mixins: [VueModel.mixins.SourceConsumer],
	props: ['label', 'checked'],
	model: {
		prop: 'checked',
		event: 'change'
	},
	data: function() {
		return {
			hasFocus: false,
			selfModel: (typeof this.checked === "boolean" ? this.checked : this.$source ? this.$source.value : false),
		};
	},
	watch: {
		// NOTE: This is here to watch for changes to the
		// prop coming from OUTSIDE of the component...
		checked: function(newVal, oldVal) {
			this.selfModel = newVal;
			if (this.$source && this.$source.value !== newVal) {
				this.$source.value = newVal;
			}
		},
	},
	computed: {
		inputLabel: function() {
			return typeof this.label === "string" ? this.label : this.$source.label;
		},
		inputModel: {
			get: function() {
				// console.log("Received 'c-checkbox' inputModel.get()");

				let sourceValue = null;
				if (this.$source) {
					sourceValue = this.$source.value;
				}

				return this.hasFocus ? this.selfModel : (sourceValue != null ? sourceValue : this.selfModel);
			},
			set: function (val) {
				// console.log("Received 'c-checkbox' inputModel.set()");

				this.selfModel = val;

				if (this.$source) {
					this.$source.value = val;
				}
			}
		}
	},
	methods: {
		handleFocus(value, ev) {
			// console.log("Received 'c-checkbox' focus event");
			this.hasFocus = true;
		},
		handleBlur(value, ev) {
			// console.log("Received 'c-checkbox' blur event");
			this.hasFocus = false;
		},
		handleChange(value, ev) {
			// NOTE: Could do some validation in here?
			// console.log("Received 'c-checkbox' change event");
			this.$emit('change', value, ev);
			if (this.$source) {
				this.$source.value = value;
			}
		}
	}
};
</script>
