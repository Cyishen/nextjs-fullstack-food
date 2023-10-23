import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware"

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create(persist<CartType & ActionTypes>( (set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,


    addToCart(item) {
        //取得購物車所有商品
        const products = get().products
        console.log("新增",products)
        //尋找find.購物車中id是否與新添加商品item.id相同 && title是否相同
        const productInCart = products.find( product => product.id === item.id && product.optionTitle === item.optionTitle)

        //商品存在:更新數量與價格
        if( productInCart ){
            const updateProducts = products.map( (product) => product.id === productInCart.id && product.optionTitle === item.optionTitle ? {
                ...item,
                quantity: item.quantity + product.quantity,
                price: item.price + product.price,
            } : product)
    
            set( (state)=> ({
                products: updateProducts,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }))
        } else {
            //商品不存在: 添加...item商品所有屬性到...products中
            const updateProducts = [...products, {
                ...item,
                quantity: item.quantity,
                price: item.price,
            }]
    
            set( (state) => ({
                products: updateProducts,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }));
        }
    },
    removeFromCart(item) {
        set((state) => ({
            products: state.products.filter( (product) => product.id !== item.id || product.optionTitle !== item.optionTitle),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalItems - item.quantity === 0 ? 0 : state.totalPrice - item.price,
        }));
    }
}), {name: "cart", skipHydration: true} ))