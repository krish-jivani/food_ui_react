import { createContext, useState ,useEffect} from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{

    const[cartItems,setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}) )
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}) )
    }

    const gettotalcartamt= ()=>{
        let totalamt=0;
        for(const item in cartItems)
        {

            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product._id===item);
                totalamt+= itemInfo.price* cartItems[item];
            }      
        }
        return totalamt;
    }

    const contextValue ={
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        gettotalcartamt

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;