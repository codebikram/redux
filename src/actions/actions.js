export const incAction = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decAction = () => {
    return {
        type: "DECREMENT"
    }
}