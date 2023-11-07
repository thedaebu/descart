import { Cart } from "@/my_types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function CartShowColumn({ currentCart }: { currentCart: number; }) {
    const cart = useSelector((state: any) => state.entities.carts[currentCart]);
    useEffect(() => {

    }, [cart]);

    function cartDisplay() {
        const { address, area_code, city, id, instagram, name, phone_number, state, status, website, zip_code } = cart;

        return (
            <>
                <h2>{name}</h2>
                {addressDisplay(address, city, state, zip_code)}
                <p>{phoneDisplay(area_code, phone_number)}</p>
                {website && <p>{website}</p>}
            </>
        )
    }

    function addressDisplay(address: string, city: string, state: string, zip_code: string) {
        return (
            <section>
                <p>{address}</p>
                <p>{`${city}, ${state} ${zip_code}`}</p>
            </section>
        );
    }

    function phoneDisplay(area_code: string, phone_number: string) {
        return `(${area_code}) ${phone_number.slice(0,3)}-${phone_number.slice(3)}`;
    }

    return (
        <section className='cart-show-column'>
            Cart show column
            {currentCart >= 0 && cartDisplay()}
        </section>
    );
}

export default CartShowColumn;