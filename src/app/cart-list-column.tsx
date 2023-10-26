import { Cart } from "@/my_types";
import CartListItem from "./cart-list-item";

type Props = {
    carts: { [key: number]: Cart; };
    currentCart: number;
    handleCurrentCart: Function;
};

function CartListColumn(props: Props) {
    const { carts, currentCart, handleCurrentCart } = props;

    return (
        <section className='cart-list-column'>
            <h2 className='cart-list-column__header'>Cart List</h2>
            {Object.keys(carts).length > 0 && (
                <ul>
                    {Object.values(carts).map(cart => (
                        <CartListItem
                            cart={cart}
                            currentCart={currentCart}
                            handleCurrentCart={handleCurrentCart}
                            key={cart.id}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CartListColumn;