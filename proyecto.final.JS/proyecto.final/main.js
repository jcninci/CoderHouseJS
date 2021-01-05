let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'jarra escocesa',
        tag: 'jarraEscocesa',
        price: 3500,
        inCart: 0
    },
    {
        name: 'ensaladera gotas',
        tag: 'ensaladeraGotas',
        price: 3500,
        inCart: 0
    },
    {
        name: 'plato con higos',
        tag: 'platoConHigos',
        price: 3500,
        inCart: 0
    },
    {
        name: 'taza de frutillas',
        tag: 'tazaDeFrutillas',
        price: 3500,
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
     cartNumbers(products[i]);
    })
}

function  onLoadCartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

 function cartNumbers(products){
    let productNumbers = localStorage.getItem('cartNumbers');
    
     
    
    productNumbers = parseInt(productNumbers);
    
    if ( productNumbers) {
        localStorage.setItem('cartNumbers' , productNumbers + 1);
        document.querySelector ('.carrito span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers' , 1);
        document.querySelector ('.carrito span').textContent = 1; 
    }

    setItems(products);

 }

 function setItems(products){
    let cartItems = localStorage.getItem ('prodcutsInCart');
    cartItems = JSON.parse(cartItems);
    console.log ("my cartItems are" , cartItems); 

    if(cartItems != null){
        
        if(cartItems[products.tag] ==undefined){
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    products.inCart = 1;
     cartItems = {
        [products.tag]: products 
    }
    
    
     localStorage.setItem("productsInCart" , JSON.stringify (cartItems));

 }
 
 onLoadCartNumbers(); 