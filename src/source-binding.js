import { VueModel } from "./imports";

export function install(Vue) {
    console.log("Source binding install called...");

    Vue.mixin({
        beforeCreate: function() {
            console.log("Creating component of type '" + this.$options._componentTag + "'...");

            let vm = this;

            // NOTE: Its too late at this point to inject a mixin, since the
            // declared props (ex: `source`) won't be visible to the component
            if (vm.$options._componentTag === "c-field") {
                vm.$options = Vue.util.mergeOptions(vm.$options, VueModel.mixins.SourceProvider, vm);
                VueModel.mixins.SourceProvider.beforeCreate.apply(this, arguments);
            }
        }
    });

}
