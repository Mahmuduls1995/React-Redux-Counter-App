// step 3: create reducers 
//services/reducers/counterReducer.js
/*
reducer - handle logic for state update
count => count + 1
count => count - 1
count => 0
*/
import { INCREMENT,DECREMENT, RESET } from "../constants/counterConstant";


const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};

export default counterReducer;