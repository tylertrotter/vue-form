<template>
	<div v-if="display !== 'none'" class="c-row">
		<ol class="c-page-progress" :class="['c-page-progress--' + display, isNarrow ? 'c-narrow' : '']">
			<li v-for="(page, index) in pageTitles" :key="index" :class="{active: index === currentPage-1}">
				<a href="" @click.prevent="goto(index + 1)" @keydown.prevent.space="goto(index + 1)"><span v-if="showTitles">{{ page }}</span></a>
			</li>
		</ol>
	</div>
</template>

<script>
	import {EventBus} from "./../event-bus";
	import {goToPage} from "./../go-to-page";
	import { debounce } from "./../debounce.js";

	export default {
		name: "c-page-progress",
		props: {
			pages: Array,
			showTitles: Boolean,
			display: {
				type: String,
				validator: value => {
					return value === 'steps' || value === 'bar' || value === 'none';
				}
			},
			transition: String
		},
		data() {
			return {
				isNarrow: false
			}
		},
		mixins: [goToPage],
		created() {
			window.addEventListener("resize", debounce(this.handleResize));
			window.addEventListener("resize", this.resetToDesktopSize);
		},
		mounted() {
			this.handleResize()
		},
		destroyed() {
			window.removeEventListener("resize", debounce(this.handleResize));
			window.removeEventListener("resize", this.resetToDesktopSize);
		},
		methods: {
			resetToDesktopSize(){
				// minimize reflow by locking height into place
				this.$el.style.height = this.$el.getBoundingClientRect().height + 'px';
				this.isNarrow = false;
			},
			handleResize(){
				let progressWidth = this.$el.getBoundingClientRect().width;
				let pageLis = [].slice.call(this.$el.querySelectorAll("li span"));

				this.isNarrow = !this.compareEls(pageLis);
				this.$el.style.height = 'initial';
			},
			compareEls(els){
				for(let i = 0; i < els.length-1; i++){
					if( els[i].getBoundingClientRect().top !== els[i+1].getBoundingClientRect().top ||
							els[i].getBoundingClientRect().height !== els[i+1].getBoundingClientRect().height ){
						return false;
					}
				}
				return true;
			}
		}
  };
</script>

<style lang="scss">

	.c-page {

		&:after {
			content: '';
			display: block;
			clear: both;
		}

		&[data-page]:after {
			content: attr(data-page);
			text-align: right;
			padding: $gutter $input-spacing 0 0;
			font-size: $small-text;
		}

		&[class*="transition"]{
			position: absolute;
		}
	}

	// Not sure these belong here
	.transition-enter-active, .transition-leave-active {
		transition: all ease-in-out $page-transition-duration;
	}

	[id="c-form"] {
		transition: height ease-in-out $page-transition-duration;
	}

	.c-page-progress {
		width: 100%;
		margin: 0 0 $gutter;
		padding: 0;
		counter-reset: mycounter;

		li {
			padding-top: $gutter/6;
			padding-bottom: $gutter/6;
		}

		li:not(:last-child) {
			margin-right: $gutter/4;
		}

		a {
			opacity: .8;
			text-decoration: none;
			color: $color;
			cursor: pointer;

			span {
				padding: 2px 0;
			}

			&:focus span {
				border-bottom: $input-border-width solid $highlight;
			}
		}
	}

	.c-page-progress--steps {

		li {
			display: inline-block;
		}

		a {
			display: inline-block;
			margin-left: -3px;
			padding: 3px;

			span {
				margin-right: $gutter/2;
			}
		}

		a > span,
		a:before {
			vertical-align: middle;
		}

		a:before {
			content: counter(mycounter);
			counter-increment: mycounter;
			display: inline-block;
			font-size: .75em;
			text-align: center;
			width: $unitless-gutter/20 + .5em;
			height: $unitless-gutter/20 + .5em;
			line-height: $unitless-gutter/20 + .5em;
			@if ($circles){
				border-radius: 50%;
			}@else{
				border-radius: $input-radius - 2px;
			}
			border-width: $input-border-width;
			border-color: $input-border-color;
			border-style: solid;
			margin-right: .5em;
		}

		.active :before {
			background: $highlight;
			color: $reverse;
			border-color: $highlight;
		}

		a:focus:before {
			border-color: $highlight;
			background: rgba($highlight, .1);
		}

		.active a:focus:before {
			border-color: rgba($reverse, .3);
			background: $highlight;
			box-shadow: 0 0 0 1px $highlight;
		}

		&.c-narrow {
			li {
				display: block;
			}
		}
	}

	.c-page-progress--bar {

		&,
		li {
			display: flex;
			width: 100%;
		}

		li {
			align-items: flex-start;

		}

		a {
			display: block;
			position: relative;
			width: 100%;
			padding-bottom: 8px;
			border-top: 3 * $input-border-width solid $input-border-color;

			&:before {
				display: block;
				position: absolute;
				top: -3 * $input-border-width;
				right: 0;
				content: "";
				background: $highlight;
				width: 0;
				height: 3 * $input-border-width;
				transition: width $page-transition-duration;
			}
		}

		.active :before {
			width: 100%;
			left: 0;
		}


		&[data-backwards="true"]{
			li :before {
				left: 0;
			}

			.active :before {
				left: initial;
				right: 0;
			}
		}

		&.c-narrow {
			span {
				display: none;
			}
		}
	}

	@if( $page-transition == 'ltr'){
		// Going forward
		.transition-enter {
			transform: translateX(-100%);
			opacity: 0;
		}

		.c-page + .transition-leave-to {
			transform: translateX(120%);
		}

		// Going backward
		.c-page + .transition-enter {
			transform: translateX(100%);
		}

		.transition-leave-to {
			transform: translateX(-120%);
			opacity: 0;
		}
	}@else if( $page-transition == 'up'){
		.transition-enter,
		.transition-leave-to {
			transform: translateY(100%);
			opacity: 0;
		}
	}@else if( $page-transition == 'fade'){
		.transition-enter,
		.transition-leave-to {
			opacity: 0;
		}
	}@else if( $page-transition == 'zoom'){
		.c-page {
			transform-origin: 50% 0;
		}
		.transition-enter,
		.transition-leave-to {
			transform: scale(0);
			opacity: 0;
		}
	}@else if( $page-transition == 'flip'){
		.c-body {
			perspective: 1200px;
		}

		.c-page[class*="transition"] {
			backface-visibility: hidden;
		}

		.transition-enter {
			transform: rotateY( -180deg );
		}

		.transition-leave-to {
			transform: rotateY( 180deg );
		}
	}

</style>