<template>
	<ol class="c-page-progress">
		<li v-for="(page, index) in pages" :key="index" :class="{active: index === currentPage-1}">
			<a @click="goto(index + 1)">{{ page }}</a>
		</li>
	</ol>
</template>

<script>
	import {EventBus} from './../event-bus.js';

	export default {
		name: 'c-page-progress',
		data() {
			return {
				currentPage: 1,
				pages: [
					'Start',
					'Middle',
					'End'
				]
			}
		},
		methods: {
			goto(num){
				this.currentPage = num;
				EventBus.$emit('page-number-updated', this.currentPage);
			}
		}
  };
</script>

<style scoped lang="scss">
	// Just to get sandbox working
	@import '../sass/_theme';
	@import '../sass/_field-style';
	// End sandbox only code

	ol {
		margin: 0 0 $gutter;
		padding: 0;
		counter-reset: mycounter;
	}

	li {
		display: inline-block;
	}

	li + li {
		margin-left: 1em;
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