'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../actions/cart_actions";
import { useEffect, useState } from "react";

function Page() {
    const carts: {} = useSelector((state: any) => state.entities.carts);

    const dispatch = useDispatch();
    const fetchCarts = () => dispatch(cartActions.fetchCarts());

    useEffect(() => {
        fetchCarts();
    }, []);

    return (
        <>
            <h1>Hello, Next.js!s</h1>
            {Object.keys(carts).length > 0 && (
                <>
                    {Object.values(carts)[0].address}
                </>
            )}
        </>
    );
}

export default Page;