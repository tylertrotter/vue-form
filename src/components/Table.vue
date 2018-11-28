<template>
	<div class="c-table">
		<table>
			<thead>
				<th><!-- Corresponds to X buttons --></th>
				<slot name="thead"></slot>
			</thead>
			<tbody>
				<slot></slot>
			</tbody>
			<tfoot>
				<td></td>
				<td><c-button>Add</c-button></td>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import CButton from './Button.vue';

	export default {
		name: 'c-table',
		components: { CButton }
	}
</script>

<style lang="scss">
	@import "../sass/common/_table.scss";

	.c-table {

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