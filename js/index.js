const requestURL = 'json/pizzas.json';

async function fetchPizzasJson(){
    const response = await fetch(requestURL);
    const pizzas = await response.json();
    return pizzas;
}

fetchPizzasJson().then(pizza => {
    for (let index = 0; index < pizza.pizzas.length; index++) {
        let price = pizza.pizzas[index].price;
        let pizzaName = pizza.pizzas[index].name;
        let image = pizza.pizzas[index].image;
        let ingredients = pizza.pizzas[index].ingredients;


        pizzaSection.innerHTML += `
        <div class="pizzaCards"> 
        <div class="pizzaCard">
                <img src=${image} class="pizzaPhoto" alt="...">
                <div class="cardBody">
                <ul class="pizzaList list-group-flush">
                 <li class="pizzaItem"><h5 class="pizzaTitle">${pizzaName}</h5></li>
                <li class="pizzaItem">${price} €</li>
            </ul>
                <p class="pizzaText">${ingredients}</p>
            </div>
        </div>
        </div>`;
    }
});