import axios from "axios";

export function fetchCarts(search: string) {
    return axios({
        data: {
            search
        },
        method: 'POST',
        url: "http://localhost:8080/api/carts/index"
    });
}
