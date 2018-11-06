<template>
	<transition name="slide" mode="in-out">
		<div class="c-page c-shift" :data-page="page" v-show="show">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
import {EventBus} from './../event-bus.js';
export default {
	name: 'c-page',
	props: {
		page: Number
	},
	data() {
		return {
			currentPage: 1
		}
	},
	mounted() {
		EventBus.$on('page-number-updated', newPageNum => {
			this.currentPage = newPageNum;
		});
	},
	computed: {
		show(){
			return +this.page === +this.currentPage;
		}
	}
};
</script>

<style scoped lang="scss">
		// Just to get sandbox working
	@import '../sass/_theme';
	@import '../sass/_field-style';
	// End sandbox only code
	.c-page {

		&:after {
			content: '';
			display: block;
			clear: both;
		}

		&[data-page]:after {
			content: attr(data-page);
			text-align: right;
			padding: $gutter $gutter/2 0 0;
			font-size: $small-text;
		}
	}

	// Not sure these belong here
	.slide-enter-active, .slide-leave-active {
		transition: all 1s;
	}
	.slide-enter, .slide-leave-to {
		transform: translateX(-100%);
	}
</style>