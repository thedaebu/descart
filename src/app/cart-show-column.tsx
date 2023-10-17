import { Cart } from "@/my_types";

function CartShowColumn({ carts }: { carts: { [key: number]: Cart; }}) {
    return (
        <section className='cart-show-column'>
            Cart show column
            {Object.keys(carts).length > 0 && (
                <ul>
                    {Object.values(carts).map(cart => (
                        <li>
                            <p>{cart.address}</p>
                            <p>{cart.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CartShowColumn;