const requestURL = '../json/pizzas.json';

async function fetchPizzasJson(){
    const response = await fetch(requestURL);
    const pizzas = await response.json();
    return pizzas;
}

fetchPizzasJson().then(pizza=>{
    for (let index=0; index<pizza.pizzas.length; index++){
        let price = pizza.pizzas[index].price;
        let pizzaName = pizza.pizzas[index].name;
        console.log(pizzaName + "-" + price);
    }
});