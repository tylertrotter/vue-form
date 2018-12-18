<template>
	<c-row class="c-name" :class="nameLength">
		<c-input class="c-input--small" v-if="optionalParts.title" type="text" placeholder="Title" />
		<c-input class="c-input--long" type="text" placeholder="First" />
		<c-input class="c-input--tiny" v-if="optionalParts.middleInitial" type="text" placeholder="MI" />
		<c-input class="c-input--long" v-else-if="optionalParts.middleName" type="text" placeholder="Middle" />
		<c-input class="c-input--long" type="text" placeholder="Last" />
		<c-input class="c-input--small" v-if="optionalParts.suffix" type="text" placeholder="Suffix" />
	</c-row>
</template>

<script>
import CRow from "./Row.vue";
import CInput from "./Input.vue";

export default {
	name: "c-name",
	props: {
		optionalParts: Object
	},
  components: {
    CInput,
    CRow
	}
};
</script>

<style lang="scss">

</style>
