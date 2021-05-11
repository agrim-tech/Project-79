var pizzas =[
    "Margherita Pizza",
    "Farmhouse Pizza",
    "Cheese And Corn Pizza",
    "Paneer Pizza",
    "Deluxe Veggie Pizza"
];
var list;
var count;
function showmenu(){
    list ="<ol class= 'menu_list'>";
    pizzas.sort();
    for (count = 0; count <= pizzas.length-1; count++) {
        list = String(list) + '<li>' + pizzas[count] + '</li>';
    }
    list = String(list) +"</ol>";
    document.getElementById("display_menu").innerHTML = list;
}
function addtoppings(){
    pizzas.sort();
    pizzas.push(document.getElementById("add_item").value)
    console.log(pizzas);
}
function add_item(){
    list ="<section class= 'cards'>";
    pizzas.sort();
    for (count = 0; count <= pizzas.length-1; count++) {
        list = String(list) + '<div class="card">' +' <img src="pizzaImg.png"> '+'<p class="menu_content"> '+ pizzas[count] + '</p>'+'</div>';
    }
    list = String(list) +"</section>";
    document.getElementById("display_addedmenu").innerHTML = list;
}
