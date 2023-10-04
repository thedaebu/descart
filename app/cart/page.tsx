'use client'
import { useEffect, useState } from "react";

function CartPage() {
    const [mounted, setMounted] = useState<boolean>(true);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    return (
        <>
            <div>
                <p>cart page</p>
            </div>
        </>
    );
}

export default CartPage;