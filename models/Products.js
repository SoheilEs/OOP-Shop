import Display from "./Display.js";

class Products extends Display { 
    constructor(parentNode, products, cart){

        super(parentNode, products)
        this.cart = cart; 
      
    }

    showProducts(){
        this.products.map( product => this.createCard(product))
    }
    createCard(data){
        const cardEl = document.createElement("div"); 
        cardEl.innerHTML= this.productImage(data)
        cardEl.innerHTML += this.productContent(data);
        this.parentNode.append(cardEl)
    }
 
    productContent(data){
        const {id,name, price} = data;
        const info =`
            <div id="product-info">
                <h3>${name}</h3>
                <div>
                    <span>$ ${price}</span>
                    <button data-id=${id}>+</button>
                </div>
            </div>
                 `;

        return info
    }

    handleEvent() {
        const element = event.target
        if(element.tagName === "BUTTON") {
            this.addToCart(element.dataset.id)
        }
    }
    addToCart(id){
        const product = this.products.find(p => p.id === +id)
        this.cart.products.push(product)  
        this.cart.showProducts()
    }
 
} 
export default Products;