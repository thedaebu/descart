'use client'
import { ChangeEvent, SetStateAction, useState } from "react";

function SearchColumn({ handleSearchParams }: { handleSearchParams: Function; }) {
    const [searchField, setSearchField] = useState<string>("");

    function handleSearchField(e: ChangeEvent<HTMLInputElement>) {
        handleSearchParams(e.currentTarget.value);
        setSearchField(e.currentTarget.value);
    }

    return (
        <section className='search-column'>
            <input
                onChange={handleSearchField}
                placeholder='Search'
                type='text'
                value={searchField}
            />
        </section>
    );
}

export default SearchColumn;