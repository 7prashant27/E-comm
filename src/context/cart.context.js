import { createContext, useState } from "react";


export const cartContext = createContext();


const CartProvider = ({children}) => {
  // State for the number of items in the shopping cart.
    const [cartItem, setCartItem] = useState([]);

    /* 
         // id1: {
        //     count: 10,
        //     product: {},
        // }

       id1:{
            count: no of similar items, 
            product: {contains the api response ie the entire product with a particular id } 
     }
    */

    const addToCart = (product , countDelta)=>{
            // console.log(product)
            setCartItem( (prevVal) =>{

              return {
                ...prevVal ,
                [product.id] : prevVal[product.id] ? 
                
                {
                  count : prevVal[product.id].count + countDelta ,
                  product:product
                } : {
                  count :countDelta ,
                  product //this is a shortcut way to write product:product
                }
              }
            })
    }

  return ( //provider is a HOC
    <cartContext.Provider value ={{cartItem, addToCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider;
