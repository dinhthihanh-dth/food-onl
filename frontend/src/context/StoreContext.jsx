import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1,
            }));

        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {

        const respone = await axios.get(url + "/api/food/list");
        setFoodList(respone.data.data)
    }

    const loadCartData = async (token) => {
        const respone = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(respone.data.cartData);
    }


    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const tokenFromStorage = localStorage.getItem("token");
            if (tokenFromStorage) {
                setToken(tokenFromStorage);
                await loadCartData(tokenFromStorage);
            }
        }
        loadData();
    }, []);



    const contentValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contentValue}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;
