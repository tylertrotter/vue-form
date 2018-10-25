<template>
	<ol class="c-page-progress">
		<li v-for="(page, index) in pages" :key="index" :class="{active: index === currentPage-1}">
			<a @click="goto(index + 1)"><span>{{ page }}</span></a>
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
			next(){
				this.currentPage = 1 + 1;
				EventBus.$emit('page-number-updated', this.currentPage);
			},
			prev(){
				this.currentPage = 1 - 1;
				EventBus.$emit('page-number-updated', this.currentPage);
			},
			goto(num){
				this.currentPage = num;
				EventBus.$emit('page-number-updated', this.currentPage);
			}
		}
  };
</script>

<style scoped lang="scss">
	// TODO: Make these variables global
	$form-margins: 40px;
	$gutter: 32px;
	$highlight: orange;
	$highlight-reverse: white;

	ol {
		margin: 0 0 $gutter/2;
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

	a:before,
	a span {
		vertical-align: middle;
	}

	.active :before {
		background: $highlight;
		color: $highlight-reverse;
	}
</style>