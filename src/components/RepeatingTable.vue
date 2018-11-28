<template>
	<div class="c-repeating-table c-region c-unshift">
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

		tr:first-child td:nth-child(2) {
			border-top-left-radius: $input-radius;
		}

		tr:first-child td:last-child {
			border-top-right-radius: $input-radius;
		}

		tr:last-child td:nth-child(2) {
			border-bottom-left-radius: $input-radius;
		}

		tr:last-child td:last-child {
			border-bottom-right-radius: $input-radius;
		}

		tbody {
			td + td {
				border: 1px solid $input-border;
				border-right-width: 0;
				border-bottom-width: 0;

				&:last-child {
					border-right-width: 1px;
				}
			}

			tr:last-child td {
				border-bottom-width: 1px;
			}
		}

	}
</style>