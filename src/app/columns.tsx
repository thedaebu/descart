'use client'

import { Cart } from "@/my_types";
import CartListColumn from "./cart-list-column";
import CartShowColumn from "./cart-show-column";
import SearchColumn from "./search-column";
import { useSelector } from "react-redux";
import { useState } from "react";

function Columns() {
    const carts: { [key: number]: Cart; } = useSelector((state: any) => state.entities.carts);

    const [currentCart, setCurrentCart] = useState<number>(-1);

    function handleCurrentCart(id: number) {
        setCurrentCart(id);
    }

    return (
        <section className='columns'>
            <SearchColumn />
            <CartListColumn
                carts={carts}
                currentCart={currentCart}
                handleCurrentCart={handleCurrentCart}
            />
            <CartShowColumn currentCart={currentCart} />
        </section>
    )
}

export default Columns;