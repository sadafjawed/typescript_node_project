let magicians_names=["ali","yumna","ayeza"]
 magicians_names=magicians_names.slice()
function show_magicians40(){
    for (var i=0;i<magicians_names.length;i++){
        console.log(magicians_names[i])
    }}
function great_magician29(message="The great ") {
    for (var i = 0; i < magicians_names.length; i++) {
        console.log( message+magicians_names[i]);
    }
}
great_magician29();
    console.log("New array : ");
     show_magicians40();

    console.log("Original : ");
    show_magicians40();

