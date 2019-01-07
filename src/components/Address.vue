<template>
	<div class="c-address">
		<c-row v-if="readonly" class="c-readonly">
			<div>{{ address.line1 }}<br>
				<template v-if="address.line2">{{ address.line2 }}<br></template>
				{{ address.city ? address.city : '' }} {{ address.state ? address.state : '' }}, {{ address.postal ? address.postal : '' }}</div>
		</c-row>
		<c-row v-else>
			<c-input v-if="address.line1 !== false" class="st c-input--full" type="text" placeholder="Street Address" />

			<c-input v-if="address.line2 !== false" class="ln2 c-input--full" type="text" placeholder="Line 2" />

			<c-input v-if="address.city !== false" class="city c-input--long" type="text" placeholder="city" />
			<c-input v-if="address.state !== false" class="state c-input--small" type="text" placeholder="state" />
			<c-input v-if="address.postal !== false" class="zip c-input--medium" type="text" placeholder="ZIP" />
		</c-row>
	</div>
</template>

<script>
import CRow from "./Row.vue";
import CInput from "./Input.vue";

export default {
	name: "c-address",
	props: {
		readonly: Boolean,
		address: Object
	},
  components: {
    CInput,
    CRow
  }
};
</script>
