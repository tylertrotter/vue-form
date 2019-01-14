<template>
	<div class="c-input-container">
		<div
			ref="choiceGroup"
			class="c-choice-group"
			:class="[{
				'c-choice-group--show-labels': showLabels,
				'c-choice-group--show-images': showImages,
				'c-choice-group--grid': grid,
				'c-choice-group--gaps': gaps
			},
			'c-choice-group--'+imageSize]"
		>
			<ul class="c-choice-group--choices">
				<li v-for="(image, i) in choices" :key="i" :class="{'is-selected': i === selected.index}" @click="changed(i)">
					<img v-if="showImages" :src="image.url" />
					<div v-if="showLabels" class="c-choice-group--label"><i-chevron />{{image.label}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Vue } from "../imports";
	import IImage from "./../assets/image.svg";
	import IEnlarge from "./../assets/enlarge.svg";
	import IChevron from "./../assets/chevron.svg";
	import { Popover } from "element-ui";
	import CButton from "./Button.vue";
	import CCheckbox from "./Checkbox.vue";

	import { debouncedResize } from './../debounce.js';

	Vue.use(Popover);

	export default {
		name: 'c-choice-group',
		components: { IImage, IChevron, IEnlarge, Popover, CCheckbox },
		props: {
			showLabels: Boolean,
			showImages: Boolean,
			imageSize: String,
			grid: Boolean,
			gaps: Boolean
		},
		data(){
			return {
				isFocus: false,
				choices: [
					{label: 'Tall Skyscraper', url: 'https://picsum.photos/200/300?image=1078'},
					{label: 'Walrus', url: 'https://picsum.photos/300/300?image=1084'},
					{label: 'CN Tower', url: 'https://picsum.photos/200/300?image=1075'},
					{label: 'A lone jelly fish swimming in a sea of... sea', url: 'https://picsum.photos/300/200?image=1069'},
					{label: 'Winter', url: 'https://picsum.photos/200/300?image=971'},
					{label: 'Apple', url: 'https://image.flaticon.com/icons/svg/135/135728.svg'},
					{label: 'Banana', url: 'https://image.flaticon.com/icons/svg/135/135631.svg'},
					{label: 'Blueberry', url: 'https://image.flaticon.com/icons/svg/135/135587.svg'},
					{label: 'Cherry', url: 'https://image.flaticon.com/icons/svg/135/135695.svg'},
					{label: 'Orange', url: 'https://image.flaticon.com/icons/svg/135/135620.svg'}
				],
				selected: {
					index: null,
					image: null
				}
			}
		},
		methods: {
			changed(i){
				if(i !== this.selected.index) {
					this.selected.image = this.choices[i];
					this.selected.index = i;
				}else{
					this.selected.image = null;
					this.selected.index = null;
				}
			},
			handleResize() {
				debouncedResize(() => {
					// Determine if group is on one line or not
					const choiceGroup = this.$refs.choiceGroup;
					let first = choiceGroup.querySelector('ul').firstChild;
					let last = choiceGroup.querySelector('ul').lastChild;
					if(first.getBoundingClientRect().top === last.getBoundingClientRect().top){
						choiceGroup.setAttribute('data-one-line', true);
					}else{
						choiceGroup.setAttribute('data-one-line', false);
					}
				})();
			}
		},
		created() {
			window.addEventListener("resize", this.handleResize);
		},
		mounted() {
			this.handleResize();
		},
	}
</script>

<style lang="scss">

	.c-choice-group {
		padding: $gallery-border-spacing;

		width: calc(100% + #{$gallery-border-spacing*2});
		margin-left: -$gallery-border-spacing;
		margin-top: -$gallery-border-spacing;

		&.c-choice-group--gaps {
			width: calc(100% + #{$gutter*2});
			margin-left: -$gutter;

			li {
				margin: $gutter/2;
				border-radius: $button-border-radius;
			}
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		li {
			position: relative;
			box-shadow: 0 0 0 $gallery-border-width $gallery-border-color;
			background: fade(1);
			padding: $gutter/6;
			margin: $gallery-border-width / 2;
			cursor: pointer;
			transition: all .2s;

			&:hover {
				position: relative;
				z-index: 1;
				box-shadow: 0 0 0 $gallery-border-width $highlight;
			}

			&.is-selected {
				position: relative;
				z-index: 2;
				background: $reverse;
				box-shadow: 0 0 0 $gallery-border-width*2 $highlight;
				transform: scale(1.05);
			}
		}

		&[data-one-line="true"] li{
			&:first-child {
				border-top-left-radius: $button-border-radius;
				border-bottom-left-radius: $button-border-radius;
			}

			&:last-child {
				border-top-right-radius: $button-border-radius;
				border-bottom-right-radius: $button-border-radius;
			}
		}

		&[data-one-line="false"] li{
			&:first-child {
				border-top-left-radius: $button-border-radius;
			}

			&:last-child {
				border-bottom-right-radius: $button-border-radius;
			}
		}

		.c-choice-group--label {
			max-width: 9em;
			@include nowrap;

			text-align: center;
			margin: 0 auto;

			// position: absolute;
			// bottom: 0;
			// right: 0;
			// width: calc(100% - #{$gutter/4});
			// text-align: right;
		}

		img {
			// height: 100%;
			max-width: 100%;
			display: block;

			// grid
			max-height: 100%;
			border-radius: $input-radius / 2;
		}

		&.c-choice-group--show-labels:not(.c-choice-group--mini) img {
			height: calc(100% - 1.25em);
		}
	}

	// large
	.c-choice-group--large {
		&.c-choice-group--show-images li {
			height: 200px;
		}

		.c-choice-group--label {
			max-width: 14em;
		}
	}

	// medium
	.c-choice-group--medium {
		&.c-choice-group--show-images li {
			height: 150px;
		}

		.c-choice-group--label {
			max-width: 12em;
		}
	}

	// small
	.c-choice-group--small.c-choice-group--show-images li {
		height: 100px;
	}

	// mini
	.c-choice-group--mini {
		&.c-choice-group--show-images li {
			display: flex;

			img {
				height: 25px !important;
			}
		}

		&.c-choice-group--show-labels img + .c-choice-group--label {
			margin-left: .2em;
		}
	}

	// Not mini
	.c-choice-group:not(.c-choice-group--mini) {
		img {
			margin: 0 auto;
		}

		&.c-choice-group--show-images {
			max-height: calc(100% - 1.75em);
		}
	}

	// Not mini, grid with labels
	.c-choice-group--grid.c-choice-group--show-labels:not(.c-choice-group--mini) img {
		max-height: calc(100% - 1.25em);
	}


// grid
.c-choice-group--grid {
	li {
		width: calc(25% - #{$gutter/4});
		// min-width: 200px;
		flex: 1 0 150px;
	}
}

.c-choice-group .i-chevron {
	display: none;

	opacity: 0;
	stroke: $highlight;
	vertical-align: middle;
}

.is-selected .i-chevron {
	opacity: 1;
}

// if spacing is 0, then round corners of first and last

</style>