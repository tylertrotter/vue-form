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
