<template>
	<div class="c-name">
		<c-row v-if="readonly" class="c-readonly c-readonly--input">
			<div>
				{{ name.title ? name.title+" " : ""}}
				{{name.first}}
				{{name.middleInitial ? name.middleInitial+" " : ""}}
				{{name.middleName ? name.middleName+" " : ""}}
				{{name.last}}
				{{name.suffix ? " "+name.suffix : "" }}
			</div>
		</c-row>
		<c-row v-else class="c-name">
			<c-input class="c-input--small" v-if="name.title" type="text" placeholder="Title" />
			<c-input class="c-input--long" type="text" placeholder="First" />
			<c-input class="c-input--tiny" v-if="name.middleInitial" type="text" placeholder="MI" />
			<c-input class="c-input--long" v-else-if="name.middleName" type="text" placeholder="Middle" />
			<c-input class="c-input--long" type="text" placeholder="Last" />
			<c-input class="c-input--small" v-if="name.suffix" type="text" placeholder="Suffix" />
		</c-row>
	</div>
</template>

<script>
import CRow from "./Row.vue";
import CInput from "./Input.vue";

export default {
	name: "c-name",
	computed: {
		stringValue(){
			return this.name
		}
	},
	props: {
		name: Object,
		readonly: Boolean
	},
  components: {
    CInput,
    CRow
	}
};
</script>