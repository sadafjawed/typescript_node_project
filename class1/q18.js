var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var newlocation = ["Canada", "England", "America", "India", "Newyork"];
console.log("orignal order:" + newlocation);
console.log("order list:" + __spreadArray([], newlocation, true).sort());
console.log("orignal order : " + newlocation);
console.log("order list reverse alphabetical oder:" + __spreadArray([], newlocation, true).sort().reverse());
console.log("orignal order : " + newlocation);
console.log("reverse order: " + __spreadArray([], newlocation, true).reverse());
console.log("orignal order : " + newlocation);
console.log("reverse order reverse: " + __spreadArray([], newlocation, true).reverse().reverse());
console.log("orignal order : " + newlocation);
