<template>
	<table class="c-rating-scale">
		<thead>
			<th></th>
			<th v-for="(answer, index) in answers" :key="index">{{answer}}</th>
		</thead>
		<tbody v-for="(question, index) in questions" :key="index">
			<tr>
				<td class="c-rating-scale--question">{{question}}</td>
				<td class="c-rating-scale--option" v-for="(answer, index) in answers" :key="index">
					<c-radio :name="question" :label="answer" />
				</td>
			</tr>
			<tr>
				<div v-if="error" class="c-validation">{{error}}</div>
			</tr>
		</tbody>
	</table>
</template>

<script>
import CRadio from "./Radio.vue";

export default {
  name: "c-rating-scale",
  components: {
    CRadio
  },
  props: ["error"],
  data() {
    return {
      questions: [
        "How happy are you with Vue.js",
        "How do you like SFCs?",
				"How you liking this rating scale component?"
      ],
      answers: [
				"I'm very upset",
        "Very Unsatisfied",
        "Unsatisfied",
        "Neutral",
        "Satisfied",
				"Very Satisfied",
				"Out-of-my-mind Happy",
				"11"
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../sass/common/_table.scss";
@import "../sass/_mixins.scss";

.c-rating-scale {
	width: 100%;

	tbody:nth-child(even) {
		background: $neutral-bg;
	}

	td,
	th {
		padding: $gutter/4;
	}
}

.c-rating-scale--question:after {
  @include required;
}
.c-rating-scale--option {
  text-align: center;
}

.c-rating-scale--option .el-radio__label {
  display: none;
}

@mixin rating-scale--one-col {
  .c-rating-scale {
    thead {
      display: none;
    }
    td,
    th {
      display: block;
      text-align: left;
    }
  }

  .c-rating-scale--option span {
    display: inline-block;
  }
}

.cg:not([data-width~="1000"]) .c-field:not(.c-col-24) {
  @include rating-scale--one-col;
}

.cg:not([data-width~="625"]) {
  @include rating-scale--one-col;
}
</style>
