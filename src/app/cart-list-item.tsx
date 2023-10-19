import { Cart } from "@/my_types";

type Props = {
    cart: Cart;
    handleCurrentCart: Function;
};

function CartListItem(props: Props) {
    const { cart, handleCurrentCart } = props;
    const { address, areaCode, city, id, name, phoneNumber, state, status, website, zipCode } = cart;
    
    function addressDisplay() {
        return (
            <section>
                <p>{address}</p>
                <p>{`${city}, ${state} ${zipCode}`}</p>
            </section>
        );
    }

    function phoneDisplay() {
        return `(${areaCode}) ${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }

    return (
        <li
            className='cart-list-item'
            onClick={() => handleCurrentCart(id)}
        >
            <h2>{name}</h2>
            {addressDisplay()}
            <p>{phoneDisplay()}</p>
            {website && <p>{website}</p>}
        </li>
    );
}

export default CartListItem