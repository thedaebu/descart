'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import * as cartActions from "../actions/cart_actions";
import { Cart } from "@/my_types";
import Header from "./header";
import CartShowColumn from "./cart-show-column";
import SearchColumn from "./search-column";
import CartListColumn from "./cart-list-column";

function Page() {
    const carts: { [key: number]: Cart; } = useSelector((state: any) => state.entities.carts);

    const dispatch = useDispatch();
    const fetchCarts = () => dispatch(cartActions.fetchCarts());

    useEffect(() => {
        fetchCarts();
    }, []);

    return (
        <>
            {<Header />}
            <section className='columns'>
                <SearchColumn />
                <CartListColumn />
                <CartShowColumn carts={carts} />
            </section>
        </>
    );
}

export default Page;