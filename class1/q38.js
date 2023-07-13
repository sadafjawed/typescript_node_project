function describe_city(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return city + " is in " + country;
}
console.log(describe_city());
console.log(describe_city("Newyork", "America"));
console.log(describe_city("toronto", "Canada"));
