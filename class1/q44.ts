function make_sandwich(...items) {
    console.log("This sandwich has following items : ");
    items.forEach(
        (item) => {
            console.log(item);
        }
    );}
make_sandwich("Salt", "Cheese", "Ketchup", "Bread");
make_sandwich("Cheese", "Ketchup", "Bread");
make_sandwich("Salt", "Cheese", "Ketchup", "Bread", "Aginomoto");