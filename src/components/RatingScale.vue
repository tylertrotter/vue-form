<template>
	<table class="c-rating-scale" :class="{'c-narrow': narrowField}">
		<thead>
			<th></th>
			<th v-for="(answer, index) in answers" :key="index"><span>{{answer}}</span></th>
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
import { containerQuery } from "./../container-query";
import CRadio from "./Radio.vue";

export default {
  name: "c-rating-scale",
  components: {
    CRadio
  },
	props: ["questions", "answers", "error"],
	mixins: [containerQuery]
};
</script>

<style lang="scss">
@import "../sass/common/_table.scss";

.c-rating-scale {
	width: 100%;

	tbody:nth-child(even) td {
		@include bg-color($color);
	}

	td,
	th {
		padding: $gutter/3;
	}
}

.c-rating-scale--question {
	min-width: 10em;
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


.c-rating-scale.c-narrow {
	thead {
		display: none;
	}
	td,
	th {
		display: block;
		text-align: left;
	}
}

.c-narrow .c-rating-scale--option span {
	display: inline-block;
}

.c-rating-scale:not(.c-narrow) {
		@if( $border-radius > 0){

		// Round table corners
		tbody:first-of-type{

			td:first-child {
				border-top-left-radius: $input-radius;
			}

			td:last-child {
				border-top-right-radius: $input-radius;
			}
		}

		tbody:last-of-type{

			td:first-child {
				border-bottom-left-radius: $input-radius;
			}

			td:last-child {
				border-bottom-right-radius: $input-radius;
			}
		}

	}
}

// Experimental 45deg label layout

// .c-rating-scale {
// 	margin-top: 4em;
// }
// .c-rating-scale th:last-child,
// .c-rating-scale td:last-child {
// 	padding-right: 3.5em;
// }
// .c-rating-scale th {
// 	position: relative;
// }
// .c-rating-scale th span{
// 	display: flex;
// 	align-items: flex-end;
// 	position: absolute;
// 	bottom: 2.5em;
// 	left: 0;
// 	width: 7em;
// 	height: 2.5em;
// 	transform: rotate(-45deg);
// 	text-align: left;
// }

// Experimental 90deg layout

// .c-rating-scale thead {
// 	display: flex;
// 	position: absolute;
// 	width: 100%;
// 	justify-content: flex-end;
// }
// .c-rating-scale thead th {
// 	width: 3em;
// 	position: relative;
// 	padding: 0;
// }
// .c-rating-scale td:not(.c-rating-scale--question) {
// 	width: 3.5em;
// 	padding: 0;
// }

// .c-rating-scale th span {
// 	display: block;
// 	position: absolute;
// 	left: 0;
// 	bottom: -2em;
// 	width: 10em;
// 	height: 3em;
// 	padding-bottom: .5em;
// 	transform-origin: 0 0;
// 	transform: rotate(-90deg);
// 	text-align: left;
// }


</style>
