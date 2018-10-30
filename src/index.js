import Vue from "vue";
import Form from "./CognitoForm.vue";

new Vue({
  el: "#c-form",
  render: h => h(Form),
  data: {
    width: 0
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
