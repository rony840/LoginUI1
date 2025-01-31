import { ADD, SUB, MUL, DIV } from "../ActionTypes";

export const addValue = () => {
    return{
        type: ADD,
        payload: 10,
    };
};

export const subValue = () => {
    return{
        type: SUB,
        payload: 1,
    };
};

export const mulValue = () => {
    return{
        type: MUL,
        payload: 2,
    };
};

export const divValue = () => {
    return{
        type: DIV,
        payload: 2,
    };
};