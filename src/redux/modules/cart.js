const GET_CART_SUCCESS = "cart/GET_CART_SUCCESS";

const intialState = {
    items: [],
};

export default function reducer(state = intialState, action) {
    switch(action.type) {
        case GET_CART_SUCCESS:
         return {
             ...state,
         };
        default:
        return state;
    }
}