import * as CartAPIUtil from "../util/api/cart_api_util";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export const RECEIVE_CARTS: string = "RECEIVE_CARTS";

const receiveCarts: Function = ({ data }: { data: any; }) => ({
    carts: data.carts,
    type: RECEIVE_CARTS
});

export const fetchCarts: Function = () => (dispatch: Dispatch<AnyAction>) => (
    CartAPIUtil.fetchCarts()
        .then((carts: any) => dispatch(receiveCarts(carts)))
);