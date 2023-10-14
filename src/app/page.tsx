'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import * as cartActions from "../actions/cart_actions";
import { Cart } from "@/my_types";

function Page() {
    const carts: { [key: number]: Cart; } = useSelector((state: any) => state.entities.carts);

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