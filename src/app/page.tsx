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

    const [searchParams, setSearchParams] = useState<string>("");

    const dispatch = useDispatch();
    const fetchCarts = (search: string) => dispatch(cartActions.fetchCarts(search));

    useEffect(() => {
        fetchCarts("Portland");
    }, []);

    function handleSearchParams(string: string) {
        setSearchParams(() => string);
    }

    return (
        <>
            {<Header />}
            <section className='columns'>
                <SearchColumn handleSearchParams={handleSearchParams} />
                <CartListColumn />
                <CartShowColumn carts={carts} />
            </section>
        </>
    );
}

export default Page;