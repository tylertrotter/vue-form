<template>
	<div class="c-repeating-table c-region c-indent">
		<table>
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
					<td><c-button class="c-button--secondary"><i-plus /> Add</c-button></td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import CButton from './Button.vue';
	import IPlus from './assets/plus.svg';

	export default {
		name: 'c-repeating-table',
		components: { CButton, IPlus },
		data(){
			return {
				containerIsTable: this.$parent.currentType === 'c-repeating-table'
			}
		}
	}
</script>


<style lang="scss">
	@import "../sass/common/_table.scss";

	.c-repeating-table {
		width: 100%;

		.c-readonly {
			@include input-appearance;
			@include disabled-input;
		}

		table {
			border-spacing: $table-border-spacing;
		}

		td {
			padding: 0;
		}

		.el-input,
		.c-readonly {
			border-radius: 0;
		}

		tbody {
			.el-input,
			.c-readonly  {
				border-right-width: 0;
			}

			@if $underline != true {
				td:last-child .el-input,
				td:last-child .c-readonly {
					border-right-width: $input-border-width;
				}
			}

			& + tbody .el-input,
			& + tbody .c-readonly  {
				border-top-width: 0;
			}
		}
	}

	.c-repeating-table--summary td {
		padding: $input-padding-v $input-padding-h;
	}

	.top-left-corner .el-input {
		border-top-left-radius: $input-radius;
	}

	.c-button--remove-row {
		margin-right: $gutter/8;
	}

	.c-plus{
		stroke: $neutral;
	}
</style>