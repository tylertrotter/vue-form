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