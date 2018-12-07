<template>
	<div class="c-address">
		<c-row>
			<c-text type="text" placeholder="Street Address" />
		</c-row>
		<c-row>
			<c-text type="text" placeholder="Line 2" />
		</c-row>
		<c-row >
			<c-text type="text" placeholder="city" />
			<c-text type="text" placeholder="state" />
			<c-text type="text" placeholder="ZIP" />
		</c-row>
	</div>
</template>

<script>
import CRow from "./Row.vue";
import CText from "./Text.vue";

export default {
  name: "c-address",
  components: {
    CText,
    CRow
  },
  props: ["colspan"]
};
</script>
