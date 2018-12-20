<template>
	<transition name="transition" @after-enter="transitionDone">
		<div class="c-page c-outdent" :data-page="page" v-if="show">
			<slot></slot>
			<c-button-section />
		</div>
	</transition>
</template>

<script>

import {EventBus} from "./../event-bus.js";
import CButtonSection from "./ButtonSection";

export default {
	name: "c-page",
	props: {
		page: Number
	},
	components: { CButtonSection },
	data() {
		return {
			currentPage: 1
		}
	},
	mounted() {
		EventBus.$on("page-number-updated", newPageNum => {
			this.currentPage = newPageNum;
		});
	},
	computed: {
		show(){
			return +this.page === +this.currentPage;
		}
	},
	methods: {
		transitionDone() {
			this.$parent.$refs.form.style.height = "initial";
			this.$parent.$refs.form.style.overflow = "initial";
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
			padding: $gutter $gutter/2 0 0;
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

	[id="c-form"] {
		transition: height ease-in-out $page-transition-duration;
	}
</style>