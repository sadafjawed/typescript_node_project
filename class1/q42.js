var magicians_names2 = ["ali", "yumna", "ayeza"];
function great_magician1(message) {
    if (message === void 0) { message = "The great "; }
    for (var i = 0; i < magicians_names2.length; i++) {
        console.log(message + magicians_names2[i]);
    }
}
console.log(great_magician1());
