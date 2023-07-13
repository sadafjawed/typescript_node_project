//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizza = ["peproni", "cheese", "fajita"];
for (var i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (var i = 0; i < pizza.length; i++) {
    console.log("I like " + pizza[i] + " pizza");
}
console.log("First, the combination of spicy pepperoni and melt-in-your-mouth mozzarella cheese is simply irresistible. Second, this is a versatile topping that can be paired with a variety of other ingredients, such as mushrooms, onions, and green peppers. third, pepperoni pizza is easy to customize to your own personal taste.\n I really like peproni pizza");
