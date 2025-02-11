export interface Food {
    id : number,
    name : string,
    description : string,
    store : string,
    url : string,
    isProcessed : boolean,
    createdAt : Date,
    rating : number,
}

export interface FoodProcessed {
    id : number,
    foodId : number,
    brandName : string,
    pricePerContainer : number,
    servingSizeType : string,
    servingSize : number,
    servingsPerContainer : number,
    fatPerServing : number,
    carbsPerServing : number,
    proteinPerServing : number,
    caloriesPerServing : number,
}

export interface FoodProduce {
    id : number,
    foodId : number,
    servingSizeType : string,
    servingSize : number,
    pricePerServing : number,
    fatPerServing : number,
    carbsPerServing : number,
    proteinPerServing : number,
    caloriesPerServing : number,
}
