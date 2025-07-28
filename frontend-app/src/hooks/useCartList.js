import { useEffect, useReducer, useState } from "react";
import { ItemsReducer } from "../reducer/ItemsReducer";
import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from "../reducer/ItemsReducerActions";


const initialCartList = JSON.parse(sessionStorage.getItem('cart') || []);

export const useCartList = () => {

    /**Utilizamos reducer para manejar estados
     * useReducer recibe una función reductora y un estado inicial, el estado es un objeto
     * devuelve el nuevo estado cartList, y un dispatch que es un objeto para pasar parámetros
     * payload en este caso pero puede llamarse libremente
     */
    const [cartList, dispatch] = useReducer(ItemsReducer, initialCartList);
    const [itemCounter, setItemCounter] = useState();

    const calculateTotalItems =(items)=>{
        return items.reduce((accum, item)=>accum + item.quantity,0)
    }

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartList))
        setItemCounter(calculateTotalItems(cartList))
    }, [cartList])

    // Añade un producto a la tabla carro de la compra.
    const handleAddProduct = (product) => {
        const findedProduct = cartList.find((prodList) => prodList.product.id == product.id)
        if (findedProduct) {
            dispatch({
                type: UPDATE_QUANTITY,
                payload: findedProduct
            })
        } else {
            dispatch({
                type: ADD_TO_CART,
                payload: product
            })
        }
    }
    // Elimina un elemento de la lista cuando pulsa en el botón eliminar de la tabla
    const handleRemoveProduct = ({id}) => {
        dispatch({
            type: DELETE_FROM_CART,
            payload: id
        })
    
        
    }
  return [
    cartList,
    handleAddProduct,
    handleRemoveProduct,
    itemCounter
  ]
}
