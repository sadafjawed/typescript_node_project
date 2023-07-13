let magicians_names2 = ["ali", "yumna", "ayeza"];
function great_magician1(message="The great ") {
    for (let i = 0; i < magicians_names2.length; i++) {
        console.log( message+magicians_names2[i]);
    }
}
console.log(great_magician1());
