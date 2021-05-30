	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactose: false,
		nutsFree: true,
		organic:true,
		price: 1.99
	},
	{
		name: "bread",
		lactose: true,
		nutsFree: false,
		organic:true,
		price: 2.35
	},
	{
		name: "salmon",
		lactose: false,
		nutsFree: true,
		organic:true,
		price: 10.00
	},
	{
		name:"eggs",
		lactose: false,
		nutsFree: true,
		organic:false,
		price: 5.00
	},
	{
		name:"pork",
		lactose:false,
		nutsFree:true,
		organic:false,
		price: 6.00
	},
	{
		name:"ground beef",
		lactose:false,
		nutsFree:true,
		organic:false,
		price:8.50
	},
	{
		name:"oranges",
		lactose:false,
		nutsFree:true,
		organic:true,
		price:4.98
	},
	{
		name:"strawberries",
		lactose:false,
		nutsFree:true,
		organic:false,
		price:3.97
	},
	{
		name:"water(24 pack)",
		lactose:false,
		nutsFree:true,
		organic:false,
		price:12.00
	},
	{
		name:"spinachs",
		lactose:false,
		nutsFree:true,
		organic:true,
		price:2.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let products_prices=[];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactose == false)){
			products_prices.push(prods[i].price);
		}
		else if ((restriction == "nutsFree") && (prods[i].nutsFree == true)){
			
			products_prices.push(prods[i].price);
		}
		else if((restriction == "Organic") && (prods[i].organic==true)){
			
			products_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			
			products_prices.push(prods[i].price);
		}

		
	}
	
	
	products_prices.sort(function(a, b){return a - b});
	for(let i=0;i<products_prices.length;i+=1){

		for (let j=0;j<prods.length;j++){

			if(prods[j].price==products_prices[i]){
				
				product_names.push(prods[j].name+" "+prods[j].price);
				break;
			}

		}
		
	}
		
		

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	

	for(let i = 0; i<products.length; i++){
		for(let j=0; j<chosenProducts.length;j++){

			if(chosenProducts[j].indexOf(products[i].name) != -1){
				
				totalPrice += products[i].price;
			}
		}
	}
	return totalPrice.toFixed(2);
}

