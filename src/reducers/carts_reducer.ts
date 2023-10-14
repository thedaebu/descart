import { RECEIVE_CARTS } from "@/actions/cart_actions";

const cartsReducer = (state: any = {}, action: any = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CARTS:
            return action.carts;
        default:
            return state;
    }
};

export default cartsReducer;