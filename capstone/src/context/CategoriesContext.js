import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop_data";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/Firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
}); 


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap};

    // useEffect(() => {
    //     addCollectionAndDocuments('categoriess', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap =  await getCollectionAndDocuments()
            setCategoriesMap(categoryMap);
        }   
        getCategoriesMap();
    }, [])

    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}