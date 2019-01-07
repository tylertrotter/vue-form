<template>
	<c-input class="c-url" :readonly="readonly" />
</template>

<script>
import CInput from "./Input.vue";

export default {
	name: "c-url",
	props: ['readonly'],
  components: {
    CInput
	}
};
</script>