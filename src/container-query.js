import { debouncedResize } from './debounce.js';

export const containerQuery = {
	data(){
		return {
			minHorizontalWidth: null,
			narrowField: false
		}
	},
	created() {
		window.addEventListener("resize", this.handleResize);
	},
	mounted() {
		this.handleResize()
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			debouncedResize(() => {
				let componentWidth = this.$el.clientWidth
				const field = findField(this);
				if(field){
					const fieldStyle = window.getComputedStyle(field);
					const fieldPadding = parseInt(fieldStyle.getPropertyValue('padding-left'), 10) + parseInt(fieldStyle.getPropertyValue('padding-right'), 10);
					let fieldWidth = field.clientWidth - fieldPadding;

					if( componentWidth > fieldWidth){
						this.minHorizontalWidth = componentWidth;
						this.narrowField = true;
					}

					if(fieldWidth >= this.minHorizontalWidth){
						this.narrowField = false;
					}
				}
			})();
		}
	}
}

function findField(component){
	if(component.$parent){
		if(component.$parent.$refs.field){
			return component.$parent.$el;
		}else
			return findField(component.$parent);
	}else{
		return null;
	}
}