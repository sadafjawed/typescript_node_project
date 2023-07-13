function store_car(manufacturer,model, {color="Red", price=20}={}) {
    this.manufacturer=manufacturer;
    this.model=model;
    this.color=color;
    this.price=price;    
}

let car1 = new store_car("Honda", 2020, {color:"Blue"});
console.log(car1);
let car2 = new store_car("Civic", "2021", {color:"Blue", price: 80});
console.log(car2);
