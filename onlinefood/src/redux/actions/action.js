export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}





export const DEL=(id)=>{
    return{
        type:"DEL_CART",
        payload:id
    }
}

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}