const requestURL = 'http://localhost:3000/pizzas';

async function fetchPizzasJson(){
    const response = await fetch(requestURL);
    const pizzas = await response.json();
    return pizzas;
}

fetchPizzasJson().then(pizza=>{
    for (let index=0; index<pizza.pizzas.lenghth; index++){
        let price = pizza.pizzas[index].price;
        console.log(price);
    }
});