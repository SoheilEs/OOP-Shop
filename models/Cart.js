import Display from "./Display.js";

class Cart extends Display {
    constructor(parentNode, price){
        super(parentNode);
        this.price = price;
        this.products = []; 
        this.toShow =[];
    }
  

    productImage(data){
        const {image, alt} = data;
        const img = `<img src="${image}" alt="${alt}" />`;
        return img;
    }
    productInfo(data){
          const {name,price} = data;
          const info = `
            <div id="cart-info">
                 <h4>${name}</h4> 
                 <p>$ ${price}</p>
            </div>
          `;
          return info
    }
    productControl(data,qty){
        const { id } = data;
        const control = `
            <div id="cart-control">
                 <div>
                     <button data-id=${id}>-</button>
                     <span>${qty}</span>
                     <button data-id=${id}>+</button>
                 </div>
                 <button data-id=${id}>Remove</button> 
            </div>
        `;

        return control
    }

    handleEvent(){
        const tagName = event.target.tagName; 
        const id = event.target.dataset.id;
        const type = event.target.innerText;

        if(tagName !== "BUTTON") return;
         
        switch(type){
            case "+":
                this.increase(id)
                break;
            case "-":
                this.decrease(id)
                break;
            case "Remove":
                this.remove(id)
                break; 
        }
    }
    increase(id){
        const product = this.products.find (item => item.id === +id)
        this.products.push(product);
        this.showProducts()
    }
    decrease(id){
        const index = this.products.findIndex (item => item.id === +id)
        this.products.splice(index,1)
        this.showProducts()
    }
    remove(id){
        const product = this.products.filter(item => item.id !== +id)
        this.products =  product;    
        this.showProducts() 
    }
    calculateTotalPrice(){
         const total = this.products.reduce((acc, curr) => (acc+=curr.price) ,0)
         this.price.innerText = total
    }
}
export default Cart; 