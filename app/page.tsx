import Link from "next/link";

function Page() {
    return (
        <>
            <h1>Hello, Next.js!</h1>
            <Link href={"/cart"}>cart</Link>
        </>

    );
}

export default Page;