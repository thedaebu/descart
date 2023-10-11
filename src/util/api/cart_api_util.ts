import axios from "axios";

export function fetchCarts() {
    return axios.get("http://localhost:8080/api/carts");
}
