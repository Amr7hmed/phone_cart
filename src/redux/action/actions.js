export const additem = (proudect)=>{
    return{
        type: "ADDITEM",
        payload:proudect
    }
}

export const deleteitem = (proudect)=>{
    return{
        type: "DELETEITEM",
        payload:proudect
    }
}

