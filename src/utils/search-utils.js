export const updateSearchResult = (searchKey, currentCatalogueInView) =>{
        let resultentData = [];
        currentCatalogueInView.forEach(catalogue =>{
            let resultantObj    = {};
            resultantObj.category       = catalogue.category;
            resultantObj.category_id    = catalogue.category_id; 
            resultantObj.category_image = catalogue.category_image; 
            resultantObj.products       = catalogue.products.filter(eachProduct => {
                    if(eachProduct.product_name.toLowerCase().includes(searchKey.toLowerCase()) || eachProduct.product_brand.toLowerCase().includes(searchKey.toLowerCase())){
                            return eachProduct;
                    }  
                    return null;
                }
            );
            resultentData.push(resultantObj);
        })
        return resultentData;
}

export const updateFilterResult = (filterArray, allCatalogue) =>{
    if(filterArray.length === 0){
        return allCatalogue;
    }
    let resultentData = [];
    allCatalogue.forEach(catalogue =>{
        let resultantObj    = {};
        resultantObj.category       = catalogue.category;
        resultantObj.category_id    = catalogue.category_id; 
        resultantObj.category_image = catalogue.category_image; 
        resultantObj.products       = catalogue.products.filter(eachProduct => {
                return filterArray.map(eachBrand => eachBrand.toLowerCase()).includes(eachProduct.product_brand.toLowerCase().toLowerCase())? eachProduct: '';
            }
        );
        resultentData.push(resultantObj);
    })
    return resultentData;
}

