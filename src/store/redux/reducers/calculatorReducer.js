import { ADD, DIV, MUL, SUB,  } from "../ActionTypes";

const calculatorReducer = (state = 10, action) => {
    switch (action.type){
        case ADD:
            return state + action.payload;
        case SUB:
            return state - action.payload;
        case MUL:
            return state * action.payload;
        case DIV:
            return state / action.payload;
        default:
            return state;
    }
}

export default calculatorReducer;