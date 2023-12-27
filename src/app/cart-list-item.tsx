import { Cart } from "@/my_types";

type Props = {
    cart: Cart;
    currentCart: number;
    handleCurrentCart: Function;
};

function CartListItem(props: Props) {
    const { cart, currentCart, handleCurrentCart } = props;
    const { address, area_code, city, id, instagram, name, phone_number, state, status, website, zip_code } = cart;

    function addressDisplay() {
        return (
            <section>
                <p>{address}</p>
                <p>{`${city}, ${state} ${zip_code}`}</p>
            </section>
        );
    }

    function phoneDisplay() {
        return (
            <p>
                {`(${area_code}) ${phone_number.slice(0,3)}-${phone_number.slice(3)}`}
            </p>
        );
    }

    return (
        <li
            className={currentCart === id ? 'cart-list-item--highlighted' : 'cart-list-item'}
            onClick={() => handleCurrentCart(id)}
        >
            <h2>{name}</h2>
            {addressDisplay()}
            {area_code && phoneDisplay()}
            {website && <p>{website}</p>}
        </li>
    );
}

export default CartListItem