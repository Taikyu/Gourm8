import { createContext, useState } from "react";


const UserStoryContext = createContext({
    progress: '',
    showCart: () => { },
    showCheckout: () => { },
    hideModal: () => { }
});


export function UserStoryProvider({ children, }) {
    const [userProgress, setUserProgress] = useState('')

    function showCart() {
        setUserProgress('CART')
    };
    function showCheckout() {
        setUserProgress('CHECKOUT')
    };
    function hideModal() {
        setUserProgress('')
    };


    const UserStoryCtx = {
        progress: userProgress,
        showCart,
        showCheckout,
        hideModal
    }
    return <UserStoryContext.Provider value={UserStoryCtx}>{children}</UserStoryContext.Provider>
}




export default UserStoryContext;