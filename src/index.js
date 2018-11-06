import Vue from "vue";
import Form from "./CognitoForm.vue";
import VueModel from "../ref/vuemodel.cjs";
import { createModel } from "./create-model";
// import * as sourceBinding from "./source-binding";

Vue.use(VueModel);

// Can't use a source binding plugin to inject mixins...
// Vue.use(sourceBinding);

let Cognito = window.Cognito || (window.Cognito = {});
Cognito.Forms = window.Cognito.Forms || (window.Cognito.Forms = {});
Cognito.Forms.model = createModel();

let formEntry = Cognito.Forms.model.entry;

formEntry.Spinner1 = 3;
formEntry.Name3 = "Tyler Trotter";
formEntry.Toggle1 = true;
formEntry.RepeatingSection1[0].Email1 = "jamie@cognitoforms.com";
formEntry.RepeatingSection1[1].Email1 = "royal@cognitoforms.com";
formEntry.RepeatingSection1[1].Checkbox1 = true;
formEntry.Section1.Email2 = "taylor@cognitoforms.com";
formEntry.Section1.Email3 = "bryan@cognitoforms.com";
formEntry.Checkbox2 = true;
formEntry.Email4 = "tyler@cognitoforms.com";

// console.log(Cognito.Forms.model.entry);

new Vue({
  el: "#c-form",
  render: h => h(Form),
  data: function() {
    return Cognito.Forms.model.entry;
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // Add classes for every 100px width
      var width = Math.ceil(document.getElementById("c-form").clientWidth / 25) * 25;
			var widths = [];

      for (var size = width; size >= 200; size = size - 25) {
				if(size <= 650 || size % 100 === 0)
        widths.push(size);
			}

			document.getElementById("c-form").setAttribute('data-width', widths.join(" "));
    }
  }
});
