import VueModel from "../ref/vuemodel.cjs";

function toShortDateString(date) {
    var m = (date.getMonth() + 1).toString();
    var d = date.getDate().toString();
    var y = date.getFullYear().toString();
    return m + "/" + d + "/" + y;
}

export let generalDateFormat = {
    convert: function(value) {
        if (value) {
            return toShortDateString(value);
        }
    },
    convertBack: function(str) {
        if (str) {
            return new Date(Date.parse(str));
        }
    }
};

export function getComponentMixins(componentTag) {
    if (componentTag === "c-repeating-section") {
	    return [VueModel.mixins.SourceProvider];
    } else if (componentTag === "c-section") {
	    return [VueModel.mixins.SourceProvider];
    } else if (componentTag === "c-field") {
	    return [VueModel.mixins.SourceProvider];
    } else if (componentTag === "c-text") {
	    return [VueModel.mixins.SourceConsumer];
    } else if (componentTag === "c-checkbox") {
	    return [VueModel.mixins.SourceConsumer];
    } else if (componentTag === "c-toggle") {
	    return [VueModel.mixins.SourceConsumer];
    } else if (componentTag === "c-spinner") {
	    return [VueModel.mixins.SourceConsumer];
    }
}
