import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from "./ItemsReducerActions";

/**Función reductora
 * - recibe un estado que es un objeto, y una acción que es la que contiene el dispatch
 * - en función de los parámetros pasados por el dispatch ejecuta las acciones
 * - tiene que retornar nuevas instancias porque los objetos en React son inmutables
 */
export const ItemsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('entering add to cart')
            return [...state,
            {
                product: action.payload,
                quantity: 1
            }
            ]

        case UPDATE_QUANTITY:
            // Ojo sin el return el map devuelve una lista de undefined y rompe la app.
            console.log('entering update quantity')
            return state.map((listItem) => {
                if (listItem.product.id == action.payload.product.id) {
                    console.log('product finded')
                    return {
                        ...listItem,
                        quantity: listItem.quantity + 1
                    };
                }
                return listItem;
            })

        // Ojo el filter devuelve la lista con los productos que cumplen condición id != del elemento clicado
        case DELETE_FROM_CART:
            console.log('entering deleting from cart')
            return state.filter(prodList => prodList.product.id != action.payload)

        default:
            return state;
    }

}
