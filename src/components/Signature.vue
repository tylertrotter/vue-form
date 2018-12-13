<template>
	<div class="c-signature" :class="{readonly: isReadonly}">
		<!-- Need to get sass variables converted to JS so I can populate penColor (and for many other reasons) -->
		<VueSignaturePad ref="signaturePad" :options="{ onEnd, onBegin, penColor: 'black'}" />
		<div class="c-signature-symbol">
			<c-button v-if="hasMark" @click.native="clear"><c-ex /></c-button>
			<span class="c-signature-empty-symbol" v-else>&times;</span>
		</div>
	</div>
</template>

<script>
	import VueSignaturePad from 'vue-signature-pad';
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';

	export default {
		name: 'c-signature',
		components: { VueSignaturePad, CButton, CEx },
		data() {
			return {
				hasMark: null,
				isReadonly: this.$parent.$attrs.readonly,
			}
		},
		methods: {
      clear() {
				this.$refs.signaturePad.clearSignature();
				this.hasMark = false;
			},
			onEnd() {
				this.hasMark = true;
			}
		},
		mounted(){

			// Lock if readonly
			if( this.isReadonly ){
				this.$refs.signaturePad.lockSignaturePad();
			}

			const sigEl = this.$el

			// It takes a tick for the multi-column layout to get in place
			// Resizing too soon and the width will be based on single column.
			setTimeout(function(canvas){
				resizeCanvas();
			});

			function resizeCanvas() {
				const canvas = sigEl.querySelector('canvas');
				const ratio =  Math.max(window.devicePixelRatio || 1, 1);
				canvas.width = canvas.offsetWidth * ratio;
				canvas.height = canvas.offsetHeight * ratio;
				canvas.getContext("2d").scale(ratio, ratio);
			}
		},

	}
</script>

<style lang="scss">
	// z-index situation
	// ------------------
	// X button on top
	// then canvas
	// then signature line

	.c-signature {
		position: relative;
		height: 200px;
		background: $input-bg;
		border: $input-border-color $input-border-width $input-border-style;

		&:not(.readonly){
			cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJGNjQ4OTcxRkVGRDExRTg4NkZFOEQwNjg0REM0NEJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJGNjQ4OTcyRkVGRDExRTg4NkZFOEQwNjg0REM0NEJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkY2NDg5NkZGRUZEMTFFODg2RkU4RDA2ODREQzQ0QkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkY2NDg5NzBGRUZEMTFFODg2RkU4RDA2ODREQzQ0QkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4G39MSAAABv0lEQVR42oyTz4tBURTHkYjVMGoa0zRvw1+gNMagyE5NsZPGYuZfmJrMgpQ/YYgFYaNZyGw0u/FjMTsbO4qEbBSJZPOde17j5T1MTn0X57zz/dx77rtXBuC+1WrBbrejVCphOp2yEp6YrmWnRL1eR6VSgdFoBEvh8/mQyWQwGAwI9PkHuzkKsNlsMJvNmEwmsFgsPISkVqsFWL/fJ1iR6W4PUCgUeIPD4cBisYDH4xEgW6lUKgSDQaxWKwKdiQDL5RJut5tvJPN8Pj8IISUSCQK8igCs8JxOp4Uml8uFbreLcrmMQCAgAlitVgL8SAEXNL9SqRQaG40GNT5sNhvI5XKhrtFoMBwO6duVFPLl9XqFRr/fj06ng1gstjdGLpcjwOO/Y5AUCsXBc6CxWHxIAZfj8figYVc6nQ7NZhPtdpsg71JIPhQKHTXr9XrMZjMkk0k+z2azYghLbtfrNeLxOJxOJ7RarWA2GAz87y0WiyJoNBqFdBfnTG9M371eD/l8HuFwGLVaDalUam9XJpMJR684g3BMIaYsvQupmeM4VKtVnPTgaFaaedc8Go3oDF5kpwZBIpEIf81p5a35V4ABAAKUi5BW1JlkAAAAAElFTkSuQmCC'), auto;
		}

		&:after {
			display: block;
			position: absolute;
			z-index: 0;
			bottom: 30px;
			left: 15px;
			content: '';
			width: calc(100% - 30px);
			height: 0;
			border-bottom: rgba($input-border-color, .5) $input-border-width $input-border-style;
			pointer-events: none;
		}

		canvas {
			position: relative;
			z-index: 1;
			display: block;
		}

		&.readonly {
			border-color: transparent;
		}
	}

	.c-signature-symbol {
		position: absolute;
		z-index: 2;
		bottom: 40px;
		left: 15px;

		.readonly & {
			display: none;
		}
	}

	.c-signature-empty-symbol {
			display: block;
			font-size: 1.5em;
			line-height: .6;
	}
</style>