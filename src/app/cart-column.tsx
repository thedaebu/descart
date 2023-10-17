import { Cart } from "@/my_types";

function CartColumn({ carts }: { carts: { [key: number]: Cart; }}) {
    return (
        <section className='cart-column'>
            Cart column
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

export default CartColumn;