import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop_data";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/Firebase.utils";
export const ProductsContext = createContext({
    products: []
});


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    // useEffect(() => {
    //     addCollectionAndDocuments('categoriess', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap =  await getCollectionAndDocuments()
            console.log({categoryMap});
        }   
        getCategoriesMap();
    })

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}