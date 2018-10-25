<template>
	<transition name="slide" mode="in-out">
		<div class="c-page" v-show="show">
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
	// TODO: Make these variables global
	$form-margins: 40px;
	$gutter: 32px;

	.c-page {
		// Shift the page container to accomodate c-field gutter padding
		margin-left: -$gutter/2;
		width: calc(100% + #{$gutter});

		&:after {
			content: '';
			display: block;
			clear: both;
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