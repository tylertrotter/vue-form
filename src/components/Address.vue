<template>
	<div class="c-address">
		<c-row>
			<c-input class="st c-input--full" type="text" placeholder="Street Address" />

			<c-input class="ln2 c-input--full" type="text" placeholder="Line 2" />

			<c-input class="city c-input--long" type="text" placeholder="city" />
			<c-input class="state c-input--small" type="text" placeholder="state" />
			<c-input class="zip c-input--medium" type="text" placeholder="ZIP" />
		</c-row>
	</div>
</template>

<script>
import CRow from "./Row.vue";
import CInput from "./Input.vue";

export default {
  name: "c-address",
  components: {
    CInput,
    CRow
  }
};
</script>
