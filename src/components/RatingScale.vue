<template>
	<table class="c-rating-scale" :class="{vertical: isVertical}">
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
			minHorizontalWidth: null,
			isVertical: false,
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
	},
	created() {
		window.addEventListener("resize", this.handleResize);
	},
  mounted() {
		this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
			let formWidth = document.querySelector('.c-body').clientWidth;
			if(this.$el.clientWidth > formWidth){
				this.minHorizontalWidth = this.$el.clientWidth;
				this.isVertical = true;
			}

			if(formWidth >= this.minHorizontalWidth){
				this.isVertical = false;
			}
		}
	}
};
</script>

<style lang="scss">
@import "../sass/common/_table.scss";
@import "../sass/_mixins.scss";

.c-rating-scale {
	width: 100%;

	tbody:nth-child(even) {
		@include bg-color($form-text);
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


.c-rating-scale.vertical {
	thead {
		display: none;
	}
	td,
	th {
		display: block;
		text-align: left;
	}
}

.vertical .c-rating-scale--option span {
	display: inline-block;
}


</style>
