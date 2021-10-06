export const incrementAction = (total) => {
    return{
        type: "INCREMENT",
        total
    }
}

export const decrementAction = (total) => {
    return{
        type: "DECREMENT",
        total
    }
}