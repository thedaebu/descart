'use client'
import { fetchCarts } from "@/util/api/cart_api_util";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
    const [carts, setCarts] = useState<Object>({});

    useEffect(() => {
        // fetch('http://localhost:8080/api/carts')
        //     .then(res => res.json())
        //     .then(data => setCarts(() => data));
        fetchCarts()
            .then(res => setCarts(() => res.data))
    }, []);

    return (
        <>
            <h1>Hello, Next.js!s</h1>
            {Object.keys(carts).length > 0 && (
                <>
                    {Object.values(carts)[0].address}
                </>
            )}
        </>
    );
}

export default Page;