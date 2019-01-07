<template>

		<table class="c-repeating-table c-region">
			<caption>{{this.$parent.$props.heading}}</caption>
			<thead>
				<th><!-- Corresponds to X buttons --></th>
				<slot name="thead"></slot>
			</thead>

			<slot></slot>

			<tfoot>
				<tr class="c-repeating-table--summary">
					<td></td>
					<td>Footer</td>
					<td>Footer</td>
					<td>Footer</td>
				</tr>
				<tr>
					<td></td>
					<td><c-button class="c-button--secondary c-repeating-data--add-button"><i-plus /> Add</c-button></td>
				</tr>
			</tfoot>
		</table>

</template>

<script>
	import { containerQuery } from "./../container-query";
	import CButton from "./Button.vue";
	import IPlus from "./../assets/plus.svg";

	export default {
		name: "c-repeating-table",
		components: { CButton, IPlus },
		mixins: [containerQuery],
		data(){
			return {
				containerIsTable: this.$parent.currentType === "c-repeating-table"
			}
		},
		watch: {
			narrowField: function(){
				if(this.narrowField){
					this.$parent.currentType = "div"
				}else{
					this.$parent.currentType = "c-repeating-table"
				}
			}
		}
	}
</script>


<style lang="scss">
	@import "../sass/common/_table.scss";

	.c-repeating-table {
		width: 100%;
		border-spacing: $table-border-spacing;

		caption {
			@include label;
			text-align: left;
		}

		.c-readonly {
			@include input-appearance;
			@include disabled-input;
			padding-left: $input-padding-h;
			padding-right: $input-padding-h;
		}

		td {
			padding: 0;
		}

		.el-input__inner,
		.c-readonly {
			border-radius: 0;
			min-width: 150px;

			&:focus {
				position: relative;
				z-index: 1;
				border-color: $highlight;
				outline: $input-border-width solid $highlight;
				width: calc(100% + 1px);
			}
		}

		tbody {
			.el-input__inner,
			.c-readonly  {
				border-right-width: 0;
			}

			@if $underline != true {
				td:last-child .el-input__inner,
				td:last-child .c-readonly {
					border-right-width: $input-border-width;
				}
			}

			& + tbody .el-input__inner,
			& + tbody .c-readonly  {
				border-top-width: 0;
			}
		}
	}

	.c-repeating-table--summary td {
		padding-top: $input-padding-v;
		padding-left: $input-padding-h;
		padding-right: $input-padding-h;
	}

	.top-left-corner .el-input {
		border-top-left-radius: $input-radius;
	}

	.c-button--remove-row {
		margin-right: $gutter/8;
	}

	@if( $border-radius > 0){

		// Round table corners
		tbody:first-of-type{

			td:nth-child(2) {
				.el-input__inner,
				.c-readonly{
					border-top-left-radius: $input-radius;
				}
			}

			td:last-child {
				.el-input__inner,
				.c-readonly{
					border-top-right-radius: $input-radius;
				}
			}
		}

		tbody:last-of-type{

			td:nth-child(2) {
				.el-input__inner,
				.c-readonly{
					border-bottom-left-radius: $input-radius;
				}
			}

			td:last-child {
				.el-input__inner,
				.c-readonly{
					border-bottom-right-radius: $input-radius;
				}
			}
		}
	}
</style>