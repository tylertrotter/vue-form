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
	import {EventBus} from "./../event-bus";
	import {goToPage} from "./../go-to-page";

	export default {
		name: "c-page-progress",
		props: ["pages"],
		mixins: [goToPage]
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