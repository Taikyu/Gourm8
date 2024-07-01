import { createContext, useReducer } from "react";


const CartContext = createContext({
    items:[],
    addItem : (item)=>{},
    removeItem : (id)=>{}
})


function cartReducer(state,action){
    if (action.type === 'ADD') {
        const itemIndex = state.items.findIndex((item)=>item.id === action.item.id)
        const updatedItems = [...state.items]
        
        if (itemIndex > -1) {
            let foundItem = state.items[itemIndex]
            const updatedItem = {
                ...foundItem,
                quantity : foundItem.quantity + 1
            }
            updatedItems[itemIndex]=updatedItem
        } else {
            updatedItems.push({...action.item, quantity : 1})
        }
        return {...state, items : updatedItems}
    }
    if (action.type === "REMOVE") {
        const itemIndex = state.items.findIndex((item)=>item.id === action.id)
        const updatedItems = [...state.items]

        if (itemIndex > 1) {
            let foundItem = state.item[itemIndex]
            const updatedItem = {
                ...foundItem,
                quantity : foundItem.quantity - 1
            }
            updatedItems[itemIndex]=updatedItem
        } else {
            updatedItems.splice(itemIndex,1)
        }
        return {...state, items : updatedItems}
    }
    return state;
}

export function CartContextProvider ({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer,{items:[]})

    function addItem (item){
        dispatchCartAction({
            type : 'ADD',
            item,
        })
    }
    function removeItem (id){
        dispatchCartAction({
            type : 'REMOVE',
            id,
        })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }


    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;