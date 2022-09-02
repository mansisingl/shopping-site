import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === productToAdd.id
        );

        if(existingCartItem){
            return (cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
             {...cartItem, quantity: cartItem.quantity + 1} : cartItem ))
        }
    
        return [...cartItems, {...productToAdd, quantity: 1}]
    
}

const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    
    return (cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    ))
}

    const deleteCartItem = (cartItems, clearCartItem) => cartItems.filter((cartItem) => {
        return cartItem.id !==  clearCartItem.id})


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    totalAmount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (clearCartItem) => {
        setCartItems(deleteCartItem(cartItems, clearCartItem))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total,cartItem) => {
           return total + cartItem.quantity 
        }, 0)
            setCartCount(newCartCount);
       }, [cartItems])

    useEffect(() => {
         const totalAmount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.price * cartItem.quantity
         }, 0)
         setTotalAmount(totalAmount);
    }, [cartItems])
       


    const value = {isCartOpen, setIsCartOpen, addItemToCart,removeItemFromCart,clearItemFromCart, cartItems,cartCount,totalAmount}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

