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
      this.width =
        Math.floor(document.getElementById("c-form").clientWidth / 100) * 100;
      var classes = [];
      for (var size = this.width; size >= 200; size = size - 100) {
        classes.push("c-width-" + size);
      }
      document.getElementById("c-form").classList = classes.join(" ");
    }
  }
});
