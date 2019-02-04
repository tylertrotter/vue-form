import { debounce } from "./debounce.js";
import { findField } from "./find-field";

export const containerQuery = {
	data(){
		return {
			minHorizontalWidth: null,
			narrowField: false
		}
	},
	created() {
		window.addEventListener("resize", debounce(this.handleResize));
	},
	mounted() {
		this.handleResize()
	},
	destroyed() {
		window.removeEventListener("resize", debounce(this.handleResize));
	},
	methods: {
		handleResize() {
			let componentWidth = this.$el.clientWidth
			const field = findField(this).$el;
			if(field){
				const fieldStyle = window.getComputedStyle(field);
				const fieldPadding = parseInt(fieldStyle.getPropertyValue("padding-left"), 10) + parseInt(fieldStyle.getPropertyValue("padding-right"), 10);
				let fieldWidth = field.clientWidth - fieldPadding;

				if( componentWidth > fieldWidth){
					this.minHorizontalWidth = componentWidth;
					this.narrowField = true;
				}

				if(fieldWidth >= this.minHorizontalWidth){
					this.narrowField = false;
				}
			}
		}
	}
}