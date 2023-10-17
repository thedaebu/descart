import * as CartAPIUtil from "../util/api/cart_api_util";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const RECEIVE_CARTS: string = "RECEIVE_CARTS";

const receiveCarts: Function = ({ data }: { data: any; }) => ({
    carts: data.carts,
    type: RECEIVE_CARTS
});

export const fetchCarts: Function = (search: string) => (dispatch: Dispatch<AnyAction>) => (
    CartAPIUtil.fetchCarts(search)
        .then((carts: AxiosResponse) => dispatch(receiveCarts(carts)))
);