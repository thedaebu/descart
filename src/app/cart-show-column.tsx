import { Cart } from "@/my_types";
import { useSelector } from "react-redux";

function CartShowColumn({ currentCart }: { currentCart: number; }) {
    const cart = useSelector((state: any) => state.entities.carts[currentCart]);

    function cartDisplay() {
        const { address, areaCode, city, id, name, phoneNumber, state, status, website, zipCode } = cart;

        return (
            <>
                <h2>{name}</h2>
                {addressDisplay(address, city, state, zipCode)}
                <p>{phoneDisplay(areaCode, phoneNumber)}</p>
                {website && <p>{website}</p>}
            </>
        )
    }

    function addressDisplay(address: string, city: string, state: string, zipCode: string) {
        return (
            <section>
                <p>{address}</p>
                <p>{`${city}, ${state} ${zipCode}`}</p>
            </section>
        );
    }

    function phoneDisplay(areaCode: string, phoneNumber: string) {
        return `(${areaCode}) ${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }

    return (
        <section className='cart-show-column'>
            Cart show column
            {currentCart >= 0 && cartDisplay()}
        </section>
    );
}

export default CartShowColumn;