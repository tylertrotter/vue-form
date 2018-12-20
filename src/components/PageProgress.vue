<template>
	<div>
	<ol class="c-page-progress">
		<li v-for="(page, index) in pageTitles" :key="index" :class="{active: index === currentPage-1}">
			<a @click="goto(index + 1)">{{ page }}</a>
		</li>
	</ol>
	</div>
</template>

<script>
	import {EventBus} from "./../event-bus.js";

	export default {
		name: "c-page-progress",
		props: ["pages"],
		data() {
			return {
				currentPage: 1,
				pageTitles: this.pages
			}
		},
		methods: {
			goto(num){
				this.currentPage = num;
				EventBus.$emit("page-number-updated", this.currentPage);

				// Handle transition
				const form = this.$parent.$refs.form;

				// record form height
				let formHeight = form.clientHeight;

				let enterEl,
						leaveEl,
						enterElHeight,
						leaveElHeight,
						heightDiff;

				// set form to that height
				form.style.height = formHeight + "px";
				form.style.overflow = "hidden";

				// set enter and leave els to position absolute (Done in CSS)

				// Wait a tick for the transition to start
				setTimeout(function(){

					enterEl = document.querySelector(".transition-enter-active");
					leaveEl = document.querySelector(".transition-leave-active");

					// record height of leave and enter elements
					enterElHeight = enterEl.clientHeight;
					leaveElHeight = leaveEl.clientHeight;

					heightDiff = enterElHeight - leaveElHeight;

					// Set the form height to the new height after transition
					form.style.height = (formHeight + heightDiff) + "px";
				});

				// After the transition is over form height is set back to 'initial' by the page component.

			}
		}
  };
</script>

<style scoped lang="scss">

	ol {
		margin: 0 0 $gutter;
		padding: 0;
		counter-reset: mycounter;
	}

	li {
		display: inline-block;
		padding-top: $gutter/6;
		padding-bottom: $gutter/6;
	}

	li:not(:last-child) {
		margin-right: $gutter;
	}

	a {
		opacity: .8;
		cursor: pointer;
	}

	a:before {
		content: counter(mycounter);
    counter-increment: mycounter;
    display: inline-block;
    font-size:  .8em;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
		margin-right: .5em;
	}

	a:before{
		vertical-align: bottom;
	}

	.active :before {
		background: $highlight;
		color: $highlight-reverse;
	}
</style>