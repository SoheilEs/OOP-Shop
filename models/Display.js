class Display {
    constructor(parentNode, products){
        this.parentNode = parentNode;
        this.products = products;
        this.parentNode.addEventListener("click", this);
    }

    showProducts(){
        this.toShow = [...new Set(this.products)]

        this.parentNode.innerHTML = "";
        this.toShow.map( item => {
            const qty = this.products.filter(p => p.id === item.id).length;
            this.createCard(item,qty);
        } )
        this.calculateTotalPrice()
    }
    createCard(data,qty){
        const cartEl = document.createElement("div");
        const imgEl = this.productImage(data); 
        const infoEl = this.productInfo(data)
       

        cartEl.innerHTML = imgEl
        cartEl.innerHTML += infoEl
        if(this.constructor.name === "Cart"){
            
            const controlEl = this.productControl(data,qty)
            cartEl.innerHTML += controlEl
        }

        this.parentNode.append(cartEl)
    }
    productImage(data){
        const{image, alt} = data;
        const img = `<img src="${image}" alt="${alt}" />`;
        return img;
    }
}

export default Display