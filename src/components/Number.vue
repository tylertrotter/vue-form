<template>
	<c-input class="c-number" :readonly="readonly" />
</template>

<script>
import CInput from "./Input.vue";

export default {
	name: "c-number",
	props: ['readonly'],
  components: {
    CInput
	}
};
</script>