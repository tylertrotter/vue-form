import { Vue, VueModel } from "./imports";
import { createModel } from "./create-model";
import Form from "./CognitoForm.vue";

import {
	Button,
	DatePicker,
  Select,
  Option,
	Dialog,
	Input,
	InputNumber,
	Radio,
	RadioGroup,
	Checkbox,
	TimePicker,
	Upload,
	Steps,
	Switch
} from 'element-ui';

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Steps);
Vue.use(Switch);

// Register Common Components
Vue.component("c-button", require('./components/Button.vue'))

// import * as sourceBinding from "./source-binding";

Vue.use(VueModel);

// Can't use a source binding plugin to inject mixins...
// Vue.use(sourceBinding);

let Cognito = window.Cognito || (window.Cognito = {});
Cognito.Forms = window.Cognito.Forms || (window.Cognito.Forms = {});
Cognito.Forms.model = createModel();

Cognito.Forms.model.perform(function() {

  let formEntry = new Cognito.Forms.FormEntry();
  formEntry.Section1 = new Cognito.Forms.FormEntrySection1();
  formEntry.Section2 = new Cognito.Forms.FormEntrySection2();
  formEntry.RepeatingSection1.push(new Cognito.Forms.FormEntryRepeatingSection1Item());
  formEntry.RepeatingSection1.push(new Cognito.Forms.FormEntryRepeatingSection1Item());

  formEntry.DatePicker1 = "2018-11-14";
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

  formEntry.Section2.AllSideDishes.push("Vegetable Medley");
  formEntry.Section2.AllSideDishes.push("Loaded Baked Potato");
  formEntry.Section2.AllSideDishes.push("Pita & Hummus");
  formEntry.Section2.AllSideDishes.push("Cheesy Grits");
  formEntry.Section2.AllSideDishes.push("Asparagus");

  Cognito.Forms.model.entry = formEntry;

});

// console.log(Cognito.Forms.model.entry);

var vm = new Vue({
	el: "#c-form",
  render: (createElement) => createElement(Form, { attrs: { eid: Cognito.Forms.model.entry.meta.id } }),
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

window.vm = vm;
