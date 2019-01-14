<template>
	<div
		class="c-image-picker c-input-container"
		:class="{'is-focus': isFocus, 'is-selected': selected}" @click="isFocus = !isFocus"
		>
		<el-popover
			placement="bottom-start"
			width="300"
			trigger="click"
			transition="el-zoom-in-top"
			class="c-image-picker--popover"

			>
				<button
					:style="selected ? `background-image: url('${selected.url}');` : ''"
					type="button"
					slot="reference"
					class="el-input__inner c-image-picker--button"

				>
					<i-image />
					<i-chevron />
				</button>
				<ul class="c-image-picker--choices">
					<li v-for="(image, i) in choices" :style="`background-image: url('${image.url}');`" :key="i">
						<button class="c-image-picker--enlarge" >
							<i-enlarge />
						</button>

						<c-checkbox :label="'image-'+i" @change="changed"/>
					</li>
				</ul>
		</el-popover>
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

	Vue.use(Popover);

	export default {
		name: 'c-image-picker',
		components: { IImage, IChevron, IEnlarge, Popover, CCheckbox },
		data(){
			return {
				isFocus: false,
				choices: [
					{label: 'Tall Skyscraper', url: 'https://picsum.photos/200/300?image=1078'},
					{label: 'Walrus', url: 'https://picsum.photos/300/300?image=1084'},
					{label: 'CN Tower', url: 'https://picsum.photos/200/300?image=1075'},
					{label: 'Jelly Fish Super long label', url: 'https://picsum.photos/300/200?image=1069'},
					{label: 'Winter', url: 'https://picsum.photos/200/300?image=971'},
					{label: 'Apple', url: 'https://image.flaticon.com/icons/svg/135/135728.svg'},
					{label: 'Banana', url: 'https://image.flaticon.com/icons/svg/135/135631.svg'},
					{label: 'Blueberry', url: 'https://image.flaticon.com/icons/svg/135/135587.svg'},
					{label: 'Cherry', url: 'https://image.flaticon.com/icons/svg/135/135695.svg'},
					{label: 'Orange', url: 'https://image.flaticon.com/icons/svg/135/135620.svg'}

				],
				selected: null
			}
		},
		methods: {
			changed(value, ev){
				if(value)
					this.selected = this.choices[+ev.replace('image-', '')];
				else
					this.selected = null;
			}
		}
	}
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/popover";

	.c-image-picker{
		display: inline-block;

		.el-input__inner {
			position: relative;
			width: 4em;
			height: 4em;
			background: fade(1);
			background-size: cover;
			background-position: center;
		}

		.i-chevron {
			display: block;
			position: absolute;
			right: 5px;
			bottom: 5px;
			max-width: 20%;
			stroke: $color;
			stroke-width: $icon-weight;
			transition: all .3s;
		}

		&.is-focus .i-chevron {
			transform: scaleY(-1);
		}

		&.is-selected .i-chevron {
			stroke: white;
		}

		.i-image {
			display: block;
			margin: 0 auto;
			opacity: .5;
		}

		&.is-selected .i-image {
			display: none;
		}

		.i-image path {
			fill: $color;
		}
	}

	.c-image-picker--choices {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			position: relative;
			width: 33.333%;
			padding-bottom: 33.333%;
			background-size: cover;
			background-position: center;
		}

		.c-image-picker--enlarge {
			position: absolute;
			bottom: 0;
			width: 50%;
			background: transparent;
			border: 0;
			padding: 28px 28px 8px 8px;
			transition: all .3s;

			path {
				fill: white;
				// stroke: black;
				// stroke-width: 8;
			}

			&:hover,
			&:focus {

				padding: 25px 25px 5px 5px;
			}

			&:hover path,
			&:focus path {
				fill-opacity: 1;
			}
		}

		.el-checkbox,
		.el-radio {
			position: absolute;
			right: 6px;
			top: 6px;
		}

		:not(.is-checked) > .el-checkbox__inner,
		:not(.is-checked) > .el-radio__inner {
			background: rgba(0,0,0,.3);
			opacity: .5;
			border-color: white;
		}

		.is-checked > .el-checkbox__inner,
		.is-checked > .el-radio__inner  {
			box-shadow: 0 0 0 1px  white;
		}

		.el-checkbox__label {
			display: none;
		}
	}
</style>