'use client'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../actions/cart_actions";
import useDebounce from "@/hooks/debounce_hook";


function SearchColumn() {
    const [searchField, setSearchField] = useState<string>("");

    const dispatch = useDispatch();
    const fetchCarts = (search: string) => dispatch(cartActions.fetchCarts(search));

    const debouncedSearch = useDebounce(searchField)

    useEffect(() => {
        if (debouncedSearch) {
            fetchCarts(debouncedSearch);
        }
    }, [debouncedSearch]);

    return (
        <section className='search-column'>
            <input
                className='search-column__input'
                onChange={(e) => setSearchField(e.target.value)}
                placeholder='Search'
                type='text'
                value={searchField}
            />
        </section>
    );
}

export default SearchColumn;