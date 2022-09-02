import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop_data";
// import { addCollectionAndDocuments } from "../utils/firebase/Firebase.utils";

export const ProductsContext = createContext({
    products: []
});


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    // useEffect(() => {
    //     addCollectionAndDocuments('categoriess', SHOP_DATA)
    // }, [])

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}