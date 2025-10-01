import axios from "axios";

//fetch all products
export const fetchProductAPI = async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log("Products response:",res.data);
        return res.data;
    } catch (err) {
        console.log("Error in fetching products:", err);
    }
};

//fetch product by id
export const fetchProductByID = async (id) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res.data)
        return res.data;
    }
    catch (err) {
        console.log(`Error fetching product by id: ${id}`, err);
    }
}
