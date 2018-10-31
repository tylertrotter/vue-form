<template>
	<div>
		<c-row>
			<c-text type="text" placeholder="Street Address" />
		</c-row>
		<c-row>
			<c-text type="text" placeholder="Line 2" />
		</c-row>
		<c-row >
			<c-text type="text" placeholder="city" class="c-12" />
			<c-text type="text" placeholder="state" class="c-9" />
			<c-text type="text" placeholder="ZIP" class="c-3" />
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
