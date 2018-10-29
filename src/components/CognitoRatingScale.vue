<template>
	<table class="c-rating-scale">
		<thead>
			<th></th>
			<th v-for="(answer, index) in answers" :key="index">{{answer}}</th>
		</thead>
		<tbody v-for="(question, index) in questions" :key="index">
			<tr>
				<td>{{question}}</td>
				<td v-for="(answer, index) in answers" :key="index">
					<cognito-radio :name="question" />
				</td>
			</tr>
			<tr>
				<div v-if="error" class="c-validation">{{error}}</div>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import CognitoRadio from './CognitoRadio.vue';
	// import './../sass/table.css';

	export default {
		name: 'c-rating-scale',
		components: {
			CognitoRadio
		},
		data() {
			return {
				questions: ['How happy are you with Vue.js', 'How do you like SFCs?'],
				answers: ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied']
			}
		}
  };
</script>

<style lang="scss">
	@import '../sass/common/_table.scss';

	.c-rating-scale {
		width: 100%;
	}
</style>