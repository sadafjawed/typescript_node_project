function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love phython"; }
    return size + "," + " " + message;
}
console.log(make_shirt());
console.log(make_shirt("medium", "i am so happy"));
