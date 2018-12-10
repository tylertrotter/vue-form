<template>
	<div class="c-repeating-table c-region c-indent">
		<table>
			<thead>
				<th><!-- Corresponds to X buttons --></th>
				<slot name="thead"></slot>
			</thead>

			<slot></slot>

			<tfoot>
				<td></td>
				<td><c-button>Add</c-button></td>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import CButton from './Button.vue';
	import CEx from './icons/Ex.vue';

	export default {
		name: 'c-repeating-table',
		components: { CButton, CEx },
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

	.top-left-corner .el-input {
		border-top-left-radius: $input-radius;
	}

		// Temporary
	button {
		width: $input-padding-v*2 + $input-border-width*2 + $input-font-size/2;
		background: transparent;
		border: 0;
		padding: 0;
	}
</style>