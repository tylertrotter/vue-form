<template>
	<c-input :readonly="readonly" type="tel" />
</template>

<script>
import CInput from "./Input.vue";

export default {
	name: "c-phone",
	props: ['readonly'],
  components: {
    CInput
	}
};
</script>