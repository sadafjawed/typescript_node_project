function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("This sandwich has following items : ");
    items.forEach(function (item) {
        console.log(item);
    });
}
make_sandwich("Salt", "Cheese", "Ketchup", "Bread");
make_sandwich("Cheese", "Ketchup", "Bread");
make_sandwich("Salt", "Cheese", "Ketchup", "Bread", "Aginomoto");
