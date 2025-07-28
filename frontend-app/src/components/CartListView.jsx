import { CartTableView } from "./CartTableView"

export const CartListView = ({cartList, handleRemoveProduct}) => {
     /*Vista tabla de productos del carro*/ 
    return (
        < div className="container max-w-xl mt-40" >
            {
                // Solamente mostramos tabla si hay artículos en la lista
                cartList.length > 0 && <CartTableView cartList={cartList} handleRemoveProduct={handleRemoveProduct} />
            }
        </div >
    )
}
