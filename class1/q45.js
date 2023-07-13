function store_car(manufacturer, model, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.color, color = _c === void 0 ? "Red" : _c, _d = _b.price, price = _d === void 0 ? 20 : _d;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
}
var car1 = new store_car("Honda", 2020, { color: "Blue" });
console.log(car1);
var car2 = new store_car("Civic", "2021", { color: "Blue", price: 80 });
console.log(car2);
