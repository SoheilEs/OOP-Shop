import Cart from "./models/Cart.js"
import Products from "./models/Products.js"
import { fetchData } from "./utils/utils.js"


const productNode = document.getElementById("products")
const cartListNode = document.getElementById("cart-list")
const priceNode = document.getElementById("total-price").querySelector("span")

const render = async ()=>{
    const data = await fetchData()
    const cart = new Cart(cartListNode,priceNode) 
    const products = new Products(productNode,data,cart)
    products.showProducts()
  
}
document.addEventListener('DOMContentLoaded',render) 